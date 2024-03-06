function middleNode(head) {
    let curr = head, count = 0;

    while (curr) {
        count++;
        curr = curr.next;
    };

    let mid = Math.floor(count / 2);

    for (let i = 0; i < mid; i++) {
        curr = curr.next;
    };

    return curr;
}