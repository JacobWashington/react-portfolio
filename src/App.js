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
        <DropdownMenu />
        <Landing />
        <About />
        <Tech />
        <FeaturedProjects />
        <Education />
        <WorkExperience />
        <ContactMe />
    </div>
  );
};

export default App;
