/**
 * Created by liguoxin on 2017/3/6.
 *@flow
 */
import type { Match } from 'type-utils';

function queryDataByKey<T>(obj: { [ key: string ]: T }, condition: string, match?: Match): Array<T> {
  const result = [];
  if (obj == null) {
    return result;
  }
  if (!condition) {
    return module.exports.values(obj);
  }
  Object.keys(obj).forEach((key: string) => {
    if (match && match.match && match.match(key, condition)) {
      result.push(obj[ key ]);
    } else if (key === condition) {
      result.push(obj[ key ]);
    }
  });
  return result;
}

function values(obj: Object): Array<any> {

  if (!obj) {
    return [];
  }
  return Object.keys(obj).map((key: string): any => {
    return obj[ key ];
  });
}

function isError(obj: any): boolean {
  return _isType(obj, 'Error');
}

function isArray(obj: any): boolean {
  return Array.isArray(obj);
}

function isFunction(obj: any): boolean {
  return _isType(obj, 'Function');
}

function isDate(obj: any): boolean {
  return _isType(obj, 'Date');
}

function isObject(obj: any): boolean {
  if (!obj) {
    return false;
  }
  return typeof obj === 'object';
}

function isNumber(obj: any): boolean {
  return _isType(obj, 'Number');
}

function isBoolean(obj: any): boolean {
  return _isType(obj, 'Boolean');
}

function isRegExp(obj: any): boolean {
  return _isType(obj, 'RegExp');
}

function isString(obj: any): boolean {
  return _isType(obj, 'String');
}

function isAsyncFunction(obj: any): boolean {
  return _isType(obj, 'AsyncFunction');
}
function isPromise(obj: any): boolean {
  return _isType(obj, 'Promise');
}

function _isType(obj: any, type: 'AsyncFunction' |
  'Function' | 'Error' | 'Array' | 'Date' | 'Number' | 'Boolean' | 'RegExp' | 'String' | 'Promise'): boolean {
  return Object.prototype.toString.call(obj) === `[object ${type}]`;
}

module.exports = {
  queryDataByKey,
  values,
  isArray,
  isFunction,
  isError,
  isDate,
  isObject,
  isPromise,
  isNumber,
  isBoolean,
  isRegExp,
  isString,
  isAsyncFunction,
};
