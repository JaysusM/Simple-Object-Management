import React from "react";
import "./AppBar.css";

export interface AppBarProps {
  title: string
}

const AppBar = (props: AppBarProps) => {
  return (
    <div className="appbar-container">
      <div className="title">{props.title}</div>
    </div>
  );
};

export default AppBar;
