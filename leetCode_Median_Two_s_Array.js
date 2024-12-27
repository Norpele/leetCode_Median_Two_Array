/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let allArray = [...nums1,...nums2];
    
    allArray.sort((a,b) => a - b);

    let n = allArray.length;

    if(n % 2 === 0){
        return (allArray[n / 2 - 1] + allArray[n / 2]) / 2;
    } else { 
        return allArray[Math.floor(n / 2)];
    }
    
};
