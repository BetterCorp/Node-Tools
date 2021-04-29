export interface IDictionary<T = any> {
  [index: string]: T;
}

export interface MergeObjectsKey {
  refPropName: string;
  refPropKey: string;
}