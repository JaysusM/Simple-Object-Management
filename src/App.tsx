import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import EditForm from "./components/Form/EditForm";
import AddForm from "./components/Form/AddForm";
import Details from "./components/Details/Details";
import AddRelationship from "./components/AddRelationship/AddRelationship";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={AddForm} />
        <Route exact path="/edit" component={EditForm} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/add/relationship" component={AddRelationship} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
