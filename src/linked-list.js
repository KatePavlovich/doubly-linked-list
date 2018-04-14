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

	
    head() {
		return this._head.data
	}
	

    tail() {
		return this._tail.data;
	}

	
    at(index) {
		var Node = this._head,
        length = this.length,
        count = 0,
        message = {failure: 'Failure: non-existent node in this list-XAXAXA.'};
 
		if (length === 0 || index < 0 || index > length) {
			throw new Error(message.failure);
		}

		while (count < index) {
			Node = Node.next;
			count++;
		}
	 
		return Node.data;
	}

	
    insertAt(index, data) {
		var node = new Node(data);
	 
		if (this.length===index) {
			this._tail.next = node;
			node.previous = this._tail;
			this._tail = node;
		} 
		if (index===0){
			this._head = node;
			this._tail = node;
		}
		else {
			
		}
	 
		this.length++;
	 
		return node;
	}

	
    isEmpty() {
		return this._head===null && this._tail===null;
	}

    clear() {
		this.length=0;
		this._head.data = null;
		this._tail.data = null;
	}

	/*
	Let the node to be deleted is del.
1) If node to be deleted is head node, then change the head pointer to next current head.
2) Set next of previous to del, if previous to del exists.
3) Set prev of next to del, if next to del exists.
	*/
	
	
    deleteAt(index) {
		let currentNode = this._head;
		let length = this.length;
		let count = 0;
		const message = {failure: 'Failure: non-existent node in this list.'}
		let beforeNodeToDelete = null
		let nodeToDelete = null
		let deletedNode = null
	 
		// 1st use-case: an invalid position
		if (length === 0 || index < 0 || index > length) {
		  throw new Error(message.failure)
		}
		// 2nd use-case: the first node is removed
		if (index === 1) {
		  this._head = currentNode.next;
		  // 2nd use-case: there is a second node
		  if (!this._head) {
			this._head.previous = null
		  // 2nd use-case: there is no second node
		  } else {
			this._tail = null
		  }
		      // 3rd use-case: the last node is removed
    } else if (index === this.length) {
      this._tail = this._tail.previous
      this._tail.next = null
    // 4th use-case: a middle node is removed
    } else {
      while (count < index) {
        currentNode = currentNode.next
        count++
      }
      beforeNodeToDelete = currentNode.previous
      nodeToDelete = currentNode
      afterNodeToDelete = currentNode.next

      beforeNodeToDelete.next = afterNodeToDelete
      afterNodeToDelete.previous = beforeNodeToDelete
      deletedNode = nodeToDelete
      nodeToDelete = null
    }
 
    this.length--
    
    return message.success
  }

    reverse() {
		let temp;
		let currentNode=this._head;
		
		while (currentNode!==null) {
			//[currentNode.previous, currentNode.next]=[currentNode.next, currentNode.previous];
			temp = currentNode.previous;
            currentNode.previous = currentNode.next;
            currentNode.next = temp;
			currentNode=currentNode.previous;
		}
		 if (temp != null) {
            this._head = temp.previous;
        }
		//this._head.previous=null;
		//this._tail.next=null;
		
	}

	
    indexOf(data) {
		let index=0;
		let currentNode=this._head;
		
		while (currentNode!==null) {
			if(currentNode.data===data){return index;}
			currentNode=currentNode.next;
			index++;
		} 
		return -1;
	}
}

module.exports = LinkedList;
