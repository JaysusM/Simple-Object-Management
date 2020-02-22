import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ObjectModel } from "../../models/ObjectModel";
import { ObjectState } from "../../reducers/object/types";
import ObjectItem from "./ObjectItem/ObjectItem";
import "./Objects.css";
import { deleteObject, setSelectedObject } from "../../actions/object/actions";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface ObjectsProps {
  filter: string;
  history: {
      push: (url: string) => void;
  }
}

const Objects: React.FunctionComponent<ObjectsProps & RouteComponentProps> = (props: ObjectsProps) => {
  const filterObjects = (objects: ObjectModel[]) => {
    const filter: string = props.filter;
    return objects.filter(
      (value: ObjectModel) =>
        value.name.includes(filter) ||
        value.description.includes(filter) ||
        value.type.includes(filter)
    );
  };

  const dispatch = useDispatch();

  const objects: ObjectModel[] = useSelector((state: ObjectState) =>
    filterObjects(state.objects)
  );

  const onDelete = (id: number | undefined) => {
    const idValue: number = id ?? -1;
    dispatch(deleteObject(idValue));
  }

  const onEdit = (object: ObjectModel) => {
    dispatch(setSelectedObject(object));
    props.history.push("/edit");
  }

  return (
    <div className="objects-container">
      {objects &&
        objects.map((object: ObjectModel, index: number) => (
          <ObjectItem key={index} object={object} onDelete={() => onDelete(object.id)} onEdit={() => onEdit(object)}/>
        ))}
    </div>
  );
};

export default withRouter(Objects);
