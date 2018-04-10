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

  del(data = null) {
    if (data) {
      let i = this.search(data);
      switch (i) {
        case -1:
          break;
        case 0:
          this.head = this.head.next;
          break;
        default:
          let n = this.head;
          for (let j = 0; j < i - 1; j++) {
            n = n.next;
          }
          if (n.next.next) {
            n.next = n.next.next;
          } else {
            n.next = null;
          }
      }
    } else {
      this.head = this.head.next;
    }
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
      let i = 0;
      while (n) {
        if (n.data == data) {
          return i;
        } else {
          n = n.next;
          i++;
        }
      }
    }
    return -1;
  }
}

let l = new LinkedList();
l.insert(new Node("world"));
l.insert(new Node("Hello"));
l.insert(new Node("list"));
l.insert(new Node("long"));
l.insert(new Node("a"));
l.insert(new Node("is"));
l.insert(new Node("This"));
console.log(JSON.stringify(l));
l.del();
console.log(JSON.stringify(l));
l.display();
console.log(l.search("world"));
console.log(l.search("globe"));
l.del("long");
l.del("is");
l.display();
