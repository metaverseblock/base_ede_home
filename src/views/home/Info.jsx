import { Box, useMediaQuery } from "@material-ui/core";
import { memo } from "react";
import { useAllChartData } from "src/hooks/useChartData";
import { useTreasury } from "src/hooks/useTreasury";
import { formatAmount } from "src/utils/amoutFormat";

function Info() {
  const isVerySmallScreen = useMediaQuery("(max-width: 680px)");
  const treasuryVal = useTreasury();
  const { totalFees, totalVolume } = useAllChartData();

  return (
    <>
      <Box
        display="flex"
        flexDirection={isVerySmallScreen ? "column" : "row"}
        alignItems={isVerySmallScreen ? "flex-start" : "center"}
        className="info"
      >
        <Box display="flex" flexDirection="column" alignItems="self-start" className="infoItem">
          <Box display="flex" alignItems="center">
            <div className="dots"></div>
            <Box ml="8px" className="infoTitle font-14 font-weight-b">
              Treasury Value
            </Box>
          </Box>
          <Box mt="12px" className="infoVal font-26 font-weight-b">
            ${formatAmount(treasuryVal, 0, true)}
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="self-start" className="infoItem">
          <Box display="flex" alignItems="center">
            <div className="dots"></div>
            <Box ml="8px" className="infoTitle font-14 font-weight-b">
              Total Volume
            </Box>
          </Box>
          <Box mt="12px" className="infoVal font-26 font-weight-b">
            ${formatAmount(totalVolume, 0, true)}
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="self-start" className="infoItem">
          <Box display="flex" alignItems="center">
            <div className="dots"></div>
            <Box ml="8px" className="infoTitle font-14 font-weight-b">
              Total fees
            </Box>
          </Box>
          <Box mt="12px" className="infoVal font-26 font-weight-b">
            ${formatAmount(totalFees, 0, true)}
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default memo(Info);
