let n=[1,3,4,3,2];

function dublicate(array) {
     
    array.sort((a,b)=>a-b)
    console.log(array)
    

    for (let i = 0; i < array.length-1; i++) {
      
        if (array[i]===array[i+1]) {
            return true;
            
        }
        
        
        
    }
    return false;

  
    

    
    
}

console.log(dublicate(n))




//------------------------------------------------
// function containsDuplicate(arr) {
//     let seen = new Set(); // Hash set to store unique elements
    
//     for (let num of arr) {
//         if (seen.has(num)) {
//             return true; // Duplicate found
//         }
//         seen.add(num);
//     }
//     return false;
// }

// const arr = [1, 2, 3, 4, 5, 6, 3]; // Example array

// if (containsDuplicate(arr)) {
//     console.log("Contains Duplicate");
// } else {
//     console.log("No Duplicates");
// }
