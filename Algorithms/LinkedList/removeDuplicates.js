LinkedList.prototype.removeDuplicates = function() {
    var current =  this.head;
    while (current.next != null) {
        if (current.data != current.next.data) {
                current = current.next;
         } else {
            current.next = current.next.next;
         }
    }
}