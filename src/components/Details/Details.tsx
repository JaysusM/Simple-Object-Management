import React from "react";
import "./Details.css";
import { useSelector, useDispatch } from "react-redux";
import { ObjectState } from "../../reducers/object/types";
import { Redirect, withRouter } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import AddFab from "../AddFab/AddFab";
import ObjectItem from "../Objects/ObjectItem/ObjectItem";
import { ObjectModel } from "../../models/ObjectModel";
import {
  deleteRelationship,
  deleteSelectedObject
} from "../../actions/object/actions";

interface DetailsProps {
  history: {
    push: (url: string) => void;
  };
}

const Details = (props: DetailsProps) => {
  const selectedObject = useSelector(
    (state: ObjectState) => state.selectedObject
  );
  const objects = useSelector((state: ObjectState) => state.objects);
  const dispatch = useDispatch();

  const findObjectById = (id: number) => {
    return objects.find((value: ObjectModel) => value.id === id);
  };

  if (!selectedObject) return <Redirect to="/" />;

  const onDeleteRelationship = (id: number) => {
    dispatch(deleteRelationship(selectedObject.id ?? -1, id));
  };

  const onBack = () => {
    dispatch(deleteSelectedObject());
    props.history.push("/");
  };

  return (
    <div>
      <AppBar showBack={true} onBack={onBack} title="Object Details" />
      <div className="details-container">
        <div>
          <ObjectItem
            noBurger={true}
            object={selectedObject}
            key={selectedObject.id ?? 0}
          />
        </div>
        <AddFab onClick={() => props.history.push("/add/relationship")} />
        <h1>Relationships</h1>
        <div className="relationships-container">
          {selectedObject.relationships.map((id: number, index: number) => {
            const object: ObjectModel | undefined = findObjectById(id);
            if (!object) return <div key={index}/>;
            return (
                <div key={index} className="object-relationship">
                <ObjectItem
                  key={-index}
                  object={object}
                  onDelete={() => onDeleteRelationship(id)}
                />
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Details);
