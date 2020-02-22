import React, { useState } from "react";
import "./AddRelationship.css";
import { useSelector, useDispatch } from "react-redux";
import { ObjectState } from "../../reducers/object/types";
import { Redirect, withRouter } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import ObjectItem from "../Objects/ObjectItem/ObjectItem";
import { ObjectModel } from "../../models/ObjectModel";
import { addRelationship } from "../../actions/object/actions";

interface DetailsProps {
  history: {
    push: (url: string) => void;
  };
}

const Details = (props: DetailsProps) => {
  const selectedObject = useSelector(
    (state: ObjectState) => state.selectedObject
  );
  const [selected, setSelected] = useState();
  const objects = useSelector((state: ObjectState) => state.objects);
  const dispatch = useDispatch();

  if (!selectedObject) return <Redirect to="/" />;

  const objectsNotRelationed = () => {
    console.log(objects);
    return objects.filter(
      (value: ObjectModel) =>
        !selectedObject?.relationships.includes(value.id ?? -1) && value.id !== selectedObject.id
    );
  };

  const cancel = () => {
    props.history.push("/details");
  };

  const submit = () => {
    if (selected) {
      dispatch(addRelationship(selectedObject.id as number, Number(selected)));
      props.history.push("/details");
    }
  };

  const handleChange = (e: any) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <AppBar title="Add Relationship" showBack={true} onBack={() => props.history.push("/details")}/>
      <div className="main-relationship-container">
        <div>
          <ObjectItem
            noBurger={true}
            object={selectedObject}
            key={selectedObject.id ?? 0}
          />
        </div>
        <div className="relationship-container">
          <h2>Object:</h2>
          <select value={selected} onChange={handleChange}>
            <option value={undefined}>-</option>
            {objectsNotRelationed().map((value: ObjectModel) => (
              <option value={value.id}>{value.type + ": " + value.name}</option>
            ))}
          </select>
          <div className="buttons-container">
            <button className="button" onClick={cancel}>
              Cancel
            </button>
            <button className="button" onClick={submit} disabled={!selected}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Details);
