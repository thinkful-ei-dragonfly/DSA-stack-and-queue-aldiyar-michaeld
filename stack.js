/* eslint-disable no-console */
/* eslint-disable strict */
'ust strict';

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
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let stack = new Stack();

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    stack.push(char);
  }

  let reversedString = '';
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

function balanced(s) {

  let stack = new Stack();
  let last = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      console.log(`step ${i} push ${s[i]} to stack `);
      stack.push(s[i]);
    }

    if (s[i] === ')') {
      console.log(`step ${i} pop ${s[i]} from stack`);
      last = stack.pop();
      if (last === '(' && s[i] !== ')') {
        return i;
      }
    }
  }
  if (stack.top !== null) {
    console.log(`character #${s.length - 1}: has no matching closing )`);
  } else {
    console.log('All parentheses match');
  }
}

function main() {
  balanced('()()() (()) ()');
  // const starTrek = new Stack();
  // starTrek.push('Kirk');
  // starTrek.push('Spock');
  // starTrek.push('McCoy');
  // starTrek.push('Scotty');
  // starTrek.pop();
  // starTrek.pop();

  // console.log(starTrek);
  // console.log(peek(starTrek));
  // console.log(isEmpty(starTrek));
  // display(starTrek);

  // True, true, true, false
  // is_palindrome('lasd asfkm iwjodm ,,,,,')
  // console.log(is_palindrome("dad"));
  // console.log(is_palindrome("A man, a plan, a canal: Panama"));
  // console.log(is_palindrome("1001"));
  // console.log(is_palindrome("Tauhida"));
}

main();
