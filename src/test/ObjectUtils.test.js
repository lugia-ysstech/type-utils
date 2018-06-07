/**
 * Created by liguoxin on 2017/3/1.
 * @flow
 */
const chai = require('chai');
const ObjectUtils = require('../lib/ObjectUtils');
const StringUtils = require('../lib/StringUtils');

const { queryDataByKey, values } = ObjectUtils;
const { expect } = chai;

describe('Utils->ObjectUtils', () => {

  it('test queryDataByKey', () => {
    expect(queryDataByKey({}, '')).to.be.eql([]);
    expect(queryDataByKey({ a: '1', b: '' }, '2')).to.be.eql([]);
    expect(queryDataByKey({ a: '1', b: '' }, 'a')).to.be.eql([ '1' ]);
    expect(queryDataByKey({ a: '1', b: '2' }, '')).to.be.eql([ '1', '2' ]);
    expect(queryDataByKey({ ab: '11', abc: '12' }, 'a', { match: StringUtils.startsWith })).to.be.eql([ '11', '12' ]);
    expect(queryDataByKey({ ab: '11', abc: '12' }, 'c', { match: StringUtils.endsWith })).to.be.eql([ '12' ]);
  });

  it('test values', () => {
    expect(values({})).to.be.eql([]);
    expect(values({ a: 1, b: '2' })).to.be.eql([ 1, '2' ]);
  });
  it('isArray', () => {
    expect(ObjectUtils.isArray(1)).to.be.false;
    expect(ObjectUtils.isArray('1')).to.be.false;
    expect(ObjectUtils.isArray(false)).to.be.false;
    expect(ObjectUtils.isArray(null)).to.be.false;
    expect(ObjectUtils.isArray(undefined)).to.be.false;
    expect(ObjectUtils.isArray({})).to.be.false;
    expect(ObjectUtils.isArray(new Date())).to.be.false;
    expect(ObjectUtils.isArray(new Error())).to.be.false;
    expect(ObjectUtils.isArray(() => {})).to.be.false;

    expect(ObjectUtils.isArray([])).to.be.true;
    expect(ObjectUtils.isArray(new RegExp('11'))).to.be.false;
    expect(ObjectUtils.isArray(async (): any => {})).to.be.false;

  });
  it('isError', () => {
    expect(ObjectUtils.isError(1)).to.be.false;
    expect(ObjectUtils.isError('1')).to.be.false;
    expect(ObjectUtils.isError(false)).to.be.false;
    expect(ObjectUtils.isError(null)).to.be.false;
    expect(ObjectUtils.isError(undefined)).to.be.false;
    expect(ObjectUtils.isError({})).to.be.false;
    expect(ObjectUtils.isError(new Date())).to.be.false;
    expect(ObjectUtils.isError([])).to.be.false;
    expect(ObjectUtils.isArray(() => {})).to.be.false;

    expect(ObjectUtils.isError(new Error())).to.be.true;
    expect(ObjectUtils.isError(new RegExp('11'))).to.be.false;
    expect(ObjectUtils.isError(async (): any => {})).to.be.false;

  });


  it('isFunction', () => {
    expect(ObjectUtils.isFunction(1)).to.be.false;
    expect(ObjectUtils.isFunction('1')).to.be.false;
    expect(ObjectUtils.isFunction(false)).to.be.false;
    expect(ObjectUtils.isFunction(null)).to.be.false;
    expect(ObjectUtils.isFunction(undefined)).to.be.false;
    expect(ObjectUtils.isFunction({})).to.be.false;
    expect(ObjectUtils.isFunction(new Date())).to.be.false;
    expect(ObjectUtils.isFunction([])).to.be.false;
    expect(ObjectUtils.isFunction(new Error())).to.be.false;
    expect(ObjectUtils.isFunction(() => {})).to.be.true;
    expect(ObjectUtils.isFunction(new RegExp('11'))).to.be.false;
  });
  it('isDate', () => {
    expect(ObjectUtils.isDate(1)).to.be.false;
    expect(ObjectUtils.isDate('1')).to.be.false;
    expect(ObjectUtils.isDate(false)).to.be.false;
    expect(ObjectUtils.isDate(null)).to.be.false;
    expect(ObjectUtils.isDate(undefined)).to.be.false;
    expect(ObjectUtils.isDate({})).to.be.false;
    expect(ObjectUtils.isDate([])).to.be.false;
    expect(ObjectUtils.isDate(new Error())).to.be.false;
    expect(ObjectUtils.isDate(() => {})).to.be.false;
    expect(ObjectUtils.isDate(new Date())).to.be.true;
    expect(ObjectUtils.isDate(new RegExp('11'))).to.be.false;
    expect(ObjectUtils.isDate(async (): any => {})).to.be.false;

  });
  it('isNumber', () => {
    expect(ObjectUtils.isNumber('1')).to.be.false;
    expect(ObjectUtils.isNumber(false)).to.be.false;
    expect(ObjectUtils.isNumber(null)).to.be.false;
    expect(ObjectUtils.isNumber(undefined)).to.be.false;
    expect(ObjectUtils.isNumber({})).to.be.false;
    expect(ObjectUtils.isNumber([])).to.be.false;
    expect(ObjectUtils.isNumber(new Error())).to.be.false;
    expect(ObjectUtils.isNumber(() => {})).to.be.false;
    expect(ObjectUtils.isNumber(new Date())).to.be.false;
    expect(ObjectUtils.isNumber(1)).to.be.true;
    expect(ObjectUtils.isNumber(new RegExp('11'))).to.be.false;
    expect(ObjectUtils.isNumber(async (): any => {})).to.be.false;

  });
  it('isObject', () => {
    expect(ObjectUtils.isObject(1)).to.be.false;
    expect(ObjectUtils.isObject('1')).to.be.false;
    expect(ObjectUtils.isObject(false)).to.be.false;
    expect(ObjectUtils.isObject(null)).to.be.false;
    expect(ObjectUtils.isObject(undefined)).to.be.false;
    expect(ObjectUtils.isObject([])).to.be.true;
    expect(ObjectUtils.isObject(new Error())).to.be.true;
    expect(ObjectUtils.isObject(() => {})).to.be.false;
    expect(ObjectUtils.isObject(new Date())).to.be.true;
    expect(ObjectUtils.isObject({})).to.be.true;
    expect(ObjectUtils.isObject(new RegExp('11'))).to.be.true;
    expect(ObjectUtils.isObject(async (): any => {})).to.be.false;

  });
  it('isBoolean', () => {
    expect(ObjectUtils.isBoolean(1)).to.be.false;
    expect(ObjectUtils.isBoolean('1')).to.be.false;
    expect(ObjectUtils.isBoolean(false)).to.be.true;
    expect(ObjectUtils.isBoolean(null)).to.be.false;
    expect(ObjectUtils.isBoolean(undefined)).to.be.false;
    expect(ObjectUtils.isBoolean({})).to.be.false;
    expect(ObjectUtils.isBoolean([])).to.be.false;
    expect(ObjectUtils.isBoolean(new Error())).to.be.false;
    expect(ObjectUtils.isBoolean(() => {})).to.be.false;
    expect(ObjectUtils.isBoolean(new Date())).to.be.false;
    expect(ObjectUtils.isBoolean(new RegExp('11'))).to.be.false;
    expect(ObjectUtils.isBoolean(async (): any => {})).to.be.false;

  });
  it('isRegExp', () => {
    expect(ObjectUtils.isRegExp(1)).to.be.false;
    expect(ObjectUtils.isRegExp('1')).to.be.false;
    expect(ObjectUtils.isRegExp(false)).to.be.false;
    expect(ObjectUtils.isRegExp(null)).to.be.false;
    expect(ObjectUtils.isRegExp(undefined)).to.be.false;
    expect(ObjectUtils.isRegExp({})).to.be.false;
    expect(ObjectUtils.isRegExp([])).to.be.false;
    expect(ObjectUtils.isRegExp(new Error())).to.be.false;
    expect(ObjectUtils.isRegExp(() => {})).to.be.false;
    expect(ObjectUtils.isRegExp(new Date())).to.be.false;
    expect(ObjectUtils.isRegExp('1')).to.be.false;
    expect(ObjectUtils.isRegExp(new RegExp('11'))).to.be.true;
    expect(ObjectUtils.isRegExp(async (): any => {})).to.be.false;

  });
  it('isString', () => {
    expect(ObjectUtils.isString(1)).to.be.false;
    expect(ObjectUtils.isString('1')).to.be.true;
    expect(ObjectUtils.isString(false)).to.be.false;
    expect(ObjectUtils.isString(null)).to.be.false;
    expect(ObjectUtils.isString(undefined)).to.be.false;
    expect(ObjectUtils.isString({})).to.be.false;
    expect(ObjectUtils.isString([])).to.be.false;
    expect(ObjectUtils.isString(new Error())).to.be.false;
    expect(ObjectUtils.isString(() => {})).to.be.false;
    expect(ObjectUtils.isString(new Date())).to.be.false;
    expect(ObjectUtils.isString(new RegExp('11'))).to.be.false;
    expect(ObjectUtils.isString(async (): any => {})).to.be.false;
  });
  it('isAsyncFunction', () => {
    expect(ObjectUtils.isAsyncFunction(1)).to.be.false;
    expect(ObjectUtils.isAsyncFunction('1')).to.be.false;
    expect(ObjectUtils.isAsyncFunction(false)).to.be.false;
    expect(ObjectUtils.isAsyncFunction(null)).to.be.false;
    expect(ObjectUtils.isAsyncFunction(undefined)).to.be.false;
    expect(ObjectUtils.isAsyncFunction({})).to.be.false;
    expect(ObjectUtils.isAsyncFunction([])).to.be.false;
    expect(ObjectUtils.isAsyncFunction(new Error())).to.be.false;
    expect(ObjectUtils.isAsyncFunction(() => {})).to.be.false;
    expect(ObjectUtils.isAsyncFunction(new Date())).to.be.false;
    expect(ObjectUtils.isAsyncFunction(new RegExp('11'))).to.be.false;
    expect(ObjectUtils.isAsyncFunction(async (): any => {})).to.be.true;
  });
});
