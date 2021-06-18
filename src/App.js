import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DropdownMenu from "./components/nav/dropdownMenu/DropdownMenu";
import ContactMe from "./containers/contactMe/ContactMe";
import Education from "./containers/education/Education";
import FeaturedProjects from "./containers/featuredProjects/FeaturedProjects";
import Landing from "./containers/landing/Landing";
import WorkExperience from "./containers/workExperience/WorkExperience";
import About from "./containers/about/About";
import Tech from "./containers/tech/Tech";

const App = () => {
  return (
    <div className="App">
      <Router>
        <DropdownMenu />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={FeaturedProjects} />
          <Route path="/education" component={Education} />
          <Route path="/experience" component={WorkExperience} />
          <Route path="/contact" component={ContactMe} />
          <Route path="/tech" component={Tech} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
