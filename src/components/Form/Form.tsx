import React, { useState } from "react";
import TextField from "../TextField/TextField";
import AppBar from "../AppBar/AppBar";
import "./Form.css";
import Button from "../Button/Button";
import { ObjectModel } from "../../models/ObjectModel";
import { isEmpty } from "underscore";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addObject } from "../../actions/object/actions";

export interface FormProps {
  history: {
    push: (url: string) => void;
  },
  object?: ObjectModel,
  title?: string
}

const initialObject: ObjectModel = {
  name: "",
  type: "",
  description: "",
  relationships: []
};

const Form: React.FunctionComponent<FormProps & RouteComponentProps> = (props: FormProps) => {
  const [object, setObject] = useState<ObjectModel>(
    props.object ?? initialObject
  );
  const [error, setError] = useState<string>();
  const dispatch = useDispatch();

  const submitObject = () => {
    if (
      isEmpty(object?.description) ||
      isEmpty(object?.name) ||
      isEmpty(object?.type)
    ) {
      setError("Fill all the fields first, please");
    } else {
      dispatch(addObject(object));
      props.history.push("/");
    }
  };

  const changeField = (field: string, value: string) => {
    setObject({ ...object, [field]: value });
  };

  return (
    <div>
      {props.title && <AppBar title={props.title} />}
      <div className="floating-panel">
        <div className="panel-content">
          <p className="field-name">Type: </p>
          <TextField
            placeholder="Object type"
            fieldName="type"
            change={changeField}
            value={object.type}
          />
          <p className="field-name">Name: </p>
          <TextField
            placeholder="Object name"
            fieldName="name"
            change={changeField}
            value={object.name}
          />
          <p className="field-name">Description: </p>
          <TextField
            placeholder="Object description"
            fieldName="description"
            change={changeField}
            value={object.description}
          />
          <div className="button-container">
            <Button text="Submit" click={submitObject} />
          </div>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Form);
