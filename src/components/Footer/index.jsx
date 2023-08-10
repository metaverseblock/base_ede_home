import { Box } from "@material-ui/core";

import "./footer.scss";
import Logo from "../../assets/images/logo2.svg";

export default function Footer() {
  return (
    <div className="footer">
      <Box display="flex" flexDirection="column" alignItems="center" className="footer-view font-14 color10">
        <img src={Logo} className="" data-aos="zoom-in" />
      </Box>
    </div>
  );
}
