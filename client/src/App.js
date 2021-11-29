/** @format */

import { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "./custom.styles.scss";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Landing from "./pages/landing/Landing";
import About from "./pages/about/about.component";
import Contact from "./pages/contact/contact.component";
import Sector from "./pages/sector/Sector";
import Terrain from "./pages/Terrain/Terrain";
import Data_Processing from "./pages/data-processing/data-processing.component";
import Survey from "./pages/survey/survey.component";
import Stigmi from "./pages/stigmi/stigmi.component";
import Selectedsector from "./pages/SelectedSector/Selectedsector";
import AdminPanel from "./pages/Admin/AdminPanel";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/sector/:id" exact component={Sector} />
        <Route path="/terrain" exact component={Terrain} />
        <Route path="/data_processing" exact component={Data_Processing} />
        <Route path="/survey" exact component={Survey} />
        <Route path="/stigmi" exact component={Stigmi} />
        <Route path="/read/sector/" exact component={Selectedsector} />
        <Route path="/admin" exact component={AdminPanel} />
      </Switch>
      <Footer />
    </Fragment>
  );
}
export default App;
