class Node {
  constructor(data) {
    this.data = data
    this.leftChild = null
    this.rightChild = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(data) {
    const newNode = new Node(data)

    if (this.root === null) {
      this.root = newNode
      return
    }

    this.insertNode(this.root, newNode)
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.leftChild === null) {
        node.leftChild = newNode
        return
      }
      return this.insertNode(node.leftChild, newNode)
    }

    if (node.rightChild === null) {
      node.rightChild = newNode
      return
    }

    this.insertNode(node.rightChild, newNode)
  }

  view(node, prefix = '', isLeft = true) {
    if (node === undefined) {
      node = this.root
    }

    if (node === null) {
      return
    }

    if (node.rightChild !== null) {
      this.view(node.rightChild, `${prefix}${isLeft ? '│   ' : '    '}`, false)
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`)
    if (node.leftChild !== null) {
      this.view(node.leftChild, `${prefix}${isLeft ? '    ' : '│   '}`, true)
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data)
  }

  removeNode(node, key) {
    if (node === null) {
      return null
    }

    if (key < node.data) {
      node.leftChild = this.removeNode(node.leftChild, key)
      return node
    }

    if (key > node.data) {
      node.rightChild = this.removeNode(node.rightChild, key)
      return node
    }

    if (node.leftChild === null && node.rightChild === null) {
      node = null
      return node
    }

    if (node.leftChild === null) {
      node = node.rightChild
      return node
    }

    if (node.rightChild === null) {
      node = node.leftChild
      return node
    }

    const minNode = this.findMinNode(node.rightChild)
    node.data = minNode.data

    node.rightChild = this.removeNode(node.rightChild, minNode.data)
    return node
  }

  findMinNode(node) {
    if (node.leftChild === null) {
      return node
    }

    return this.findMinNode(node.leftChild)
  }

  // getRootNode()
  // inorder(node)
  // preorder(node)
  // postorder(node)
}

const tree = new BinarySearchTree()
tree.insert(15)
tree.insert(14)
tree.insert(13)
tree.insert(12)
tree.insert(11)
tree.insert(10)
tree.insert(9)

tree.view()
