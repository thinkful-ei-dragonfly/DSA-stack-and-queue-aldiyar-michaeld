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
    return node.value;
  }
}

function peek(stack) {
  if (stack.top === null) {
    return null;
  } else {
    return stack.top.value;
  }
}

function isEmpty(stack) {
  return stack.top === null;
  // if (!stack.top) {
  //   console.log('Stack is empty');
  //   return true;
  // } else {
  //   console.log('Stack has items');
  //   return false;
  // }
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

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      console.log(`step ${i} push ${s[i]} to stack `);
      stack.push(s[i]);
    }else if (s[i] === ')') {
      console.log(`step ${i} pop ${s[i]} from stack`);
      const topOfTheList = peek(stack);

      if (!topOfTheList) {
        console.log('no match for `)`');
        return false;
      } stack.pop();
      
    }
  }

  if (peek(stack)) {
    console.log('no match for `(`');
    return false;
  }
  console.log('match');
  return true;

  // if (stack.top !== null) {
  //   console.log(`character #${s.length - 1}: has no matching closing )`);
  //   return false;
  // } else {
  //   console.log('All parentheses match');
  //   return true;
  // }
}


function sortStack(originalStack) {
  //4       //4
  //7       //5
  //5       //7
  //9       //9
  let newStack = new Stack();

  while (!isEmpty(originalStack)) {
    let temp = originalStack.pop();
    while (!isEmpty(newStack) && peek(newStack) > temp) {
      originalStack.push(newStack.pop());
    }
    newStack.push(temp);
  }
  while (!isEmpty(newStack)) {
    originalStack.push(newStack.pop());
  }

  // if (!originalStack.top) {
  //   console.log('Stack is empty');
  //   return originalStack;
  // }
  // while (originalStack.top !== null) {
  //   tempHolder = originalStack.pop();

  //   while (tempStack.top !== null && tempStack.top > tempHolder) {
      
  //   }
}










function main() {
  let original = new Stack();

  [34, 3, 31, 98, 92, 23].forEach(val => {
    original.push(val);
  })

  // sortStack(original);
  // display(original);




  // balanced('()()() (((');
  console.log(balanced('()('));
  console.log(balanced('())'));
  console.log(balanced('()()'));
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