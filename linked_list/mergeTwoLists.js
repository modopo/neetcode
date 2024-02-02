function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

function mergeTwoListsR(list1, list2) {
    if (list1 === null) {
        return list2;
    } else if (list2 === null) {
        return list1;
    }

    if (list1.val < list2.val) {
        list1.next = mergeTwoListsR(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
}

function mergeTwoLists(list1, list2) {
    let result = new ListNode();
    let prev = result;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            prev.next = list1;
            list1 = list1.next;
        } else {
            prev.next = list2;
            list2 = list2.next;
        }

        prev = prev.next;
    };

    prev.next = list1 ? list1 : list2;

    return result.next;
};
