/**
 * Created by liguoxin on 2017/3/1.
 * @flow
 */
const chai = require('chai');
const { limit } = require('../lib/NumberUtils');

const { expect } = chai;
describe('Utils->NumberUtils', () => {

  it('test limit', () => {
    expect(limit(0, -1, 100)).to.equal(0);
    expect(limit(-1, -1, 100)).to.equal(-1);
    expect(limit(-2, -1, 100)).to.equal(-1);
    expect(limit(99, -1, 100)).to.equal(99);
    expect(limit(100, -1, 100)).to.equal(100);
    expect(limit(101, -1, 100)).to.equal(100);
  });

});
