import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Services from "./components/services/Services";
import AllStates from "./components/context/AllStates";
import ServiceDescription from "./components/services/Description";
import Portfolio from "./components/portfolio/Portfolio";
import PortfolioService from "./components/portfolio/PortfolioService";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <AllStates>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="" element={<Home />}></Route>
            <Route exact path="/services" element={<Services />}></Route>
            <Route
              exact
              path="/services/serviceDescription"
              element={<ServiceDescription />}
            ></Route>
            <Route
              exact
              path="/portfolio"
              element={<Portfolio />}
            ></Route>
            <Route
              exact
              path="/servicePortfolio"
              element={<PortfolioService />}
            ></Route>
            <Route
              exact
              path="/contactus"
              element={<Contact />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </AllStates>
    </>
  );
}

export default App;
