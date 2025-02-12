let array = [1, 9, 5, 4];

function runningSum(arr) {
    

    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            if (arr[j]>arr[j+1]) {
                let tem=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=tem  
                
            }
            
        }
    }
    let squre=arr.map(num=>num *num)

    return squre;
}

console.log(runningSum(array)); 
