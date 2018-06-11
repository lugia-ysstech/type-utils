/**
 * Created by liguoxin on 2017/3/6.
 * @flow
 */


import type { ArrayUtilsMethod } from 'type-utils';

const ObjectUtils = require('./ObjectUtils');

const Obj: ArrayUtilsMethod = {
  toArray(value: any): Array<any> {
    if (value == null) {
      return [];
    }
    if (ObjectUtils.isArray(value)) {
      return value;
    }
    if (ObjectUtils.isString(value)) {
      return [ value ];
    }
    return value.length != null ? Array.from(value) : Array.of(value);
  },
};
module.exports = Obj;
