import React from "react";
import "./AddFab.css";
import { withRouter } from "react-router-dom";

export interface AddFabProps {
  history: {
    push: (url: string) => void;
  };
}

const AddFab = (props: AddFabProps) => {
  return (
    <div className="fab" onClick={() => props.history.push("/add")}>
      <p className="fab-button">+</p>
    </div>
  );
};

export default withRouter(AddFab);
