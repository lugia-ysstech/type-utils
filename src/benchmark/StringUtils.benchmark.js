/**
 * Created by liguoxin on 2017/3/10.
 * @flow
 */
const Benchmark = require('benchmark');
const { strlen, truncate, pad } = require('../lib/StringUtils');
const suite = new Benchmark.Suite();


suite.add('StringUtils#strlen', function () {
  strlen('[34mB[39m');
}).add('StringUtils#truncate', function () {
  truncate('ABCD', 2);
}).add('StringUtils#pad', function () {
  pad({ str: '1', len: 4, pad: '*', dir: 'both' });
})
.on('cycle', function (event) {
  console.log(String(event.target));
})
.run({ async: true });
