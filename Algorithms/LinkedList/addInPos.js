LinkedList.prototype.addInPos = function(pos, value) {
    var newNode = new Node(value);
    if (pos === 0) {
        newNode.next = this.head;
        this.head = newNode;
    } else {
        var currentNode = this.head;
        var previous = null;
        var currentpos = 0;
        while (currentpos != pos) {
            previous = currentNode;
            currentNode = currentNode.next;
            currentpos ++;
        }
        newNode.next = previous.next;
        previous.next = newNode;
    }
    this.length ++;
}