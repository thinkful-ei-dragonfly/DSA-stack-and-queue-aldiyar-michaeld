/* eslint-disable strict */
class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data, null, null);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
      node.prev = this.last;
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

function main() {
  let testQ = new Queue();
  testQ.enqueue('Kirk');
  testQ.enqueue('Spock');
  testQ.enqueue('Uhura');
  testQ.enqueue('Sulu');
  testQ.enqueue('Checkov');

  console.log(testQ.first);
}

main();