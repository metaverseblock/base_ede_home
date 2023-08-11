import axios from "axios";
import { useState } from "react";

export function getPrice_EDE() {
  const [price, setPrice] = useState("");
  axios
    .get("https://api.dexscreener.com/latest/dex/pairs/base/0x2135780d04c96e14bc205d2c8b8ed4e716d09a2b")
    .then((res: any) => {
      // console.log("res===", res.data);
      const data = res.data.pairs;
      setPrice(data[0].priceUsd);
    })
    .catch((error: any) => {
      console.log("fetch price ETH error", error);
    });
  return price;
}
