import { ObjectState } from './../reducers/object/types';
import { ObjectModel } from './../models/ObjectModel';
const OBJECT_KEY: string = 'objects';

export const loadDataFromStorage = (): ObjectState => {
    const storedValue: string | null = localStorage.getItem(OBJECT_KEY);
    const parsedValue: ObjectState = storedValue ? JSON.parse(storedValue) : {objects: []};
    return parsedValue;
}

export const saveDataFromStorage = (value: ObjectModel[]) => {
    localStorage.setItem(OBJECT_KEY, JSON.stringify(value))
}