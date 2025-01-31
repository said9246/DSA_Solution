





function dubli(array) {
    if (array.length === 0) {
        return null; // or throw an error, or return Infinity, depending on your preference
    }
    let minval =array[0]
    let maxval=array[0]
 for (let i = 1; i < array.length; i++) {
    if ( array[i]<minval) {
        
       minval=array[i]

    }
    if ( array[i]>maxval) {
        
        maxval=array[i]
 
     }
    
 }

 
 return{ minval,maxval};
     
}

let num=[3,4,9,5,6,7,2,5]


console.log(dubli(num))