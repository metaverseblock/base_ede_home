import { ReactComponent as Twitter } from "../../assets/images/twitter.svg";
import { ReactComponent as Discord } from "../../assets/images//discord.svg";
import { ReactComponent as Github } from "../../assets/images/github.svg";
import { ReactComponent as Medium } from "../../assets/images/medium.svg";
import "./linkList.scss";
import { Box, SvgIcon } from "@material-ui/core";

export default function LinkList() {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" className="linkList">
      <a href="https://twitter.com/ede_finance" target="_blank">
        <SvgIcon className="linkIcon" component={Twitter} color="#F89542" viewBox="0 0 24 24" />
      </a>
      <a href="https://discord.com/invite/g7GpVVxtxz" target="_blank">
        <SvgIcon className="linkIcon" component={Discord} color="#F89542" viewBox="0 0 28 20" />
      </a>
      <a href="https://medium.com/@ede_finance" target="_blank">
        <SvgIcon className="linkIcon" component={Medium} color="#F89542" viewBox="0 0 24 24" />
      </a>
      <a href="https://github.com/El-Dorado-Exchange" target="_blank">
        <SvgIcon className="linkIcon" component={Github} color="#F89542" viewBox="0 0 30 30" />
      </a>
    </Box>
  );
}
