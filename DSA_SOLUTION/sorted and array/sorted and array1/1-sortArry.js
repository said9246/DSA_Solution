// let nums = [5, 2, 3, 1];

// for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length - 1 - i; j++) { // Corrected condition
//         if (nums[j] > nums[j + 1]) { 
//             // Swap elements
//             let temp = nums[j];
//             nums[j] = nums[j + 1];
//             nums[j + 1] = temp;
//         }
//     }
// }


 let nums =[4,3,5,7,8,7,2,3,1]

for (let i = 0; i < nums.length-1; i++) {
    for (let j = 0; j < nums.length-1-i; j++) {
       if (nums[j]>nums[j+1]) {
        let tem=nums[j]
        nums[j]=nums[j+1]
        nums[j+1]=tem
        
       }
        
    }
    
}
console.log(nums); // Output: [1, 2, 3, 5]