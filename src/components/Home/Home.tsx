import React, { useState } from "react";
import "./Home.css";
import AppBar from "../AppBar/AppBar";
import TextField from "../TextField/TextField";
import AddFab from "../AddFab/AddFab";
import Objects from "../Objects/Objects";
import { withRouter } from "react-router-dom";

interface HomeProps {
  history: {
    push: (url: string) => void;
  };
}

const Home = (props: HomeProps) => {
  const [filter, setFilter] = useState("");

  const onSearchChanged = (fieldname: string, value: string) => {
    setFilter(value);
  };

  return (
    <div>
      <AppBar title="Objects" />
      <div className="searchbar-container">
        <TextField
          fieldName="searchbar"
          change={onSearchChanged}
          placeholder="Search by object..."
        />
      </div>
      <AddFab onClick={() => props.history.push("/add")} />
      <Objects filter={filter} />
    </div>
  );
};

export default withRouter(Home);
