class Node {
  constructor(data = null, nextNode = null) {
    this.data = data
    this.nextNode = nextNode
  }

  view() {
    return `<Node data: ${this.data}>`
  }

  setNextNode(node) {
    if (node === this) {
      throw new Error('Cannot set circular reference')
    }

    this.nextNode = node
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  isEmpty() {
    // Takes O(1)
    return this.head === null
  }

  getLength() {
    // Takes O(n) time
    let current = this.head
    let count = 0
    while (current) {
      count += 1
      current = current.nextNode
    }

    return count
  }

  unshift(data) {
    const newNode = new Node(data)
    newNode.nextNode = this.head
    this.head = newNode
  }

  view() {
    // Takes O(n) time
    const nodes = []
    let current = this.head

    while (current) {
      if (current === this.head) {
        nodes.push(`[Head: ${current.data}]`)
      } else if (current.nextNode === null) {
        nodes.push(`[Tail: ${current.data}]`)
      } else {
        nodes.push(`[${current.data}]`)
      }

      current = current.nextNode
    }

    return nodes.join('-> ')
  }

  find(key) {
    // Takes O(n) time
    let current = this.head

    while (current) {
      if (current.data === key) {
        return current
      } else {
        current = current.nextNode
      }
    }

    return undefined
  }

  findByIndex(index) {
    // Takes O(n) time
    let current = this.head
    let currentIndex = 0

    while (current) {
      if (index === currentIndex) {
        return current
      } else {
        current = current.nextNode
        currentIndex++
      }
    }

    return undefined
  }

  insert(data, index) {
    // inserting takes O(1) but finding the node
    // takes O(n). Thus, overall time is linear.
    if (index === 0) {
      const newNode = new Node(data)
      newNode.nextNode = this.head
      this.head = newNode
      return
    }

    const newNode = new Node(data)

    let position = index
    let current = this.head

    while (position > 1) {
      current = current.nextNode
      position--
    }

    const prevNode = current
    const nextNode = current.nextNode
    prevNode.nextNode = newNode
    newNode.nextNode = nextNode
  }

  remove(data) {
    // O(n)
    let current = this.head
    let previous = null
    let found = false

    while (current && !found) {
      if (current.data === data && current === this.head) {
        found = true
        this.head = current.nextNode
      } else if (current.data === data) {
        found = true
        previous.nextNode = current.nextNode
      } else {
        previous = current
        current = current.nextNode
      }
    }

    return current
  }

  removeByIndex(index) {
    // O(n)
    let current = this.head
    let currentIndex = 0
    let previous = null
    let found = false

    while (current && !found) {
      if (currentIndex === index && current === this.head) {
        found = true
        this.head = current.nextNode
      } else if (currentIndex === index) {
        found = true
        previous.nextNode = current.nextNode
      } else {
        previous = current
        current = current.nextNode
        currentIndex++
      }
    }

    return current
  }
}

const list = new LinkedList()
list.unshift(1)
list.unshift(2)
list.unshift(3)
list.unshift(4)
list.unshift(5)

module.exports = { LinkedList }
