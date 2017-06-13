var Node = function(data) {
    this.data = data;
    this.next = null;
}

function LinkedList() {
    this.length = 0;
    this.head = null;
}

LinkedList.prototype.add = function(value) {
    var newNode = new Node(value);

    if (this.head === null) {
        this.head = newNode;
    } else {
        var currentNode = this.head;
        while (currentNode.next ) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }
    this.length++;
}

LinkedList.prototype.showList = function() {
    var currentNode = this.head;
     while (currentNode != null) {
        console.log(currentNode.data)
        currentNode = currentNode.next;
    }
}