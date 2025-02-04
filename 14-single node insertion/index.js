function createNode(data) {
    return { data: data, next: null };
}

function insert(head, val) {
    let newNode = createNode(val);
    if (!head.value) {
        head.value = newNode;
        return;
    }
    
    let temp = head.value;
    while (temp.next) {
        temp = temp.next;
    }
    temp.next = newNode;
}

function display(head) {
    let temp = head.value;
    console.log(temp)
    let output = "";
    while (temp) {
        output += temp.data + " -> ";
        temp = temp.next;
    }
    console.log(output + "NULL");
}

// Usage
let head = { value: null };

insert(head, 10);
insert(head, 20);
insert(head, 30);

display(head); // Output: 10 -> 20 -> 30 -> NULL  explain each line of the code