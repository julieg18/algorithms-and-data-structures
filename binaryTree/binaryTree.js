class Node {
  constructor(data) {
    this.data = data
    this.leftChild = null
    this.rightChild = null
  }
}

const printTree = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return
  }
  if (node.rightChild !== null) {
    printTree(node.rightChild, `${prefix}${isLeft ? '│   ' : '    '}`, false)
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`)
  if (node.leftChild !== null) {
    printTree(node.leftChild, `${prefix}${isLeft ? '    ' : '│   '}`, true)
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  view() {}

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

  // remove(data)
  // findMinNode()
  // getRootNode()
  // inorder(node)
  // preorder(node)
  // postorder(node)
}

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(8)
tree.insert(11)
tree.insert(7)
tree.insert(9)
tree.insert(14)

printTree(tree.root)
