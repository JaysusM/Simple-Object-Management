import React from "react";
import "./AppBar.css";

interface AppBarProps {
  title: string;
  showBack?: boolean;
  onBack?: () => void;
}

const AppBar = (props: AppBarProps) => {
  return (
    <div>
      <div className="appbar-container">
      {props.showBack && <img alt="back" onClick={props.onBack} src="/back.svg" className="back-button" />}
        <div className="title">{props.title}</div>
      </div>
    </div>
  );
};

export default AppBar;
