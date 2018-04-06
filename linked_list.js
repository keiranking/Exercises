// Implementing a linked list
class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
    // this.previous = null;
  }

}

n1 = new Node("hello");
n2 = new Node("world");
n1.next = n2;
console.log(n1.data, n1.next.data);
