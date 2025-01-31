

function dublicate(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        
        if (i === 0 || array[i] !== array[i - 1]) {
            array[count] = array[i]; 
            count++;
        }
    }
    array.length = count; 
    return array; }

let num = [0, 3, 3, 4, 4, 5, 5];
console.log(dublicate(num)); // Output: [0, 3, 4, 5]
