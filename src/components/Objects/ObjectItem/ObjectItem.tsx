import React, { useState } from "react";
import { ObjectModel } from "../../../models/ObjectModel";
import "./ObjectItem.css";
import { useDispatch } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { setSelectedObject } from "../../../actions/object/actions";

interface ObjectItemProps {
  object: ObjectModel;
  key: number;
  history: {
    push: (url: string) => void;
  };
  noBurger?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

const ObjectItem: React.FunctionComponent<ObjectItemProps &
  RouteComponentProps> = (props: ObjectItemProps) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const dispatch = useDispatch();

  const onItemClicked = () => {
    dispatch(setSelectedObject(props.object));
    props.history.push("/details");
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.id === "burger-icon") {
      setShowOptions(!showOptions);
    } else if (e.target.id === "edit") {
      if (props.onEdit) props.onEdit();
    } else if (e.target.id === "delete") {
      if (props.onDelete) props.onDelete();
    } else {
      onItemClicked();
    }
  };

  return (
    <div key={props.key} className="object-container" onClick={handleClick}>
      <div className="properties-container">
        <p className="title">{props.object.type + ":" + props.object.name}</p>
        <p>{props.object.description}</p>
      </div>
      <div className="burger-button" onClick={handleClick}>
        {!props.noBurger && (
          <div>
            <img
              alt="burger"
              id="burger-icon"
              className="burger-icon"
              src="/hamburger.svg"
            />
            {showOptions && (
              <div className="object-options">
                {props.onEdit && (
                  <p id="edit" onClick={handleClick}>
                    Edit
                  </p>
                )}
                {props.onDelete && (
                  <p id="delete" onClick={handleClick}>
                    Delete
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(ObjectItem);
