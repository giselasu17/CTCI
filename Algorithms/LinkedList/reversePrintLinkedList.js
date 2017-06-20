LinkedList.prototype.reversePrint =  function() {
    if (this.length == 0) {
        console.log("List empty");
    } else {
        var previous = null;
        var temp = null;
        var currentNode = this.head;
        while(currentNode != null) {
            temp = currentNode.next;
            currentNode.next = previous;
            previous =  currentNode;
            currentNode = temp;
        }
        this.head = previous;
    }
}