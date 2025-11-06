/** [LeetCode 1578}
 *
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
  let out = 0;

  for (i = 0; i < colors.length; i++) {
    if (colors[i] === colors[i - 1]) {
      out += Math.min(neededTime[i], neededTime[i - 1]);
      //keep neededTime next needed time

      neededTime[i] = Math.max(neededTime[i], neededTime[i - 1]);
    }
  }
  return out;
};
