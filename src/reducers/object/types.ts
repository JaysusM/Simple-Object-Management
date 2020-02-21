import { ObjectModel, ObjectModelRelationship } from './../../models/ObjectModel';
export const ADD_OBJECT: string = 'ADD_OBJECT';
export const DELETE_OBJECT: string = 'DELETE_OBJECT';
export const EDIT_OBJECT: string = 'EDIT_OBJECT';
export const ADD_RELATIONSHIP_OBJECT: string = 'ADD_RELATIONSHIP_OBJECT';
export const DELETE_RELATIONSHIP_OBJECT: string = 'DELETE_RELATIONSHIP_OBJECT';

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

export interface ObjectState {
    objects: ObjectModel[]
}

export type ObjectAction = AddObjectAction | EditObjectAction | DeleteObjectAction | AddRelationshipObjectAction | DeleteRelationshipObjectAction