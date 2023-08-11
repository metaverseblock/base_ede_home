import { providers } from "ethers";

export function getProvider() {
  const provider = new providers.JsonRpcProvider("https://developer-access-mainnet.base.org", 8453);
  return provider;
}

export function getChainId() {
  const chainID = 8453;
  return chainID;
}
