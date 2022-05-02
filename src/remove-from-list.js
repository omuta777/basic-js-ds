const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
  class ListNode {
  constructor(x) {
  this.value = x;
  this.next = null;
  }
  }

  
function removeKFromList(l, k) {
if(l == null){
    return l;
}
while (l.value == k) {
    l = l.next;
}
thisNode = l;
nextNode = thisNode.next;
while (nextNode != null) {
    if (nextNode.value == k) {
        thisNode.next = nextNode.next;
        
        if (thisNode.next == null)
        break;
    }
    thisNode = thisNode.next;
    nextNode = thisNode.next;       
}
return l;
}
/*let node = l,
last;

if (node && node.value === k) {
return node.next;
}

while (node && node.value !==k) {
last = node,
node = node.next;
}
if (last && node.value === k) {
last.next = node.next;
}
return l;
}*/

/*class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return null;
    }

    let current = this.head;

    if (position === 0) {
      this.head = current.next;
    } else {
      let prev = null;
      let index = 0;

      while (index < position) {
        prev = current;
        current = current.next;
        index++;
      }

      prev.next = current.next;
    }

    this.length--;
    return current.value;
  }

  remove(element) {
    this.removeAt( this.indexOf(element) );
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === element) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }
}
function removeKFromList(l, k) {
  l.remove(k);
}*/

module.exports = {
  removeKFromList
};
