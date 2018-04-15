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
		let node = new Node(data);
		let count=0;
		let currentNode=this._head;

		while(count<index){
			currentNode=currentNode.next;
			count++;
		}
		currentNode.previous.next=node;
		node.previous=currentNode.previous;
		currentNode.previous=node;
		node.next=currentNode;

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

	
    deleteAt(index) {
		let currentNode = this._head;
		let count = 0;		
	 
		while (count < index) {
			currentNode = currentNode.next;
			count++;
		}
	  	
		currentNode.previous.next=currentNode.next;
		currentNode.next.previous=currentNode.previous;
		currentNode=null;
 
		this.length--;
	}
	

    reverse() {
		let temp=this._head;
		
		this._head=this._tail;
		this._tail=temp;
		this._head.next=this._head.previous;
		let currentNode=this._head;
		this._tail.next=null;
		
		while (currentNode!==null) {
			//[currentNode.previous, currentNode.next]=[currentNode.next, currentNode.previous];
			

			
			temp = currentNode.next;
            currentNode.next = currentNode.previous;
            currentNode.previous = temp;
			currentNode=currentNode.next;
			
			   //next  = current->next;  //temporarily store the next node
			   //current->next = prev;    //now assign the prev!node to next of current node
			   //prev = current;   //update the previous pointer
			   //current = next;
			
			
			
		}		
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
