/**
 * Created by liguoxin on 2017/3/6.
 * @flow
 */


import type { ArrayUtilsMethod } from 'lugia-utils';

const ObjectUtils = require('./ObjectUtils');

const Obj: ArrayUtilsMethod = {
  toArray(value: any): Array<any> {
    if (value == null) {
      return [];
    }
    return ObjectUtils.isArray(value) ? value : (value.length != null ? Array.from(value) : Array.of(value));
  },
};
module.exports = Obj;
