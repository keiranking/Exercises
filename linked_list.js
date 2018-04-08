// Implementing a linked list
class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(node) {
    node.next = this.head;
    this.head = node;
  }

  del() {
    this.head = this.head.next;
  }

  display() {
    if (this.head) {
      let n = this.head;
      while (n) {
        console.log(n.data);
        n = n.next;
      }
    }
  }

  search(data) {
    if (this.head) {
      let n = this.head;
      while (n) {
        if (n.data == data) {
          return true;
        } else {
          n = n.next;
        }
      }
    }
    return false;
  }
}

let l = new LinkedList();
l.insert(new Node("world"));
l.insert(new Node("Hello"));
l.insert(new Node("This"));
console.log(JSON.stringify(l));
l.del();
console.log(JSON.stringify(l));
l.display();
console.log(l.search("world"));
console.log(l.search("globe"));
