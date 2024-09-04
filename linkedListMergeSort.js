const { LinkedList } = require('./linkedList')

const mergeSort = (linkedList) => {
  // Runs in O(kn log n)
  if (linkedList.getLength() === 1 || !linkedList.head) {
    return linkedList
  }

  const [leftHalf, rightHalf] = split(linkedList)
  const left = mergeSort(leftHalf)
  const right = mergeSort(rightHalf)

  return mergeLinkedLists(left, right)
}

const split = (linkedList) => {
  // Runs in O(k log n) time
  if (!linkedList || !linkedList.head) {
    return [linkedList, null]
  }

  const midpointInd = Math.ceil(linkedList.getLength() / 2)
  const midpointNode = linkedList.findByIndex(midpointInd - 1)
  let leftHalf = linkedList
  let rightHalf = new LinkedList()
  rightHalf.head = midpointNode.nextNode
  midpointNode.setNextNode(null)

  return [leftHalf, rightHalf]
}

const mergeLinkedLists = (leftHalf, rightHalf) => {
  // Runs in O(n) time
  const mergedList = new LinkedList()

  mergedList.unshift(0)

  let current = mergedList.head

  let leftHead = leftHalf.head
  let rightHead = rightHalf.head

  while (leftHead || rightHead) {
    if (!leftHead) {
      current.setNextNode(rightHead)
      rightHead = rightHead.nextNode
    } else if (!rightHead) {
      current.setNextNode(leftHead)
      leftHead = leftHead.nextNode
    } else {
      const leftData = leftHead.data
      const rightData = rightHead.data

      if (leftData < rightData) {
        current.setNextNode(leftHead)
        leftHead = leftHead.nextNode
      } else {
        current.setNextNode(rightHead)
        rightHead = rightHead.nextNode
      }
    }

    current = current.nextNode
  }

  const head = mergedList.head.nextNode
  mergedList.head = head

  return mergedList
}

const list = new LinkedList()
list.unshift(80)
list.unshift(100)
list.unshift(50)
list.unshift(90)

const sortedList = mergeSort(list)
