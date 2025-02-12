let arr=[0,1,0,3,0,8,9,3,5,12]

function movezero(array) {
    let result=[]
    let zerocount=0;

    for (let i = 0; i < array.length; i++) {
        if (array[i]!==0) {
            result.push(array[i])
        }else{
            zerocount ++;
            
        }
        
        
    }

    for (let i = 0; i < zerocount; i++) {
        result.push(0);
        
    }
    return result;

    
    
}

console.log(movezero(arr))