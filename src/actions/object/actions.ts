import {
  ObjectActionTypes,
  ADD_OBJECT,
  DELETE_OBJECT,
  EDIT_OBJECT,
  ADD_RELATIONSHIP_OBJECT,
  DELETE_RELATIONSHIP_OBJECT,
  SET_SELECTED_OBJECT,
  DELETE_SELECTED_OBJECT
} from "./../../reducers/object/types";
import { ObjectModel } from "./../../models/ObjectModel";

export const addObject = (object: ObjectModel) => {
  const action: ObjectActionTypes = {
    type: ADD_OBJECT,
    payload: object
  };

  return action;
};

export const deleteObject = (id: number) => {
  const action: ObjectActionTypes = {
    type: DELETE_OBJECT,
    payload: id
  };

  return action;
};

export const editObject = (object: ObjectModel) => {
  const action: ObjectActionTypes = {
    type: EDIT_OBJECT,
    payload: object
  };

  return action;
};

export const addRelationship = (parentId: number, childId: number) => {
  const action: ObjectActionTypes = {
    type: ADD_RELATIONSHIP_OBJECT,
    payload: { parentId, childId }
  };

  return action;
};

export const deleteRelationship = (parentId: number, childId: number) => {
  const action: ObjectActionTypes = {
    type: DELETE_RELATIONSHIP_OBJECT,
    payload: { parentId, childId }
  };

  return action;
};

export const setSelectedObject = (object: ObjectModel) => {
  const action: ObjectActionTypes = {
    type: SET_SELECTED_OBJECT,
    payload: object
  };

  return action;
};

export const deleteSelectedObject = () => {
  const action: ObjectActionTypes = {
    type: DELETE_SELECTED_OBJECT,
    payload: null
  };

  return action;
};
