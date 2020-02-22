import {
  ObjectModel,
  ObjectModelRelationship
} from "./../../models/ObjectModel";
import {
  ObjectState,
  ObjectActionTypes,
  ADD_OBJECT,
  EDIT_OBJECT,
  DELETE_OBJECT,
  ADD_RELATIONSHIP_OBJECT,
  DELETE_RELATIONSHIP_OBJECT,
  SET_SELECTED_OBJECT,
  DELETE_SELECTED_OBJECT
} from "./types";
import { reject, without, max, isEmpty } from "underscore";
import { loadDataFromStorage } from "../../utils/storage";

const objectReducer = (
  state: ObjectState = loadDataFromStorage(),
  action: ObjectActionTypes
): ObjectState => {
  switch (action.type) {
    case ADD_OBJECT: {
      let payload: ObjectModel = action.payload as ObjectModel;
      const ids: number[] = state.objects.map(
        (value: ObjectModel) => value.id ?? -1
      );
      const id: number = isEmpty(ids) ? 0 : max(ids) + 1;
      payload.id = id;
      return {
        objects: [...state.objects, payload],
        selectedObject: state.selectedObject
      };
    }
    case EDIT_OBJECT: {
      let payload: ObjectModel = action.payload as ObjectModel;
      const objects: ObjectModel[] = state.objects.map((object: ObjectModel) =>
        object.id === payload.id ? { ...object, ...payload } : object
      );
      return {
        objects: [...objects],
        selectedObject: state.selectedObject
      };
    }
    case DELETE_OBJECT: {
      let payload: number = action.payload as number;
      let objects: ObjectModel[] = reject(
        state.objects,
        (value: ObjectModel) => value.id === payload
      );
      objects.forEach(
        (value: ObjectModel) =>
          (value.relationships = without(value.relationships, payload))
      );
      return { objects: objects, selectedObject: state.selectedObject };
    }
    case ADD_RELATIONSHIP_OBJECT: {
      let payload: ObjectModelRelationship = action.payload as ObjectModelRelationship;
      let objects: ObjectModel[] = [...state.objects];
      const object: ObjectModel | undefined = objects.find(
        (value: ObjectModel) => value.id === payload.parentId
      );
      if (object) object.relationships.push(payload.childId);
      return { objects: objects, selectedObject: state.selectedObject };
    }
    case DELETE_RELATIONSHIP_OBJECT: {
      let payload: ObjectModelRelationship = action.payload as ObjectModelRelationship;
      let objects: ObjectModel[] = [...state.objects];
      objects.forEach((value: ObjectModel) => {
        if (value.id === payload.parentId) {
          value.relationships = without(value.relationships, payload.childId);
        }
      });
      return { objects: objects, selectedObject: state.selectedObject };
    }
    case SET_SELECTED_OBJECT: {
      let payload: ObjectModel = action.payload as ObjectModel;
      return { objects: state.objects, selectedObject: payload };
    }
    case DELETE_SELECTED_OBJECT: {
      return { objects: state.objects, selectedObject: undefined };
    }
    default: {
      return state;
    }
  }
};

export default objectReducer;
