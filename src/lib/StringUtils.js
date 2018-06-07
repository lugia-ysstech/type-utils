/**
 * Created by liguoxin on 2017/3/6.
 * @flow
 */
import type { PadArg } from 'type-utils';

/*
 * 根据方向自动进行字符串补齐操作
 * @param str
 * @param len
 * @param pad
 * @param dir
 * @returns {string}
 */
exports.pad = function(arg: PadArg): string {
  let { str = '', len = 0, pad = ' ', dir = 'right' } = arg;
  let padlen: number = 0;
  if (len > str.length) {
    switch (dir) {
      case 'left':
        str = pad.repeat(len - str.length) + str;
        break;
      case 'both': {
        const right = Math.ceil((padlen = len - str.length) / 2),
          left = padlen - right;
        str = pad.repeat(left) + str + pad.repeat(right);
        break;
      }
      case 'right':
        str = str + pad.repeat(len - str.length);
        break;
      default:
        return str;
    }
  }
  return str;
};

/*
 * 截取字符 超过指定长度采用chr进行替换
 * @param str
 * @param length
 * @param chr
 * @returns {string}
 */
exports.truncate = function(str: string, length: number, chr: string = '…'): string {
  return str.length >= length ? str.substr(0, length - chr.length) + chr : str;
};


/*
 * 匹配包含颜色的字符数量
 * @param str
 * @returns {*}
 */
exports.strlen = function(str: string): number {
  const code = /\u001b\[(?:\d*;){0,5}\d*m/g,
    stripped = ('' + str).replace(code, ''),
    split = stripped.split('\n');
  return split.reduce((memo: number, s: string): number => {
    return (s.length > memo) ? s.length : memo;
  }, 0);
};

exports.startsWith = function(str: string, condition: string): boolean {
  if (str == null) {
    return false;
  }
  return str.startsWith(condition);
};
exports.endsWith = function(str: string, condition: string): boolean {
  if (str == null) {
    return false;
  }
  return str.endsWith(condition);
};


exports.containWith = function(str: string, condition: string): boolean {
  if (str == null) {
    return false;
  }
  return str.indexOf(condition) !== -1;
};
exports.isBlank = function(str: string): boolean {
  return !str || !str.trim();
};
exports.isPositiveInteger = function(str: string): boolean {
  return /^\d+$/.test(str);
};
