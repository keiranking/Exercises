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

  del() {
    this.head = this.head.next;
  }

  display() {
    this.print(this.head);
  }

  print(node) { // recursive helper function for display()
    if (node) { // test for empty list
      console.log(node.data);
      if (node.next) { // test for end of list
        this.print(node.next);
      }
    }
  }

  search(data) {
    return this.find(data, this.head);
  }

  find(data, node) { // recursive helper function for search()
    console.log("A", data, node.data);
    if (node) {
      console.log("B", data, node.data);
      if (node.data == data) {
        console.log("C", data, node.data);
        return true;
      } else if (node.next) {
        return find(data, node.next);
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
