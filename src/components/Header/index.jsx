import { Box, Link, useMediaQuery, Drawer, SvgIcon } from "@material-ui/core";

import "./header.scss";
import Close from "../../assets/images/close.svg";
import Menu from "../../assets/images/menu.svg";
import Logo from "../../assets/images/logo.svg";
import LogoM from "../../assets/images/logo-m.svg";
import Twitter from "../../assets/images/twitter.svg";
import Discord from "../../assets/images//discord.svg";
import Github from "../../assets/images/github.svg";
import { ReactComponent as Medium } from "../../assets/images/medium.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { success } from "src/slices/MessagesSlice";
import LinkList from "src/views/home/LinkList";

export default function Header() {
  const isSmallScreen = useMediaQuery("(max-width: 1280px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 680px)");
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const toastMsg = () => {
    dispatch(success("Live-net will be launched on December 10th, please use the test-net "));
  };

  return (
    <div className="header">
      <Box display="flex" alignItems="center" justifyContent="space-between" className="header-view">
        <Link component={NavLink} to="/" className="logo">
          <img src={isVerySmallScreen ? LogoM : Logo} height={38} />
        </Link>
        {isVerySmallScreen ? (
          <Box display="flex" alignItems="center" className="navList font-14">
            <img src={Menu} onClick={() => setIsOpen(true)} />
            <div className="navItem nav-trade font-family-DMSans">Trade</div>
          </Box>
        ) : (
          <Box display="flex" alignItems="center" className="navList font-14">
            {/* <div className="navItem navItemActive">
              <a href="https://app.edebase.finance/#" target={"_blank"} className="color1">
                Dashboard
              </a>
            </div>
            <div className="navItem">
              <a href="https://app.edebase.finance/#/Earn" target={"_blank"} className="color1">
                Earn
              </a>
            </div> */}
            <div className="navItem">
              <a
                href="https://baseswap.fi/swap?outputCurrency=0x0a074378461fb7ed3300ea638c6cc38246db4434"
                target={"_blank"}
                className="color1"
              >
                Buy
              </a>
            </div>
            {/* <div className="navItem">
              <a href="https://app.edebase.finance/#/ESBT" target={"_blank"} className="color1">
                ESBT
              </a>
            </div> */}
            <div className="navItem">
              <a href="https://docs.edebase.finance/" target={"_blank"} className="color1">
                Doc
              </a>
            </div>
            {/* <div className="navItem nav-trade font-family-DMSans">Trade</div> */}
            <a
              href="https://app.edebase.finance/#/Trade"
              target={"_blank"}
              className="navItem nav-trade font-family-DMSans"
            >
              <div className="">Trade</div>
            </a>
          </Box>
        )}
        <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
          <Box display="flex" flexDirection="column" alignItems="flex-end" className="drawer-view">
            <div className="close mt-30">
              <img src={Close} onClick={() => setIsOpen(false)} />
            </div>
            <Box display="flex" flexDirection="column" alignItems="flex-end" className="menu-list mt-20 font-20">
              <div className="menuItem">
                <a href="https://app.edebase.finance/#" target={"_blank"} className="color1">
                  Dashboard
                </a>
              </div>
              <div className="menuItem">
                <a href="https://app.edebase.finance/#/Earn" target={"_blank"} className="color1">
                  Earn
                </a>
              </div>
              <div className="menuItem">
                <a
                  href="https://baseswap.fi/swap?outputCurrency=0x0a074378461fb7ed3300ea638c6cc38246db4434"
                  target={"_blank"}
                  className="color1"
                >
                  Buy
                </a>
              </div>
              <div className="menuItem">
                <a href="https://app.edebase.finance/#/ESBT" target={"_blank"} className="color1">
                  ESBT
                </a>
              </div>
              <div className="menuItem">
                <a href="https://docs.edebase.finance/" target={"_blank"} className="color1">
                  Doc
                </a>
              </div>
              {/* <div className="menuItem menuItemActive font-family-DMSans">Trade</div> */}
              <a
                href="https://app.edebase.finance/#/Trade"
                target={"_blank"}
                className="menuItem menuItemActive font-family-DMSans"
              >
                <div className="">Trade</div>
              </a>
            </Box>
            <Box display="flex" justifyContent="flex-end" alignItems="center" className="linkBox">
              <LinkList />
            </Box>
          </Box>
        </Drawer>
      </Box>
    </div>
  );
}
