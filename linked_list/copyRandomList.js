function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}

function copyRandomList(head) {
    if (!head) {
        return null;
    }

    let seen = new Map();
    let curr = head;

    while (curr) {
        seen.set(curr, new Node(curr.val));
        curr = curr.next;
    };

    curr = head;

    while (curr) {
        seen.get(curr).next = seen.get(curr.next) || null;
        seen.get(curr).random = seen.get(curr.random) || null;
        curr = curr.next;
    };

    return seen.get(head);
}
