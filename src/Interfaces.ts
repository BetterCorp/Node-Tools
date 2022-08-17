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
  // Check if this string includes a param, and infer the param name,
  // as well as the string before and after
  T extends `${infer Pre}{${infer Param}}${infer Post}`
    ? // A param exists in the string, so return it as a union type that
      // includes all other params in the string with this param removed.
      Param | ParamsFromString<`${Pre}${Post}`>
    : // No params exist in these string, so return never.
      never;
