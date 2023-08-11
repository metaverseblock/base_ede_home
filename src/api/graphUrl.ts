import { ApolloClient, InMemoryCache } from "@apollo/client";
import { useMemo } from "react";
import { getChainId } from "src/utils/provider";

export function createClient(uri: string) {
  return new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  });
}

export function useVolumeChartGraphUrl() {
  const chainID = getChainId();
  return useMemo(() => {
    return createClient("https://api.studio.thegraph.com/query/51000/base_stats/version/latest");
  }, [chainID]);
}
