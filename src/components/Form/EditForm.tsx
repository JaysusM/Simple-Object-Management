import React from "react";
import Form from "./Form";
import { ObjectModel } from "../../models/ObjectModel";
import { useSelector, useDispatch } from "react-redux";
import { ObjectState } from "../../reducers/object/types";
import { Redirect, withRouter } from "react-router-dom";
import { editObject, deleteSelectedObject } from "../../actions/object/actions";

interface EditForm {
  history: {
    push: (url: string) => void;
  };
}

const EditForm = (props: EditForm) => {
  const selectedObject: ObjectModel | undefined = useSelector(
    (state: ObjectState) => state.selectedObject
  );
  const dispatch = useDispatch();

  const clearFunction = () => {
    dispatch(deleteSelectedObject());
  };

  const onBack = () => {
    clearFunction();
    props.history.push("/");
  };

  if (!selectedObject) return <Redirect to="/" />;
  return (
    <Form
      onBack={onBack}
      clearFunction={clearFunction}
      actionFunction={editObject}
      title="Edit Object"
      object={selectedObject}
    />
  );
};

export default withRouter(EditForm);
