let jewels = "aA"; 
let stones = "aAAbbbb";

function numJewelsInStones(jewels, stones) {
    let count = 0;

    // Loop through each stone
    for (let stone of stones) {
        if (jewels.includes(stone)) { // Check if the stone exists in jewels
            count++;
        }
    }

    return count;
}

console.log(numJewelsInStones(jewels, stones)); // Output: 3
