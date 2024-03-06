function reorderList(head) {
    let slow = head, fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    };

    let prev = null, curr = slow, next = null;

    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    let l1 = head, l2 = prev;

    while (l2.next) {
        next = l1.next;
        l1.next = l2;
        l1 = next;

        next = l2.next;
        l2.next = l1;
        l2 = next;
    }
}
