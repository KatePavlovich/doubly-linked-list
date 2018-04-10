const Node = require('./node');

class LinkedList {
    constructor() {
		this.length = 0;
		this._head = null;
		this._tail = null;
	}

    append(data) {
		var node = new Node(data);
 
    if (this.length) {
        this._tail.next = node;
        node.previous = this._tail;
        this._tail = node;
    } else {
        this._head = node;
        this._tail = node;
    }
 
    this.length++;
 
    return node;
	}

    head() {return this._head}

    tail() {
		var currentNode = this._head;
		if (currentNode==null){return null;}
		while (currentNode.next){
			currentNode=currentNode.next;
		}
		return currentNode;}

    at(index) {
		var currentNode = this._head,
        length = this.length,
        count = 1,
        message = {failure: 'Failure: non-existent node in this list.'};
 
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }

    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }
 
    return currentNode;
	}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
