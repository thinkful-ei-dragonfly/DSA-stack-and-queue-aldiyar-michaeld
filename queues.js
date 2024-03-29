/* eslint-disable no-console */
/* eslint-disable strict */
'ust strict';

class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    // if queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function peek(queue) {
  if (queue.first === null) {
    return null;
  } else {
    return queue.first.value;
  }
}

function isEmpty(queue) {
  return queue.first === null;
}

function display(queue) {
  while (queue.first !== null) {
    console.log(queue.first.value);
    queue.first = queue.first.next;
  }
}

function main() {
  const startrekQ = new Queue();
  startrekQ.enqueue('Kirk');
  startrekQ.enqueue('Spock');
  startrekQ.enqueue('Uhura');
  startrekQ.enqueue('Sulu');
  startrekQ.enqueue('Checkov');

  startrekQ.dequeue();
  startrekQ.dequeue();

  console.log(display(startrekQ));
}

main();
