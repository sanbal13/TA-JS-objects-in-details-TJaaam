/* ************************ Stack ************************* */

class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack[this.stack.length] = value;
    }
    pop() {
        this.stack.splice(this.stack.length-1);
    }
    peek(index = this.stack.length-1) {
        console.log(this.stack[index]);
    }
    reverse() {
        let reverseStack = [];
        for(let i = this.stack.length-1; i >= 0; i--) {
            reverseStack.push(this.stack[i]);
        }
        this.stack = reverseStack;
        return reverseStack;
    }
    isEmpty() {
        return this.stack.length === 0;

    }
    displayStack() {
        for(let i = 0; i < this.stack.length; i++) {
            console.log(this.stack[i]);
        }
    }

    get length() {
        return this.stack.length;

    }
    set length(length) {
        this.stack.length = length;
    }

}

/* ************************ Queue ************************* */

class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(value) {
        this.queue[this.queue.length] = value;
    }
    dequeue() {
        let elem = this.queue[0];
        for(let i = 0; i < this.queue.length-1; i++) {
            this.queue[i] = this.queue[i+1];
        }
        this.queue.length = this.queue.length - 1;
        return elem;
    }
    peek(index = 0) {
        return this.queue[index];        
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    displayQueue() {
        console.log(this.queue);
    }

    get length() {
        return this.queue.length;
    }

    set length(length) {
        this.queue.length = length;
    }
}