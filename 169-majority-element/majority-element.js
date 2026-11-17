/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
let Frequency = 0
let ans = 0
for(let i = 0 ; i<nums.length ; i++){
    if(Frequency == 0){
       ans = nums[i] ;
    }
      if(nums[i] == ans){
       Frequency++ ;
    }
    else{
Frequency--
    }
   
}
 return ans
};