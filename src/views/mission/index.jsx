import { Box, useMediaQuery } from "@material-ui/core";

import './mission.scss';
import Bg from '../../assets/images/bg2.png';

export default function Mission() {
    const isSmallScreen = useMediaQuery("(max-width: 1280px)")
    const isVerySmallScreen = useMediaQuery("(max-width: 680px)")

    return (
        <Box display='flex' flexDirection='column' alignItems='center' className='mission-view'>
            <div className="" style={{ position: 'relative' }}>
                <div className='bg'>
                    <img src={Bg} alt='bg' />
                </div>
                <Box display='flex' flexDirection='column' alignItems='center' className="missionInfo">
                    <div className="missionTitle text-center font-weight-6" data-aos="fade-up">The Pioneer & Gold Standard for Web 3.0 Social Trading</div>
                    <div className="missionDesc mt-30 font-14 color8 font-weight-6 text-center" data-aos="fade-up">Welcome to El Dorado Exchange! The first Decentralized on-chain Social Trading Perpetual Exchange!</div>
                </Box>
            </div>
            <Box display='flex' flexDirection='column' alignItems='center' className="mission">
                <Box display='grid' className="info color3">
                    <div className="infoItem" data-aos="fade-right">
                        <div className={`infoTitle font-weight-6 color2 ${isVerySmallScreen ? "font-20" : "font-24"}`}>
                            The Next Evolution in Decentralized Perpetual Exchanges
                        </div>
                        <div className="infoDesc mt-30">
                            As the name suggests, El Dorado Exchange is your Web3 city of gold. Our vision is to create the gold standard for the Decentralized Web 3.0 Social Trading perpetual contract platform for every user to enjoy and partake in growing its success. User safety, platform security, low fees and fast transactions are what we plan to prioritize on El Dorado Exchange.
                        </div>
                        <div className="infoDesc mt-40 font-14" style={{ textTransform: "uppercase" }}>Not Just a competitor, a leader</div>
                        <div className="infoDesc mt-16">El Dorado aims at being not just a competitor to other on-chain decentralized perpetual contract platforms, but a leader within the market  by doing something no one has ever done before. Ultimately, building an ecosystem that truly represents an empire of gold, wealth and success.</div>
                    </div>
                    <div className="infoItem" data-aos="fade-left">
                        <div className={`infoTitle font-weight-6 color2 ${isVerySmallScreen ? "font-20" : "font-24"}`}>
                            Community Governance Permissionless Ecosystem
                        </div>
                        <div className="infoDesc mt-30 font-12 color3">
                            The growth and future of El Dorado Exchange is prioritized around enjoying a rich user experience through our social trading offerings as well as helping establish community backed projects to ensure an inclusive and diverse on-chain ecosystem, for the community, by the community.
                        </div>
                        <div className="infoDesc mt-40 font-14" style={{ textTransform: "uppercase" }}>The Road to El Dorado is Fueled Through ESBT</div>
                        <div className="infoDesc mt-16">Through our own iteration of the Soul Bound Token, ESBT plans to be the future Web 3.0 passport for the blockchain participant. The ESBT initiatives we are building will bring El Dorado users a whole new level of experience to Web3 credentials.</div>
                    </div>
                </Box>
            </Box>
        </Box>
    )
}