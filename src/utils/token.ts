export const PAIR_DETAILS: {
  [key: number]: {
    [lp: string]:
      | {
          token0: {
            address: string;
            decimals: number;
            name: string;
          };
          token1: {
            address: string;
            decimals: number;
            name: string;
          };
        }
      | undefined;
  };
} = {
  [8453]: {
    "0x2135780d04c96e14bc205d2c8b8ed4e716d09a2b": {
      token0: {
        address: "0x0a074378461fb7ed3300ea638c6cc38246db4434",
        decimals: 18,
        name: "EDE",
      },
      token1: {
        address: "0x4200000000000000000000000000000000000006",
        decimals: 18,
        name: "WETH",
      },
    },
  },
};
