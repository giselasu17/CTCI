LinkedList.prototype.countElemEqual =  function(value) {
    var newNode = new Node(value);
    var count = 0;
    var currentNode = this.head;
    while (currentNode) {
        if (currentNode.data == element) {
            count++;
        }
        currentNode = currentNode.next;
    }
    return count;
}