import { ObjectModel, ObjectModelRelationship } from './../../models/ObjectModel';
export const ADD_OBJECT: string = 'ADD_OBJECT';
export const DELETE_OBJECT: string = 'DELETE_OBJECT';
export const EDIT_OBJECT: string = 'EDIT_OBJECT';
export const ADD_RELATIONSHIP_OBJECT: string = 'ADD_RELATIONSHIP_OBJECT';
export const DELETE_RELATIONSHIP_OBJECT: string = 'DELETE_RELATIONSHIP_OBJECT';
export const SET_SELECTED_OBJECT: string = 'SET_SELECTED_OBJECT';
export const DELETE_SELECTED_OBJECT: string = 'DELETE_SELECTED_OBJECT';

interface AddObjectAction {
    type: typeof ADD_OBJECT,
    payload: ObjectModel
}

interface EditObjectAction {
    type: typeof EDIT_OBJECT,
    payload: ObjectModel
}

interface DeleteObjectAction {
    type: typeof DELETE_OBJECT,
    payload: number
}

interface AddRelationshipObjectAction {
    type: typeof ADD_RELATIONSHIP_OBJECT,
    payload: ObjectModelRelationship
}

interface DeleteRelationshipObjectAction {
    type: typeof DELETE_RELATIONSHIP_OBJECT,
    payload: ObjectModelRelationship
}

interface SetSelectedObjectAction {
    type: typeof SET_SELECTED_OBJECT,
    payload: ObjectModel
}

interface DeleteSelectedObjectAction {
    type: typeof DELETE_SELECTED_OBJECT,
    payload: null
}

export interface ObjectState {
    objects: ObjectModel[],
    selectedObject?: ObjectModel
}


export type ObjectActionTypes = AddObjectAction | EditObjectAction | DeleteObjectAction | AddRelationshipObjectAction | DeleteRelationshipObjectAction | SetSelectedObjectAction | DeleteSelectedObjectAction