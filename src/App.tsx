import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import EditForm from "./components/Form/EditForm";
import AddForm from "./components/Form/AddForm";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={AddForm} />
        <Route exact path="/edit" component={EditForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
