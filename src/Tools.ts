import * as MOMENT from 'moment';
import { MergeObjectsKey } from './Interfaces';

var stream = require('stream');
var Transform = stream.Transform;

function MemoryStream (options?: any): any {
  return new Transform({
    transform (chunk: any, encoding: any, callback: any) {
      this.push(chunk);
      callback();
    },
  });
}

export class Tools {
  static inIframe (): boolean {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }
  static hierachialGetAvailibility<T> (listOfObjects: Array<T>, key: string, parentkey: string, value: T): Array<T> {
    let listToReturn = [];
    for (let thisType of (listOfObjects as any)) {
      if (thisType[key] === value) {
        listToReturn.push(thisType);
      } else if (thisType[parentkey] === value) {
        for (let iItem of this.hierachialGetAvailibility(listOfObjects, key, parentkey, thisType[key]))
          listToReturn.push(iItem);
      }
    }
    return listToReturn;
  }
  static decodeBase64Image (dataString: string): any {
    let matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
      response: any = {};

    if (this.isNullOrUndefined(matches) || matches!.length !== 3) {
      return new Error('Invalid input string');
    }

    response.type = matches![1];
    response.data = new Buffer(matches![2], 'base64');

    return response;
  }
  static MemoryStream (options?: any) {
    return MemoryStream(options);
  }
  private static GetValueFromObjectBasedOnStringPathSearcher (workingObj: any, stringToGet: string): any {
    if (this.isNullOrUndefined(workingObj)) {
      return null;
    }
    if (this.isNullOrUndefined(stringToGet)) {
      return null;
    }
    let splitted = stringToGet.split(".", 2);
    if (splitted.length === 1) {
      if (splitted[0] === '*') {
        let data = [];
        for (let iI of Object.keys(workingObj)) {
          if (this.isArray(workingObj[iI])) {
            for (let iX of workingObj[iI]) {
              data.push({
                _GVRef: iI,
                ...iX
              });
            }
          } else
            data.push({
              _GVRef: iI,
              ...workingObj[iI]
            });
        }
        return data;
      }
      return workingObj[splitted[0]];
    }
    return this.GetValueFromObjectBasedOnStringPath(workingObj[splitted[0]], stringToGet.replace(splitted[0] + ".", ""));
  }
  public static GetValueFromObjectBasedOnStringPath (workingObj: any, stringToGet: string): any {
    if (this.isNullOrUndefined(stringToGet)) {
      return null;
    }

    let finalString = "";
    let splitObj = stringToGet.split(",");
    if (splitObj.length === 1) {
      let retData = this.GetValueFromObjectBasedOnStringPathSearcher(workingObj, stringToGet);
      return this.isNullOrUndefined(retData) ? retData : JSON.parse(JSON.stringify(retData));
    }

    for (let val of splitObj) {
      if (this.isNullOrUndefined(stringToGet)) {
        continue;
      }
      let retData = this.GetValueFromObjectBasedOnStringPathSearcher(workingObj, val);
      let data = this.isNullOrUndefined(retData) ? retData : JSON.parse(JSON.stringify(retData));
      if (this.isUndefined(data)) {
        finalString += val;
      } else {
        finalString += data;
      }
    }
    return finalString;
  }
  public static mergeObjects (src: any, against: any, initialMigration: boolean = true, referenceKey?: MergeObjectsKey): any {
    if (!src)
      return against;
    if (!against)
      return src;

    if (this.isNullOrUndefined(initialMigration) || initialMigration === true) {
      let clonedObj1 = JSON.parse(JSON.stringify(src));
      let obj2String = JSON.stringify(against);
      let clonedObj2 = JSON.parse(obj2String);
      return this.mergeObjects(clonedObj1, clonedObj2, false);
    }

    if (this.isArray(src) && this.isArray(against)) {
      for (let item of against)
        src.push(item);
      return src;
    }

    for (let prop of Object.keys(against)) {
      let srcProp = src[prop];
      let againstProp = against[prop];
      if (this.isObject(againstProp) && !this.isNullOrUndefined(srcProp))
        src[prop] = this.mergeObjects(srcProp, againstProp, false);
      else
        src[prop] = againstProp;
    }

    return src;
  }
  public static StringReplaceWithObject (obj: any, str: string): string {
    let strToReplace = str;
    if (strToReplace.indexOf('{') >= 0) {
      let strSplt = strToReplace.split('{');
      let strSplt2 = strSplt[1].split('}');
      let newVal = this.GetValueFromObjectBasedOnStringPath(obj, strSplt2[0]);
      strToReplace = strSplt[0] + newVal + strSplt2.splice(1).join('}') + (strSplt.length > 2 ? '{' : '') + strSplt.splice(2).join('{');
      strToReplace = this.StringReplaceWithObject(obj, strToReplace);
    }
    return strToReplace;
  }
  public static getTimeFromMilliseconds (time: number) {
    if (time < 1000) {
      return `${time} milliseconds`;
    }
    let seconds: number = time / 1000;
    if (seconds < 60) {
      return `${seconds} seconds`;
    }
    const minutes: number = seconds / 60;
    if (minutes < 60) {
      return `${minutes} minutes`;
    }
    const hours: number = minutes / 60;
    if (hours < 60) {
      return `${hours} hours`;
    }
    return `${hours / 24} days`;
  }
  public static delay (time: number = 1000): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, time);
    });
  }
  public static async waitDelayThenThrow (checkFunc: Function, rejectFunc: Function, time: number = 1000, timeout: number = 10): Promise<void> {
    let count = 0;
    const causeTimeout = () => {
      count = timeout + 1;
    };
    while (checkFunc(causeTimeout)) {
      count++;
      if (count > timeout && rejectFunc) {
        rejectFunc('Timeout!');
      }
      if (count > timeout) {
        throw 'Timeout!';
      }
      await this.delay(time);
    }
  }
  public static isString (value: any) {
    return typeof value === 'string' || value instanceof String;
  }
  public static isDate (value: any, matchString = true) {
    return value instanceof Date;/*
      ? true
      : matchString
        ? this.dateTimeRegex.test(`${value}`)
        : false*/
  }
  public static isArray (value: any) {
    return !this.isNullOrUndefined(value) && typeof value === 'object' && value.constructor === Array && !this.isNullOrUndefined(value.length);
  }
  public static isFunction (value: any) {
    return typeof value === 'function';
  }
  public static isSymbol (value: any) {
    return typeof value === 'symbol';
  }
  public static isNumber (value: any): boolean {
    return typeof value === 'number' || !isNaN(value);
  }
  public static isBoolean (value: any): boolean {
    return typeof value === 'boolean';
  }
  public static isUndefined (value: any): boolean {
    return typeof value === 'undefined';
  }
  public static isNull (value: any): boolean {
    return value === null;
  }
  public static isObject (value: any): boolean {
    return value && typeof value === 'object' && value.constructor === Object;
  }
  public static isNullOrUndefined (value: any): boolean {
    return this.isUndefined(value) || this.isNull(value);
  }
  static formatDate (time: string | Date | MOMENT.MomentInput, format = "DD/MM/YYYY") {
    if (this.isNullOrUndefined(time)) return "";
    return MOMENT(time).format(format);
  }
  static getCurrencySymbol (symbol: string) {
    switch (symbol.toUpperCase()) {
      case 'USD':
        return '$';
      case 'ZAR':
        return 'R';
      case 'GBP':
        return '£';
    }
    return symbol;
  }
  public static formatCurrency (amount: number | string, decimalPlaces?: number,
    decimalFormatter?: string, thousandsFormatter?: string, symbol?: string | boolean): string {
    decimalPlaces = this.isNullOrUndefined(decimalPlaces) ? 2 : Math.abs(decimalPlaces as number);
    decimalFormatter = this.isNullOrUndefined(decimalFormatter) ? '.' : decimalFormatter;
    thousandsFormatter = this.isNullOrUndefined(thousandsFormatter) ? ' ' : thousandsFormatter;
    if (!this.isNumber(amount)) {
      amount = Number.parseFloat(amount as string);
    }
    const negative = (amount < 0 ? '-' : '');
    amount = Math.abs(amount as number || 0);
    amount = amount.toFixed(decimalPlaces);
    if (this.isNullOrUndefined(symbol)) {
      if (this.isBoolean(symbol) && symbol === false) {
        symbol = '';
      } else {
        symbol = 'R';
      }
    }
    const numberValueSplit = amount.split('.');
    let decimalValue = '';
    if (decimalPlaces > 0) {
      decimalValue = decimalFormatter + numberValueSplit[1];
    }
    return symbol
      + ' ' + negative
      + numberValueSplit[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsFormatter as string)
      + decimalValue;
  }
  public static genRandomNumber (min: number, max: number) {
    return Math.floor(Math.random() * (+max - +min)) + +min;
  }
  public static GetKeyForFormat (type: string, amt: number = 1): string {
    switch (type) {
      case 'GB': {
        if (amt >= 1000) {
          return 'TB';
        }
        return 'GB';
      }
      case 'MB': {
        if (amt >= 1000) {
          return this.GetKeyForFormat('GB', amt / 1000);
        }
        return 'MB';
      }
      case 'KB': {
        if (amt >= 1000) {
          return this.GetKeyForFormat('MB', amt / 1000);
        }
        return 'MB';
      }
      case 'B': {
        if (amt >= 1000) {
          return this.GetKeyForFormat('KB', amt / 1000);
        }
        return 'MB';
      }
      case 'Gb': {
        if (amt >= 1000) {
          return 'Tbps';
        }
        return 'Gbps';
      }
      case 'Mb': {
        if (amt >= 1000) {
          return this.GetKeyForFormat('Gb', amt / 1000);
        }
        return 'Mbps';
      }
      case 'Kb': {
        if (amt >= 1000) {
          return this.GetKeyForFormat('Mb', amt / 1000);
        }
        return 'Kbps';
      }
      case 'b': {
        if (amt >= 1000) {
          return this.GetKeyForFormat('Kb', amt / 1000);
        }
        return 'bps';
      }
    }
    return 'x';
  }
  public static GetFormatted (speed: number, type: string = 'MB', roundTo: number = 2): string {
    while (speed >= 1000) {
      speed = speed / 1000;
    }
    return speed.toFixed(roundTo);
  }
  public static GetInANiceFormat (speed: number, type: string = 'MB', roundTo: number = 2): string {
    const key = this.GetKeyForFormat(type, speed);
    while (speed >= 1000) {
      speed = speed / 1000;
    }
    return `${this.GetFormatted(speed, type, roundTo)}${key}`;
  }
}