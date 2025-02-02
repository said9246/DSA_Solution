//selection sort

function selectionsort(array) {

    for (let i = 0; i < array.length - 1; i++) {

        let index = i; //2

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[index]) {
                index = j
            }

        }
        if (index !== i) {
            let temp = array[i]
            array[i] = array[index]
            array[index] = temp

        }

    }
    return array

}

let array = [8, 5, 3, 4, 9, 7, 6];
console.log(selectionsort(array))