class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.arr = [];
    }

    append(value) {
        let created = new Node(value);
        if(this.head === null) {
            this.head = created;
            this.tail = created;
            this.arr.push(created);
        }
        else {
            this.tail.nextNode = created;
            this.tail = created;
            this.arr.push(created);
        }
    }

    prepend(value) {
        let created = new Node(value);
        if(this.head === null) {
            this.head = created;
            this.tail = created;
            this.arr.push(created);
        }
        else {
            created.nextNode = this.head;
            this.head = created;
            this.arr.unshift(created);
        }
    }

    size() {
        return this.arr.length;
    }

    at(index) {
        if(this.arr[index]) {
            return this.arr[index];
        }
        else {
            return null;
        }
    }

    pop() {
        this.arr.pop();
        if(this.arr.length === 0) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.arr[this.arr.length - 1].nextNode = null;
            this.tail = this.arr[this.arr.length - 1];
        }
    }

    contains(value) {
        for(let i = 0; i < this.arr.length; i++) {
            if(this.arr[i].value === value) {
                return true;
            }
        }
        return false;
    }

    find(value) {
        for(let i = 0; i < this.arr.length; i++) {
            if(this.arr[i].value === value) {
                return i;
            }
        }
        return null;
    }

    toString() {
        let result = "";
        for(let i = 0; i < this.arr.length; i++) {
            result += `( ${this.arr[i].value} ) -> `;
        }
        result += "null";
        return result;
    }

    insertAt(value, index) {
        let created = new Node(value);

        if(this.head === null) {
            this.head = created;
            this.tail = created;
            this.arr.splice(index, 0, created);
        }
        else {
            this.arr.splice(index, 0, created);
            if(index === 0) {
                this.head = created;
            }
            if(index === this.arr.length - 1) {
                this.tail = created;
            }
            if(this.arr[index-1]) {
                this.arr[index-1].nextNode = created;
            }
            if(this.arr[index+1]) {
                created.nextNode = this.arr[index+1];
            }
        }
    }

    removeAt(index) {
        if(this.arr[index]) {

            this.arr.splice(index, 1);

            if(this.arr.length === 0) {
                this.head = null;
                this.tail = null;
            }

            else if(index === 0) {
                this.head = this.arr[0];
            }

            else if(index === this.arr.length - 1) {
                this.tail = this.arr[this.arr.length - 1];
                this.arr[this.arr.length - 1].nextNode = null;
            }

            else {
                this.arr[index-1].nextNode = this.arr[index];
            }
        }
    }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());