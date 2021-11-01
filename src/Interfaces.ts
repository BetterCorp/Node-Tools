export interface IDictionary<T = any> {
  [index: string]: T;
}

export interface MergeObjectsKey {
  refPropName: string;
  refPropKey: string;
}

export interface SimpleStatu<T = any> {
  status: boolean;
  value?: T;
}