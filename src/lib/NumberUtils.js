/**
 * Created by liguoxin on 2017/3/6.
 * @flow
 */
module.exports = {
  limit (value: number, min: number, max: number) {
    const result = value > min ? value : min;
    return result < max ? result : max;
  },
};
