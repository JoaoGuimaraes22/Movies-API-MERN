import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SectionPopular from "./components/sections/sectionPopular";
import SectionPlaying from "./components/sections/sectionPlaying";
import SectionComing from "./components/sections/sectionComing";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SectionPopular}></Route>
        <Route exact path="/playing" component={SectionPlaying}></Route>
        <Route exact path="/coming" component={SectionComing}></Route>
      </Switch>
    </Router>
  );
};

export default App;
