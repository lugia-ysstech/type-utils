/**
 * Created by liguoxin on 2017/3/10.
 * @flow
 */
const Benchmark = require('benchmark');
const { limit } = require('../lib/NumberUtils');
const suite = new Benchmark.Suite();


suite.add('NumberUtils#test', function () {
  limit(101, 0, 100);
}).on('cycle', function (event) {
  console.log(String(event.target));
}).run({ async: true });
