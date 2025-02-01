//Bubble sort

function Bubblesort(array) {
    
    for (let i = array.length; i >0; i--) {
        for (let j = 0; j < array.length; j++) {
            if (array[j]>array[j+1]) {
                let temp=array[j];;
                array[j]=array[j+1]
                array[j+1]=temp
            }
            
        }
        
        
        
    } 
    return array;
    
    }
    
    let array=[8,5,3,4,9,7,6];
     console.log(Bubblesort(array))