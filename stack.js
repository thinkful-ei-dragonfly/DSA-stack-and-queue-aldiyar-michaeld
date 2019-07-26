/* eslint-disable strict */
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}
function peek(stack) {
  if (!stack.top) {
    return 'Stack is empty';
  } else {
    return stack.top.value;
  }
}

function isEmpty(stack) {
  if (!stack.top) {
    console.log('Stack is empty');
    return true;
  } else {
    console.log('Stack has items');
    return false;
  }
}

function display(stack) {
  while (stack.top !== null) {
    console.log(stack.top.value);
    stack.top = stack.top.next;
  }
}

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let stack = new Stack();

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    stack.push(char);
  }

  let reversedString = ''
  while (stack.top !== null) {
    reversedString += stack.top.value;
    stack.top = stack.top.next;
  }

  if (s === reversedString) {
    console.log('String is palindrome');
    return true;
  } else {
    console.log('String is not palindrome');
    return false;
  }
  
}


function main() {
  const starTrek = new Stack();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  starTrek.pop();
  starTrek.pop();
  

  is_palindrome('lasd asfkm iwjodm ,,,,,')

  // console.log(starTrek);
  // console.log(peek(starTrek));
  // console.log(isEmpty(starTrek));
  // display(starTrek);

  // True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));
}

main();