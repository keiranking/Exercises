// Implementing a linked list
class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
    // this.previous = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    // this.tail = null;
  }

  insert(node) {
    node.next = this.head;
    this.head = node;
  }
}

n1 = new Node("hello");
n2 = new Node("world");
l = new LinkedList();
l.insert(new Node("world"));
l.insert(new Node("Hello"));
n1.next = n2;
console.log(n1.data, n1.next.data, JSON.stringify(l));
