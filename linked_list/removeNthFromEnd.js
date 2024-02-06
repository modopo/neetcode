function removeNthFromEnd(head, n) {
    let pre = new ListNode();
    let p1 = pre, p2 = head;

    let len = 0;
    while (p2) {
        len++;
        p2 = p2.next;
    };

    len -= n;

    while (len > 0) {
        len--;
        p1 = p1.next;
    };

    p1.next = p1.next.next;
    return pre.next;
};

function makeRoom(head, n) {
    let pre = new ListNode(0, head);
    let p1 = pre, p2 = pre;

    for (let i = 0; i < n; i++) {
        p2 = p2.next;
    }

    while (p2.next) {
        p1 = p1.next;
        p2 = p2.next;
    };

    p1.next = p1.next.next;

    return pre.next;
};