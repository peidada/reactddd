import React from 'react';
import { Router, Route } from 'dva/router';
import Login from "./routes/Login";
import User from "./routes/User";
import Portfolio from "./routes/Portfolio";
import Part from "./routes/Part";
import Project from "./routes/Project";
import Dashboard from "./routes/Dashboard";
import Search from "./routes/Search.js";
import Product from "./routes/Product.js";
import SbbMain from './routes/sbb/main/index';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Login} />
      <Route path="/main" component={User} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/part" component={Part} />
      <Route path="/project" component={Project} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/portfolio/search" component={Search} />
      <Route path="/portfolio/search/product" component={Product} />
      <Route path="/sbb" component={SbbMain} />
      </Router>
  );
}

export default RouterConfig;
