import React, { ChangeEvent } from "react";
import "./TextField.css";

export interface TextFieldProps {
  placeholder: string,
  fieldName: string,
  change: (fieldname: string, value: string) => void,
  value?: string
}

const TextField = (props: TextFieldProps) => {
  const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
    props.change(props.fieldName, event.target.value);
  };

  return (
    <div className="textfield-container">
      <input
        type="text"
        className="textfield"
        onChange={changeValue}
        placeholder={props.placeholder}
        value={props.value}
      />
    </div>
  );
};

export default TextField;
