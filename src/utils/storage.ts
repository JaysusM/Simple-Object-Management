import { ObjectState } from "./../reducers/object/types";
const OBJECT_KEY: string = "objects";

export const loadDataFromStorage = (): ObjectState => {
  const storedValue: string | null = localStorage.getItem(OBJECT_KEY);
  const parsedValue: ObjectState =
    storedValue != null ? JSON.parse(storedValue) : { objects: [] };
  return parsedValue;
};

export const saveDataToStorage = (value: ObjectState) => {
  const objects = { objects: value.objects };
  localStorage.setItem(OBJECT_KEY, JSON.stringify(objects));
};
