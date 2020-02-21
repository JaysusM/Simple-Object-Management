export interface ObjectModel {
    id?: number,
    name: string,
    description: string,
    type: string,
    relationships: number[]
}

export interface ObjectModelRelationship {
    parentId: number,
    childId: number
}