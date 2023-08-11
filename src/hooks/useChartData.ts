import { useEffect, useState } from "react";
import { chain, sortBy, sumBy } from "lodash";
import { getChainId } from "../utils/provider";
import { DocumentNode, gql } from "@apollo/client";
import { useVolumeChartGraphUrl } from "src/api/graphUrl";

const timestampProp = "id";
const from = "1627660800"; //(new Date("2021-7-31").getTime() / 1000).toFixed();
const to = (new Date().getTime() / 1000).toFixed(0);
const MOVING_AVERAGE_DAYS = 7;
const MOVING_AVERAGE_PERIOD = 86400 * MOVING_AVERAGE_DAYS;
const PROPS = "margin liquidation swap mint burn".split(" ");
const queryGql = gql(`{
    volumeStats(orderBy: id, orderDirection: desc, first: 1) {
        cumulative 
    }
    glpStats(
        first: 1000
        orderBy: ${timestampProp}
        orderDirection: desc
        where: {
          period: daily
          ${timestampProp}_gte: ${from}
          ${timestampProp}_lte: ${to}
        }
        subgraphError: allow
    ) {
        ${timestampProp}
        aumInUsdg
        glpSupply
        distributedUsd
        distributedEth
      }
    tradingStats(
      first: 1000
      orderBy: timestamp
      orderDirection: desc
      where: { period: "daily", timestamp_gte: ${from}, timestamp_lte: ${to} }
      subgraphError: allow
    ) {
      timestamp
      profit
      loss
      profitCumulative
      lossCumulative
      longOpenInterest
      shortOpenInterest
      profitCumulativeAndFee
      lossCumulativeAndFee
      lossAndFee
      profitAndFee
      
      
    }
    feeStats(
      first: 1000
      orderBy: id
      orderDirection: desc
      where: { period: daily, id_gte: ${from}, id_lte: ${to} }
      subgraphError: allow
    ) {
      id
      margin
      marginAndLiquidation
      swap
      mint
      burn
     }
    }`);
export const useAllChartData = () => {
  const chainID = getChainId();

  const { data, loading, error } = useQueryPromise();
  const filterData = filterAllData(data, chainID);
  return { ...filterData, loading, error };
};

const useQueryPromise = () => {
  const graphClient = useVolumeChartGraphUrl();
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState(false);
  useEffect(() => {
    setData(undefined);
    setError(false);
    if (!queryGql) return;
    graphClient
      .query({ query: queryGql })
      .then((res: any) => {
        setData(res.data);
      })
      .catch((err: any) => {
        setError(true);
        console.log("graphql useQueryPromise err: ", err);
      });
  }, [graphClient]);

  return {
    data,
    loading: !error && !data,
    error,
  };
};

const filterAllData = (data: any, chainID: number) => {
  if (!data) return;
  const { volumeStats, feeStats } = data;
  const totalVolume = volumeStats[0].cumulative / 1e30;
  const feeData = filterTotalFees(feeStats, chainID);
  return {
    totalVolume,
    totalFees: feeData?.feeTotalAmount,
  };
};

const filterTotalFees = (data: any, chainID: number) => {
  if (!data) return;
  const chartData = sortBy(data, "id").map(item => {
    const ret: any = { timestamp: item.timestamp || item.id };

    PROPS.forEach(prop => {
      if (item[prop]) {
        ret[prop] = item[prop] / 1e30;
      }
    });
    if (chainID === 42161) {
      ret.liquidation = item.onlyLiquidationFee / 1e30;
    } else {
      ret.liquidation = item.marginAndLiquidation / 1e30 - item.margin / 1e30;
    }

    ret.all = PROPS.reduce((memo, prop) => memo + ret[prop], 0);

    return ret;
  });

  let cumulative = 0;
  const cumulativeByTs: any = {};
  const arr = chain(chartData)
    .groupBy(item => item.timestamp)
    .map((values, timestamp: any) => {
      const all = sumBy(values, "all");
      cumulative += all;
      let movingAverageAll;
      const movingAverageTs = timestamp - MOVING_AVERAGE_PERIOD;

      if (movingAverageTs in cumulativeByTs) {
        movingAverageAll = (cumulative - cumulativeByTs[movingAverageTs]) / MOVING_AVERAGE_DAYS;
      }
      const ret: any = {
        timestamp: Number(timestamp),
        all,
        cumulative,
        movingAverageAll,
      };
      PROPS.forEach(prop => {
        ret[prop] = sumBy(values, prop);
      });
      cumulativeByTs[timestamp] = cumulative;
      return ret;
    })
    .value()
    .filter((item: any) => item.timestamp >= from);
  const total = arr[arr.length - 1]?.cumulative;
  return {
    totalFeeData: arr,
    feeTotalAmount: total ?? 0,
  };
};
