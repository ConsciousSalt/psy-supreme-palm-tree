import React from "react";
import { Switch, Route } from "react-router-dom";

import TestList from "../TestList/TestList";
import TestSingle from "../TestSingle/TestSingle";

import Container from "@material-ui/core/Container";

const main = (props) => {
  let routes = (
    <Switch>
      <Route path="/" component={TestList} exact />
      <Route path="/quiz/:id" component={TestSingle} />
    </Switch>
  );

  return <Container maxWidth="lg">{routes}</Container>;
};

export default main;
