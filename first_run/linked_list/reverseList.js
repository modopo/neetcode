function listNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
};

function reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr) {
        let next = curr.next;

        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return curr;
}