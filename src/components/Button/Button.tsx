import React from "react";
import "./Button.css";

export interface ButtonProps {
  text: string,
  click: () => void
}

const Button = (props: ButtonProps) => {
  return <button className="button" onClick={props.click}>{props.text}</button>;
};

export default Button;
