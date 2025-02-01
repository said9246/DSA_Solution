
let array=[1,2,3] 
let array1=[4,7,9,8]

function midenumber(array,array1) {
    let merge=[...array ,...array1]
  merge.sort((a,b)=>a-b)
  console.log(merge)
  
  let length=merge.length
  let mid=Math.floor(length/2)
  if (length%2!==0) {
    return merge[mid]
    
  }else{
    return (merge[mid - 1] + merge[mid]) / 2;
  }




}
console.log(midenumber(array,array1))