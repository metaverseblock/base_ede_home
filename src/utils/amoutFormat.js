
import BigNumber from "bignumber.js"

export const formatAmount = (amount, displayDecimals, useCommas, defaultValue) => {
  if (!defaultValue) {
    defaultValue = "- -";
  }
  if (BigNumber.isBigNumber(amount) && amount.isNaN()) {
    return 0
  }
  if (amount === undefined || amount.toString().length === 0) {
    return defaultValue;
  }
  if (displayDecimals === undefined) {
    displayDecimals = 4;
  }
  let amountStr = limitDecimals(amount, displayDecimals);
  if (useCommas) {
    return numberWithCommas(amountStr);
  }

  return amountStr;
};

export const limitDecimals = (amount, maxDecimals) => {
  let amountStr = BigNumber.isBigNumber(amount) ? amount.toFixed() : amount.toString();
  if (maxDecimals === undefined) {
    return amountStr;
  }
  if (maxDecimals === 0) {
    return amountStr.split(".")[0];
  }
  const dotIndex = amountStr.indexOf(".");
  if (dotIndex !== -1) {
    let decimals = amountStr.length - dotIndex - 1;
    if (decimals > maxDecimals) {
      amountStr = amountStr.substr(0, amountStr.length - (decimals - maxDecimals));
    }
  }
  return amountStr;
};

export function numberWithCommas(x) {
  if (!x) {
    return "- -";
  }
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}