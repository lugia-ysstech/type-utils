/**
 * Created by liguoxin on 2017/3/1.
 * @flow
 */
const chai = require('chai');
const { pad, truncate, strlen, startsWith, endsWith, containWith, isBlank, isPositiveInteger } = require('../lib/StringUtils');

const { expect } = chai;

describe('Utils->StringUtils', () => {

  it('test strlen', () => {
    expect(strlen('1')).to.equal(1);
    expect(strlen('12')).to.equal(2);
    expect(strlen('123')).to.equal(3);
    expect(strlen('[34mB[39m')).to.equal(1);
  });
  it('test truncate', () => {
    expect(truncate('1', 2)).to.equal('1');
    expect(truncate('123', 2)).to.equal('1…');
    expect(truncate('123', 3)).to.equal('12…');
    expect(truncate('123', 3, '...')).to.equal('...');
  });
  it('test pad', () => {

    expect(pad({ str: '1', len: 3 })).to.equal('1  ');
    expect(pad({ str: '1', len: 2 })).to.equal('1 ');
    expect(pad({ str: '1', len: 1 })).to.equal('1');
    expect(pad({ str: '1' })).to.equal('1');
    expect(pad({ str: '12345' })).to.equal('12345');
    expect(pad({ str: '12345', len: 5 })).to.equal('12345');
    expect(pad({ str: '12345', pad: '*', len: 6, dir: 'left' })).to.equal('*12345');

    expect(pad({ str: '1' })).to.equal('1');
    expect(pad({ str: '12', len: 2 })).to.equal('12');
    expect(pad({ str: '1', len: 5, pad: '-' })).to.equal('1----');
    expect(pad({ str: '1', len: 4, pad: '*', dir: 'left' })).to.equal('***1');
    expect(pad({ str: '1', len: 4, pad: '*', dir: 'both' })).to.equal('*1**');
  });

  it('test startsWith end containwith', () => {
    expect(startsWith('', '1')).to.be.false;
    expect(startsWith('1', '1')).to.be.true;
    expect(startsWith('12', '1')).to.be.true;

    expect(endsWith('', '1')).to.be.false;
    expect(endsWith('1', '1')).to.be.true;
    expect(endsWith('12', '2')).to.be.true;
    expect(containWith('', '1')).to.be.false;
    expect(containWith('1', '1')).to.be.true;
    expect(containWith('a1b', '1')).to.be.true;
  });
  it('isBlank', () => {
    expect(isBlank('')).to.be.true;
    expect(isBlank('    ')).to.be.true;
    expect(isBlank('  a  ')).to.be.false;
    expect(isBlank('    a')).to.be.false;
    expect(isBlank('a    ')).to.be.false;
    expect(isBlank('a1b')).to.be.false;
  });
  it('isPositiveInteger', () => {
    expect(isPositiveInteger('1')).to.be.true;
    expect(isPositiveInteger('-1')).to.be.false;
    expect(isPositiveInteger('a')).to.be.false;
    expect(isPositiveInteger('1.2')).to.be.false;
    expect(isPositiveInteger('1.2.23')).to.be.false;
    expect(isPositiveInteger('1234131')).to.be.true;
  });
});
