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

  view() {
    this.viewNode(this.root)
  }

  viewNode(node, prefix = '', isLeft = true) {
    if (node === null) {
      return
    }

    if (node.rightChild !== null) {
      this.viewNode(
        node.rightChild,
        `${prefix}${isLeft ? '│   ' : '    '}`,
        false
      )
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`)
    if (node.leftChild !== null) {
      this.viewNode(
        node.leftChild,
        `${prefix}${isLeft ? '    ' : '│   '}`,
        true
      )
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

  viewPreorder() {
    this.preorderNode(this.root)
  }

  preorderNode(node) {
    // preorder traversal is from the root to the left subtree then to the right subtree
    if (node !== null) {
      console.log(node.data)
      this.preorderNode(node.leftChild)
      this.preorderNode(node.rightChild)
    }
  }

  viewPostorder() {
    this.postorderNode(this.root)
  }

  postorderNode(node) {
    // postorder traversal is from the left subtree to the right subtree then to the root
    if (node !== null) {
      this.postorderNode(node.leftChild)
      this.postorderNode(node.rightChild)
      console.log(node.data)
    }
  }

  viewInorder() {
    this.inorderNode(this.root)
  }

  inorderNode(node) {
    // inorder traversal is from the left subtree to the root then to the right subtree
    if (node !== null) {
      this.inorderNode(node.leftChild)
      console.log(node.data)
      this.inorderNode(node.rightChild)
    }
  }

  find(data) {
    return this.findNode(this.root, data)
  }

  findNode(node, data) {
    if (node === null) {
      return null
    }

    if (data < node.data) {
      return this.findNode(node.leftChild)
    }

    if (data > node.data) {
      return this.findNode(node.rightChild)
    }

    return node
  }
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(18)
tree.insert(8)
tree.insert(16)
tree.insert(17)
tree.insert(11)
tree.insert(9)
tree.insert(7)

tree.view()
