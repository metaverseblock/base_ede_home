import { Box } from "@material-ui/core";
import "./loading.scss";

export default function LoadingSplash() {
  return (
    <Box className="loading-splash">
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    </Box>
  );
}
