import React from "react";
import Form from "./Form";
import { ObjectModel } from "../../models/ObjectModel";
import { useSelector } from "react-redux";
import { ObjectState } from "../../reducers/object/types";
import { Redirect } from "react-router-dom";

const EditForm = () => {
  const selectedObject: ObjectModel | undefined = useSelector(
    (state: ObjectState) => state.selectedObject
  );
  if (!selectedObject) return <Redirect to="/" />;
  return <Form title="Edit Object" object={selectedObject} />;
};

export default EditForm;
