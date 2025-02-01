
function binaryserch(array,target) {
    array.sort((a,b)=>a-b)
    console.log(array)

    let lr=0,up=array.length-1

    while (lr <= up) {
        let mid=Math.floor((lr +up)/2)

        if (array[mid]===target) {
            return mid;
            
        }
        if (array[mid]<target) {
            lr=mid +1;
            
        }else{
         
            up=mid-1;
            
        }
        
    }
    return -1;

    
}

let array = [3, 5, 6, 7, 5, 4, 0, 9];
let target = 4;
console.log(binaryserch(array, target));
