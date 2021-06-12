import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/nav/navbar/Navbar";
import DropdownMenu from "./components/nav/dropdownMenu/DropdownMenu";
import ContactMe from "./containers/contactMe/ContactMe";
import Education from "./containers/education/Education";
import FeaturedProjects from "./containers/featuredProjects/FeaturedProjects";
import Landing from "./containers/landing/Landing";
import WorkExperience from "./containers/workExperience/WorkExperience";
import About from "./containers/about/About";

const App = () => {
  return (
    <Router>
    <DropdownMenu />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/featuredprojects" component={FeaturedProjects} />
        <Route path="/education" component={Education} />
        <Route path="/workexperience" component={WorkExperience} />
        <Route path="/contact" component={ContactMe} />
      </Switch>
    </Router>
  );
};

export default App;
