/** @format */
import { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Landing from "./pages/landing/Landing";
import About from "./pages/about/about.component";
import Contact from "./pages/contact/contact.component";
import Sector from "./pages/sector/Sector";
import Terrain from "./pages/Terrain/Terrain";

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
      </Switch>
      <Footer />
    </Fragment>
  );
}
export default App;
