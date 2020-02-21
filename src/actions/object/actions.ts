import { ObjectAction, ADD_OBJECT, DELETE_OBJECT, EDIT_OBJECT, ADD_RELATIONSHIP_OBJECT, DELETE_RELATIONSHIP_OBJECT } from './../../reducers/object/types';
import { ObjectModel } from './../../models/ObjectModel';

export const addObject = (object: ObjectModel) => {
    const action: ObjectAction = {
        type: ADD_OBJECT,
        payload: object
    }

    return action;
}

export const deleteObject = (id: number) => {
    const action: ObjectAction = {
        type: DELETE_OBJECT,
        payload: id
    }

    return action;
}

export const editObject = (object: ObjectModel) => {
    const action: ObjectAction = {
        type: EDIT_OBJECT,
        payload: object
    }

    return action;
}

export const addRelationship = (parentId: number, childId: number) => {
    const action: ObjectAction = {
        type: ADD_RELATIONSHIP_OBJECT,
        payload: {parentId, childId}
    }

    return action;
}

export const deleteRelationship = (parentId: number, childId: number) => {
    const action: ObjectAction = {
        type: DELETE_RELATIONSHIP_OBJECT,
        payload: {parentId, childId}
    }

    return action;
}