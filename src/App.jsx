import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { lazy, Suspense, useEffect, useState } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import useTheme from "./hooks/useTheme";
import { light as lightTheme } from "./themes/light.js";

import { Box } from "@material-ui/core";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoadingSplash from "./components/LoadingSplash";
import Messages from "./components/Messages/Messages";
import "./ellipse.css";
import "./style.scss";

const DEBUG = false;
const Home = lazy(() => import("./views/home"));
const Mission = lazy(() => import("./views/mission"));
if (DEBUG) console.log(" Connecting to Mainnet Ethereum");

// const blockExplorer = targetNetwork.blockExplorer;

function App() {
  const [theme, mounted] = useTheme();
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  let themeMode = lightTheme;

  // useEffect(() => {
  //   const noLongerShow = localStorage.getItem("noLongerShow")
  //   console.log(noLongerShow, "noLongerShow");
  //   noLongerShow ? setShow(!noLongerShow) : setShow(true);
  // }, []);

  return (
    <ThemeProvider theme={themeMode}>
      <CssBaseline />
      <Messages />
      <Suspense fallback={<LoadingSplash />}>
        <Box display="flex" flexDirection="column" className={`app-container`}>
          <div className="ellipse ellipse1"></div>
          <div className="ellipse ellipse2"></div>
          <div className="ellipse ellipse3"></div>
          <div className="ellipse ellipse4"></div>
          <div className="ellipse ellipse5"></div>
          <div className="ellipse ellipse6"></div>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Mission">
              <Mission />
            </Route>
            <Route exact path="/">
              <Redirect to="/" />
            </Route>
          </Switch>
          <Footer />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
