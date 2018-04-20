const Node = require('./node');

class LinkedList {
    constructor() {
		this.length = 0;
		this._head = null;
		this._tail = null;
	}

    append(data) {
		let node = new Node(data);
	 
		if (this.length) {
			this._tail.next = node;
			node.previous = this._tail;
			this._tail = node;
		} else {
			this._head = node;
			this._tail = node;
		}
	 
		this.length++;
		return this;
	}

	
    head() {
		return this._head.data;
	}
	

    tail() {
		return this._tail.data;
	}

	
    at(index) {
		let currentNode = this._head,
        length = this.length,
        count = 0;
 
		if (length === 0 || index < 0 || index > length) {
			throw new Error;
		}

		while (count < index) {
			currentNode = currentNode.next;
			count++;
		}
	 
		return currentNode.data;
	}

	
    insertAt(index, data) {
		let node = new Node(data);

		
		if (!this._head) {
			this._head = node;
			this._tail = node;
			this.length++;
			return this;
		}
		
		if (index===0) {
			node.next=this._head;
			this._head.previous = node;
			return this;
		}
		let count=0;
		let currentNode = this._head;
		while(count<index){
			currentNode=currentNode.next;
			count++;
		}
		currentNode.previous.next=node;
		node.previous=currentNode.previous;
		currentNode.previous=node;
		node.next=currentNode;

		this.length++;
		return this;
	}

	
    isEmpty() {
		return this._head===null && this._tail===null;
	}

    clear() {
		this._head = null;
		this._tail = null;
		this.length = 0;
		return this;
	}

	
    deleteAt(index) {
		let currentNode = this._head;
		let count = 0;		
		
		if (currentNode===null || index===null) {return;}
		
		if(index===0 && this.length===1){ 
			this._tail=null;  
			this._head=null; 
			this.length=0; 
			return this; 
		}
		
		if (index===0) {
			this._head=this._head.next;
			this._head.previous=null;
			this.length--;
			return this;
		}
		
		while (count < index) {
			currentNode = currentNode.next;
			count++;
		}
	  	
		currentNode.previous.next=currentNode.next;
		currentNode.next.previous=currentNode.previous;
		currentNode=null;
 
		this.length--;
		return this;
	}
	

    reverse() {
		let currentNode=this._head;
		let temp=null;
		let temp2=this._head;
				
		//console.log(this._head, this._tail);

		if (this._head===null){return null;}
	
		while (currentNode!==null) {
			temp = currentNode.previous;
            currentNode.previous = currentNode.next;
            currentNode.next = temp;
            currentNode = currentNode.previous;
		}
		if (temp != null) {
            this._head = temp.previous;
        }
		this._tail=temp2;
		this._tail.next=null;
		return this;
		//console.log(this._head, this._tail);
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
