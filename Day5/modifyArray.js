/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */

function modifyArray(nums) {
    // let result;

    // for(let i = 0; i < nums.length; i++) {
    //     if(nums[i] % 2 === 0) {
    //         nums[i] = nums[i] * 2;
    //     } else {
    //         nums[i] = nums[i] * 3;
    //     }
    //     result = nums;
    // }

    // return result;
    return (nums || []).map(num => num * (num % 2 === 0 ? 2 : 3));
}

console.log(modifyArray([1,2,3,4,5,6]));