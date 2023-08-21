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
import AdminHome from "./components/Admin/AdminHome";
import AdminServices from "./components/Admin/AdminServices";
import UpdateService from "./components/Admin/UpdateService";
import AddService from "./components/Admin/AddService";
import DeleteService from "./components/Admin/DeleteService";
import AdminPortfolio from "./components/Admin/AdminPortfolio";
import AddPortfolio from "./components/Admin/AddPortfolio";
import UpdatePortfolio from "./components/Admin/UpdatePortfolio";
import DeletePortfolio from "./components/Admin/DeletePortfolio";
import Messages from "./components/Admin/Messages";

function App() {
  return (
    <>
      <AllStates>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="" element={<Home />}></Route>
            <Route exact path="/services" element={<Services />}></Route>
            {/* Admin Panel */}
            <Route
              exact
              path="/admin"
              element={<AdminHome />}
            ></Route>
            <Route
              exact
              path="/adminservices"
              element={<AdminServices />}
            ></Route>
            <Route
              exact
              path="/editservice"
              element={<UpdateService />}
            ></Route>
            <Route
              exact
              path="/addservice"
              element={<AddService />}
            ></Route>
            <Route
              exact
              path="/deleteservice"
              element={<DeleteService />}
            ></Route>
            <Route
              exact
              path="/adminportfolio"
              element={<AdminPortfolio />}
            ></Route>
            <Route
              exact
              path="/addportfolio"
              element={<AddPortfolio />}
            ></Route>
            <Route
              exact
              path="/editportfolio"
              element={<UpdatePortfolio />}
            ></Route>
            <Route
              exact
              path="/deleteportfolio"
              element={<DeletePortfolio />}
            ></Route>
            <Route
              exact
              path="/adminmsg"
              element={<Messages />}
            ></Route>
            {/* Admin Panel */}
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
