class Solution {
    public int minMoves(int[] nums) {
        int t=Arrays.stream(nums).max().getAsInt(),moves=0;
        for(int x:nums){
            moves+=t-x;
        }
        return moves;
    }
}