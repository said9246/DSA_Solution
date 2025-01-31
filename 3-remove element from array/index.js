function dubli(array,target) {
    let count =0
 for (let i = 0; i < array.length; i++) {
    if ( array[i]!==target) {
        
        array[count]=array[i]
        count ++;

    }
    
 }

 
 return array;
     
}

let num=[1,1,3,4,3,5,6,8]

console.log(dubli(num,3))