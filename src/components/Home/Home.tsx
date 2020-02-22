import React from "react";
import "./Home.css";
import AppBar from "../AppBar/AppBar";
import TextField from "../TextField/TextField";
import AddFab from "../AddFab/AddFab";
import Objects from "../Objects/Objects";

const Home = () => {
  return (
    <div>
      <AppBar title="Objects"/>
      <TextField fieldName="searchbar" change={(x,y) => {}} placeholder="Search by object..."/>
      <AddFab />
      <Objects />
    </div>
  );
};

export default Home;
