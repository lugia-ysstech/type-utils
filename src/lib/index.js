/**
 * Created by liguoxin on 2017/3/9.
 * @flow
 */
import type { NumberUtilsMethod, StringUtilsMethod, ObjectUtilsMethod, ArrayUtilsMethod } from 'lugia-utils';

const NumberUtils: NumberUtilsMethod = require('./NumberUtils');
const StringUtils: StringUtilsMethod = require('./StringUtils');
const ObjectUtils: ObjectUtilsMethod = require('./ObjectUtils');
const ArrayUtils: ArrayUtilsMethod = require('./ArrayUtils');

module.exports = {
  NumberUtils,
  StringUtils,
  ObjectUtils,
  ArrayUtils,
};
