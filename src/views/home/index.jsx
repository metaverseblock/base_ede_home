import { Box, Link, SvgIcon, useMediaQuery } from "@material-ui/core";
import "animate.css";
import { createRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import LocomotiveScroll from 'locomotive-scroll'

import "./home.scss";
import { ReactComponent as AboutText } from "../../assets/images/about_text.svg";
import { ReactComponent as AboutTextM } from "../../assets/images/about_text-m.svg";
import { ReactComponent as EDEIcon } from "../../assets/images/EDE.svg";
import { ReactComponent as EDEText } from "../../assets/images/EDE_text.svg";
import { ReactComponent as EDETIcon } from "../../assets/images/EDET.svg";
import { ReactComponent as EDETText } from "../../assets/images/EDET_text.svg";
import { ReactComponent as AboutIcon } from "../../assets/images/about.svg";
import Eldorado from "../../assets/images/eldorado.webm";
import EldoradoTxt from "../../assets/images/eldoradoTxt.svg";
import LinkList from "./LinkList";
import { formatAmount } from "src/utils/amoutFormat";
import Info from "./Info";

export default function Home() {
  const isSmallScreen = useMediaQuery("(max-width: 1080px)");
  const isVerySmallScreen = useMediaQuery("(max-width: 680px)");

  const scrollRef = createRef();
  //   useEffect(() => {
  //     const scroll = new LocomotiveScroll({
  //       el: scrollRef.current,
  //       smooth: true
  //     });
  //   });

  return (
    <div className="home-view" ref={scrollRef}>
      {isVerySmallScreen ? (
        <Box display="flex" justifyContent="flex-end" alignItems="center" className="banner-view">
          <Box display="flex" flexDirection="column" justifyContent="center" className="banner-m">
            <div className="banner-l-m font-14">
              <img src={EldoradoTxt} alt="Eldorado" style={{ marginLeft: -10 }} />
              <div className="subtitle mt-4 font-64 font-weight-6">Built for the BASE Community</div>
              <Info />
            </div>
            <div className="banner-r-m">
              <Box display="flex" flexDirection="column" className="eldoradoInfo">
                <Box display="flex" alignItems="center" className="social font-13">
                  <a href="https://app.edebase.finance/#/Trade" target={"_blank"}>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      className="social-link social-link-active color2"
                    >
                      Launch Exchange
                    </Box>
                  </a>
                </Box>
                <video
                  x5-video-player-type="h5"
                  playsInline
                  muted
                  id="video-bg"
                  preload="metadata"
                  autoPlay
                  loop
                  className="eldorado"
                >
                  <source src={Eldorado} type="video/webm" />
                </video>
                <LinkList />
              </Box>
            </div>
          </Box>
        </Box>
      ) : (
        <Box display="flex" justifyContent="flex-end" alignItems="center" className="banner-view">
          <Box display="flex" alignItems="center" justifyContent="center" className="banner">
            <div className="banner-l font-14" data-aos="fade-right">
              <img src={EldoradoTxt} alt="Eldorado" style={{ marginLeft: -8 }} />
              <div className="subtitle mt-4 font-64 font-weight-6">Built for the BASE Community</div>
              <Info />
              <Box display="flex" alignItems="center" className="social font-13 font-family-DMSans">
                <a href="https://app.edebase.finance/#/Trade" target={"_blank"}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    className="social-link social-link-active color2"
                  >
                    Launch Exchange
                  </Box>
                </a>
              </Box>
            </div>
            <div className="banner-r">
              <Box display="flex" flexDirection="column" alignItems="flex-end" className="eldoradoInfo">
                <video
                  x5-video-player-type="h5"
                  playsInline
                  muted
                  id="video-bg"
                  preload="metadata"
                  autoPlay
                  loop
                  className="eldorado"
                >
                  <source src={Eldorado} type="video/webm" />
                </video>
                <LinkList />
              </Box>
            </div>
          </Box>
        </Box>
      )}
      {isSmallScreen ? (
        <div className="about-view-m">
          <Box display="flex" justifyContent="center">
            <AboutTextM />
          </Box>
          <Box mt="32px" className="font-36 font-weight-b">
            EDE
          </Box>
          <Box mt="12px" className="font-12 font-weight-6">
            The utility token earned by using the platform. Stake or join auction to burn EDE to gain the governance
            token, EDET.
          </Box>
          <Box mt="16px" className="font-36 font-weight-b">
            EDET
          </Box>
          <Box mt="12px" className="font-12 font-weight-6">
            The governance token with a daily emission rate of 1 EDET. EDET holders vote on major decisions and can
            redeem EDET for treasury shares.
          </Box>
          <Box display="flex" justifyContent="center" mt="32px">
            <AboutIcon />
          </Box>
          <Box display="flex" flexDirection="column" gridGap="16px" mt="16px" className="about-m">
            <Box display="flex" alignItems="flex-start">
              <div className="about-title font-16 font-weight-b">1.</div>
              <Box display="flex" flexDirection="column" alignItems="flex-start" ml="8px" className="about-item">
                <div className="about-title font-16 font-weight-b">Provide Liquidity</div>
                <div className="about-desc font-14 font-weight-6">
                  Receive EDE and EDET rewards for supplying liquidity.
                </div>
              </Box>
            </Box>
            <Box display="flex" alignItems="flex-start">
              <div className="about-title font-16 font-weight-b">2.</div>
              <Box display="flex" flexDirection="column" alignItems="flex-start" ml="8px" className="about-item">
                <div className="about-title font-16 font-weight-b">Earn from Trading</div>
                <div className="about-desc font-14 font-weight-6">
                  Incentives for trading on EDE liquidity pools let you earn EDE.
                </div>
              </Box>
            </Box>
            <Box display="flex" alignItems="flex-start">
              <div className="about-title font-16 font-weight-b">3.</div>
              <Box display="flex" flexDirection="column" alignItems="flex-start" ml="8px" className="about-item">
                <div className="about-title font-16 font-weight-b">Get EDET</div>
                <div className="about-desc font-14 font-weight-6">
                  Stake or burn EDE to gain the EDET governance token.
                </div>
              </Box>
            </Box>
            <Box display="flex" alignItems="flex-start">
              <div className="about-title font-16 font-weight-b">4.</div>
              <Box display="flex" flexDirection="column" alignItems="flex-start" ml="8px" className="about-item">
                <div className="about-title font-16 font-weight-b">Support EDE Price</div>
                <div className="about-desc font-14 font-weight-6">
                  Fees go to the treasury, supporting EDE's floor price.
                </div>
              </Box>
            </Box>
            <Box display="flex" alignItems="flex-start">
              <div className="about-title font-16 font-weight-b">5.</div>
              <Box display="flex" flexDirection="column" alignItems="flex-start" ml="8px" className="about-item">
                <div className="about-title font-16 font-weight-b">Earn Fees</div>
                <div className="about-desc font-14 font-weight-6">Stake EDE and EDET to earn 20% of fees.</div>
              </Box>
            </Box>
            <Box display="flex" alignItems="flex-start">
              <div className="about-title font-16 font-weight-b">6.</div>
              <Box display="flex" flexDirection="column" alignItems="flex-start" ml="8px" className="about-item">
                <div className="about-title font-16 font-weight-b">Treasury Backing</div>
                <div className="about-desc font-14 font-weight-6">The treasury gives EDET intrinsic value.</div>
              </Box>
            </Box>
            <Box display="flex" alignItems="flex-start">
              <div className="about-title font-16 font-weight-b">7.</div>
              <Box display="flex" flexDirection="column" alignItems="flex-start" ml="8px" className="about-item">
                <div className="about-title font-16 font-weight-b">Stable EDE Price</div>
                <div className="about-desc font-14 font-weight-6">
                  More stable EDE price incentives further trading.
                </div>
              </Box>
            </Box>
          </Box>
        </div>
      ) : (
        <Box display="flex" flexDirection="column" alignItems="center" className="about-view">
          <AboutText />
          <Box display="flex" mt="84px" justifyContent="space-between" alignItems="center" className="about">
            <Box display="flex" flexDirection="column" alignItems="center" className="about-item text-center">
              <div className="about-title font-16 font-weight-b">Provide Liquidity</div>
              <div className="about-desc font-14 font-weight-6">
                Receive EDE and EDET rewards for supplying liquidity.
              </div>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" className="about-item text-center">
              <div className="about-title font-24 font-weight-b">Earn from Trading</div>
              <div className="about-desc font-14 font-weight-6">
                Incentives for trading on EDE liquidity pools let you earn EDE.
              </div>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" className="about-item text-center">
              <div className="about-title font-24 font-weight-b">Get EDET</div>
              <div className="about-desc font-14 font-weight-6">
                Stake or burn EDE to gain the EDET governance token.
              </div>
            </Box>
          </Box>
          <div className="about-content">
            <Box display="flex" flexDirection="column" alignItems="center" className="token-info token-ede">
              <Box display="flex" alignItems="center">
                <EDEIcon />
                <Box ml="8px">
                  <EDEText />
                </Box>
              </Box>
              <Box mt="16px" className="text-center font-16 font-weight-6">
                The utility token earned by using the platform. Stake or join auction to burn EDE to gain the governance
                token, EDET.
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" className="token-info token-edet">
              <Box display="flex" alignItems="center">
                <EDETIcon />
                <Box ml="8px">
                  <EDETText />
                </Box>
              </Box>
              <Box mt="16px" className="text-center font-16 font-weight-6">
                The governance token with a daily emission rate of 1 EDET. EDET holders vote on major decisions and can
                redeem EDET for treasury shares.
              </Box>
            </Box>
          </div>
          <Box display="flex" mt="20px" justifyContent="space-between" alignItems="center" className="about">
            <Box display="flex" flexDirection="column" alignItems="center" className="about-item text-center">
              <div className="about-title font-24 font-weight-b">Stable EDE Price</div>
              <div className="about-desc font-14 font-weight-6">More stable EDE price incentives further trading.</div>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" className="about-item text-center">
              <div className="about-title font-24 font-weight-b">Treasury Backing</div>
              <div className="about-desc font-14 font-weight-6">The treasury gives EDET intrinsic value.</div>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" className="about-item text-center">
              <div className="about-title font-24 font-weight-b">Earn Fees</div>
              <div className="about-desc font-14 font-weight-6">Stake EDE and EDET to earn 20% of fees.</div>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" className="about-item text-center">
              <div className="about-title font-24 font-weight-b">Support EDE Price</div>
              <div className="about-desc font-14 font-weight-6">
                Fees go to the treasury, supporting EDE's floor price.
              </div>
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
}
