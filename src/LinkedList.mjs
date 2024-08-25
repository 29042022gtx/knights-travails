import Node from './Node.mjs';

class LinkedList {
  next = new Node();

  constructor() {
    this.next = null;
  }

  shift() {
    if (this.next == null) {
      return null;
    }
    const firstNode = this.next;
    this.next = firstNode.next;
    return firstNode;
  }

  pop() {
    let node = this;
    let prevNode = node;
    while (node.next != null) {
      prevNode = node;
      node = node.next;
    }
    prevNode.next = null;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.next;
    this.next = node;
  }

  append(value) {
    let lastNode = this;
    while (lastNode.next != null) {
      lastNode = lastNode.next;
    }
    lastNode.next = new Node(value);
  }

  size() {
    let s = 0;
    let node = this;
    while (node.next != null) {
      node = node.next;
      s += 1;
    }
    return s;
  }

  head() {
    return this.next;
  }

  tail() {
    let lastNode = this;
    while (lastNode.next != null) {
      lastNode = lastNode.next;
    }
    return lastNode;
  }

  at(index) {
    let node = this;
    let i = 0;
    while (i < index && node.next != null) {
      node = node.next;
      i++;
    }
    return node.next;
  }

  contains(value) {
    let node = this;
    while (node.next != null) {
      node = node.next;
      if (node.value == value) {
        return true;
      }
    }
    return false;
  }

  find(value) {
    let i = 0;
    let node = this;
    while (node.next != null) {
      node = node.next;
      if (node.value == value) {
        return i;
      }
      i++;
    }
    return null;
  }

  toString() {
    let node = this;
    let s = '';
    while (node.next != null) {
      node = node.next;
      s += `( ${node.value} ) -> `;
    }
    s += `null`;
    return s;
  }

  insertAt(value, index) {
    let i = 0;
    let preNode = this;
    while (i < index && preNode.next != null) {
      i += 1;
      preNode = preNode.next;
    }
    const newNode = new Node(value);
    const nextNode = preNode.next;
    newNode.next = nextNode;
    preNode.next = newNode;
  }

  removeAt(index) {
    let preNode = this;
    let node = this.next;
    let i = 0;
    while (i < index && node.next != null) {
      i += 1;
      preNode = node;
      node = node.next;
    }
    const nextNode = node.next;
    preNode.next = nextNode;
  }
}

export default LinkedList;
