import BigNumber from "bignumber.js";
import { ethers } from "ethers";

export const BN = (val: number | string): BigNumber => new BigNumber(val);
/**
 *
 * @param n  ethers.BigNumber
 * @param decimals   The default decimals bit to be converted is 18
 * @default decimals 18
 * @returns
 */
export const toFromBN = (n: ethers.BigNumber, decimals = 18): BigNumber => {
  return BN(ethers.utils.formatUnits(n, decimals));
};

export const toBN = (n: ethers.BigNumber): BigNumber => {
  return BN(n.toString());
};

export const fromWei = (n: string | number, decimals = 18): BigNumber => {
  return BN(n).div(BN(10).pow(decimals));
};
export const toWei = (n: string | number, decimals = 18): BigNumber => {
  return BN(n).times(BN(10).pow(decimals));
};

export const toStringFromBN = (bn: number | string, decimals = 18): string => {
  const res = BN(bn).toFixed(decimals);

  return res === "NaN" ? "0" : res;
};

export const fromBN = (
  bn: number | string,
  decimals = 18
): ethers.BigNumber => {
  return ethers.utils.parseUnits(toStringFromBN(bn, decimals), decimals);
};

export const upBN = (oldBN: BigNumber | undefined) => {
  if (!oldBN) return;

  const UP_BigNumber = BigNumber.clone();
  UP_BigNumber.config({ ROUNDING_MODE: BigNumber.ROUND_UP });
  return new UP_BigNumber(oldBN);
};
export const downBN = (oldBN: BigNumber | undefined) => {
  if (!oldBN) return;

  const UP_BigNumber = BigNumber.clone();
  UP_BigNumber.config({ ROUNDING_MODE: BigNumber.ROUND_DOWN });
  return new UP_BigNumber(oldBN);
};

// rounding
export const halfUpBN = (oldBN: BigNumber | undefined) => {
  if (!oldBN) return;

  const UP_BigNumber = BigNumber.clone();
  UP_BigNumber.config({ ROUNDING_MODE: BigNumber.ROUND_HALF_UP });
  return new UP_BigNumber(oldBN);
};
