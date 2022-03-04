import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";

import { connect, useDispatch } from "react-redux";
import * as actions from "../actions";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

const App = () => {
  const dispatch = useDispatch();
  const { fetchUser } = actions;

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path={"/"} component={Landing} />
          <Route exact path={"/surveys"} component={Dashboard} />
          <Route path={"/surveys/new"} component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default connect(null, actions)(App);

/**
 * class App extends Component {
 
  
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path={"/"} component={Landing} />
            <Route exact path={"/surveys"} component={Dashboard} />
            <Route path={"/surveys/new"} component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
 */
