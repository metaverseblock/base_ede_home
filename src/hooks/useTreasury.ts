import { Contract } from "ethers";
import { useCallback, useEffect, useMemo, useState } from "react";
import { contractAddress } from "src/constants/address";
import { getPrice_EDE } from "src/utils/edePrice";
import { getProvider } from "src/utils/provider";
import { abi as TreasuryABI } from "src/abis/Treasury.json";
import { abi as ElpManagerABI } from "src/abis/ElpManager.json";
import { BN, toFromBN } from "../utils/bn";
import { getPrice_ELP, useGetLpPrice } from "src/hooks/useGetLpPrice";

export const useTreasury = () => {
  const [data, setData] = useState<any>();
  const edePrice = getPrice_EDE();
  const price_EDE_LP = useGetLpPrice(contractAddress.EDE_LP);
  // console.log(data, "data");

  useEffect(() => {
    async function fetch() {
      const provider = getProvider();
      const price_ELP = getPrice_ELP();
      const TreasuryContract = new Contract(contractAddress.Treasury, TreasuryABI, provider);
      const balance_EDE = TreasuryContract.balanceOf(contractAddress.EDE);
      const balance_EDE_LP = TreasuryContract.balanceOf(contractAddress.EDE_LP);
      const balance_EUSD = TreasuryContract.balanceOf(contractAddress.EUSD);
      const balance_ELP = TreasuryContract.balanceOf(contractAddress.ELP);

      try {
        const data = await Promise.all([balance_EUSD, balance_ELP, price_ELP, balance_EDE, balance_EDE_LP]);
        setData(data);
      } catch (error) {
        console.log("error", error);
        setTimeout(() => {
          fetch();
        }, 1000);
      }
    }
    fetch();
  }, []);

  const treasury = useMemo(() => {
    if (!data || !edePrice || !price_EDE_LP) return;
    return toFromBN(data[0])
      .plus(toFromBN(data[1]).times(data[2]))
      .plus(toFromBN(data[3]).times(edePrice))
      .plus(toFromBN(data[4]).times(price_EDE_LP));
  }, [data, edePrice, price_EDE_LP]);
  return treasury;
};
