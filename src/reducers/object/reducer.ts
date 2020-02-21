import { ObjectModel, ObjectModelRelationship } from "./../../models/ObjectModel";
import {
  ObjectState,
  ObjectAction,
  ADD_OBJECT,
  EDIT_OBJECT,
  DELETE_OBJECT,
  ADD_RELATIONSHIP_OBJECT,
  DELETE_RELATIONSHIP_OBJECT
} from "./types";
import { reject, without, contains, max, isEmpty } from "underscore";
import { loadDataFromStorage } from "../../utils/storage";

const objectReducer = (
  state: ObjectState = loadDataFromStorage(),
  action: ObjectAction
): ObjectState => {
  switch (action.type) {
    case ADD_OBJECT: {
      let payload: ObjectModel = action.payload as ObjectModel;
      const ids: number[] = state.objects.map((value: ObjectModel) => value.id ?? -1)
      const id: number = (isEmpty(ids)) ? 0 : max(ids) + 1;
      payload.id = id;
      return {
        objects: [ ...state.objects, payload ]
      };
    }
    case EDIT_OBJECT: {
      let payload: ObjectModel = action.payload as ObjectModel;
      const objects: ObjectModel[] = state.objects.map((object: ObjectModel) =>
        object.id === payload.id ? { ...object, ...payload } : object
      );
      return {
        objects: [ ...objects ]
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
      return { objects: objects };
    }
    case ADD_RELATIONSHIP_OBJECT: {
      let payload: ObjectModelRelationship = action.payload as ObjectModelRelationship;
      let objects: ObjectModel[] = [...state.objects];
      objects.forEach((value: ObjectModel) => {
          if(value.id === payload.parentId && !contains(value.relationships, payload.childId)) {
            value.relationships.push(payload.childId)
          }
      });
      return { objects: objects };
    }
    case DELETE_RELATIONSHIP_OBJECT: {
        let payload: ObjectModelRelationship = action.payload as ObjectModelRelationship;
        let objects: ObjectModel[] = [...state.objects];
        objects.forEach((value: ObjectModel) => {
            if(value.id === payload.parentId) {
              value.relationships = without(value.relationships, payload.childId);
            }
        });
        return { objects: objects };
      }
    default: {
      return state;
    }
  }
};

export default objectReducer;
