import React from "react";
import Form from "./Form";
import { addObject } from "../../actions/object/actions";
import { withRouter } from "react-router-dom";

interface AddProps {
  history: {
    push: (url: string) => void;
  };
}

const AddForm = (props: AddProps) => {
  const onBack = () => {
    props.history.push("/");
  };

  return <Form onBack={onBack} actionFunction={addObject} title="Add Object" />;
};

export default withRouter(AddForm);
