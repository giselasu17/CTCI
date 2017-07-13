LinkedList.prototype.deleteNodeInPos = function(pos) {
   if (pos < 0 || pos > this.length) {
        console.log("Index out of range");
   } else {
        var currentNode = this.head;
        var previous = null;
        var count = 0;
        if (pos == 0) {
            this.head = currentNode.next;
        } else {
            while(count != pos) {
                previous = currentNode;
                currentNode = currentNode.next;
                count ++;
            }
            previous.next = currentNode.next;
        }
        this.length --;
    } 
}