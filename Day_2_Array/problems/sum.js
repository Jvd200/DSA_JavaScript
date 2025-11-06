/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const Output = [];

  for (i = 0; i < nums.length; i++) {
    let ans = 0;
    for (j = i; j >= 0; j--) {
      ans += nums[j];
    }
    Output.push(ans);
  }
  return Output;
};
