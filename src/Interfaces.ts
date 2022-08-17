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

// from: https://stackoverflow.com/a/73394054/8083582  
export type ParamsFromString<T extends string> =
  T extends `${string}{${infer U}}${string}` ? U : never;
