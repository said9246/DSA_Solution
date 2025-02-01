function linearsearch(array,target) {
    
    for (let i = 0; i < array.length; i++) {
        if (array[i]===target) {
            return i;
        }
    }
    return -1;
    
    
}
let array=[3,4,5,2,8,6,5,4,]
let target=4;
console.log(linearsearch(array,target))