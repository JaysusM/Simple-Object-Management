import React from "react";
import { useSelector } from "react-redux";
import { ObjectModel } from "../../models/ObjectModel";
import { ObjectState } from "../../reducers/object/types";

const Objects = () => {
  const objects: ObjectModel[] = useSelector(
    (state: ObjectState) => state.objects
  );

  return (
    <div className="objects-container">
      {objects && objects.map((object: ObjectModel, index: number) => <p key={index}>{object.name}</p>)}
    </div>
  );
};

export default Objects;
