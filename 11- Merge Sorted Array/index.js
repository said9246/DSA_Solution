

function msorted(array,array1) {
    let merge =[...array, ...array1]
    

    for (let i = 0; i < merge.length-1; i++) {
        for (let j = 0; j < merge.length-1-i; j++) {
            if (merge[j+1]<merge[j]) {
                let temp=merge[j]
                merge[j]=merge[j+1]
                merge[j+1]=temp
            }
            
        }      
        
    }

    let result=[]
    for (let i = 0; i < merge.length; i++) {
        if (merge[i]!==0) {
            result.push(merge[i])
            
        }
        
    }
    return result
    
    
}



let array = [8, 5, 3, 4, 9, 7, 6];
let array1 = [1,2,3,0,0,0];
console.log(msorted(array,array1))