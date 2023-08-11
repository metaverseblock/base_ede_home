import { Contract, ethers } from "ethers";
import { BN, toFromBN } from "../utils/bn";
import { abi as PairABI } from "../abis/Pair.json";
import { getChainId, getProvider } from "../utils/provider";
import { contractAddress } from "src/constants/address";
import { PAIR_DETAILS } from "../utils/token";
import { getPrice_EDE } from "../utils/edePrice";
import { useEffect, useMemo, useState } from "react";
import { abi as ElpManagerABI } from "src/abis/ElpManager.json";
import { compareAddress } from "../utils/address";

export const useGetLpPrice = (lpAddress: string) => {
  const provider = getProvider();
  const chainID = getChainId();
  const pairContract = new ethers.Contract(lpAddress, PairABI, provider);
  const address_EDE = contractAddress.EDE;
  const pairs = PAIR_DETAILS[chainID];
  const edePrice = getPrice_EDE();

  const [data, setData] = useState<any>();

  useEffect(() => {
    async function fetch() {
      const reserves = pairContract.getReserves();
      const lpTotalSupply = pairContract.totalSupply();
      try {
        const data = await Promise.all([reserves, lpTotalSupply]);
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

  return useMemo(() => {
    if (!data || !lpAddress || !edePrice) return;
    const getReserve = data[0];
    const pair = pairs[lpAddress.toLocaleLowerCase()];
    if (!pair) return;
    const token0Amount = toFromBN(getReserve._reserve0, pair.token0.decimals);
    const token1Amount = toFromBN(getReserve._reserve1, pair.token1.decimals);
    const lpTotal = toFromBN(data[1]);
    let lpRate = BN(0);
    if (compareAddress(pair.token0.address, address_EDE)) {
      lpRate = token0Amount.div(lpTotal);
    } else {
      lpRate = token1Amount.div(lpTotal);
    }
    const lpPrice = lpRate.times(edePrice).times(2);
    // console.log("lpPrice", lpPrice);
    return lpPrice;
  }, [address_EDE, edePrice, data, lpAddress, pairs]);
};

export const getPrice_ELP = async () => {
  const provider = getProvider();
  const ElpManagerContract = new Contract(contractAddress.ElpManager, ElpManagerABI, provider);
  const result = await ElpManagerContract.getPoolTokenInfo(contractAddress.USDC);
  const data = result[0];
  return toFromBN(data[3], 30);
};
