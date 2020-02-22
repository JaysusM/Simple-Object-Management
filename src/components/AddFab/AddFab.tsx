import React from "react";
import "./AddFab.css";

interface AddFabProps {
  onClick: () => void
}

const AddFab = (props: AddFabProps) => {
  return (
    <div className="fab" onClick={props.onClick}>
      <p className="fab-button">+</p>
    </div>
  );
};  

export default AddFab;
