function insertion(queue, n, rear, item) {
    if (rear === n - 1) {  // Check if the queue is full
        console.log("Queue is full");
    } else {
        rear++;              // Increment rear
        queue[rear] = item;  // Insert item at rear
    }
    return rear;            // Return the updated rear index
}

// Example usage
const n = 5;               // Maximum size of the queue
let queue = new Array(n);  // Queue array
let rear = -1;             // Initialize rear

rear = insertion(queue, n, rear, 10);
rear = insertion(queue, n, rear, 20);

// Print queue elements
for (let i = 0; i <= rear; i++) {
    console.log(queue[i]);  // Output the queue elements
}
