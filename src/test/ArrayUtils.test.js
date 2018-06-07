/**
 * Created by liguoxin on 2017/3/1.
 * @flow
 */
const chai = require('chai');
const { toArray } = require('../lib/ArrayUtils');

const { expect } = chai;
describe('Utils->ArrayUtils', () => {

  it('toArray', () => {
    expect(toArray()).to.eql([]);
    expect(toArray(0)).to.eql([ 0 ]);
    expect(toArray(null)).to.eql([]);
    expect(toArray(1)).to.eql([ 1 ]);
    expect(toArray([ 1, 2 ])).to.eql([ 1, 2 ]);
    expect(toArray([])).to.eql([]);
    expect(toArray('1')).to.eql([ '1' ]);

  });

  it('toArray for arguments', () => {
    function func() {
      expect(toArray(arguments)).to.eql([ 1, 2, 3, 4, 5 ]);
    }

    func(1, 2, 3, 4, 5);
  });

});
