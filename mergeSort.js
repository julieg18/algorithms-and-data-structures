const mergeSort = (list) => {
  // O (n log n)

  if (list.length <= 1) {
    return list
  }

  const [leftHalf, rightHalf] = split(list)
  const left = mergeSort(leftHalf)
  const right = mergeSort(rightHalf)
  return mergeLists(left, right)
}

const split = (list) => {
  const midpointInd = Math.ceil(list.length / 2)
  const leftHalf = list.slice(0, midpointInd)
  const rightHalf = list.slice(midpointInd)
  return [leftHalf, rightHalf]
}

const mergeLists = (leftHalf, rightHalf) => {
  const list = []
  let leftInd = 0
  let rightInd = 0

  while (leftInd < leftHalf.length && rightInd < rightHalf.length) {
    const leftVal = leftHalf[leftInd]
    const rightVal = rightHalf[rightInd]

    if (leftVal < rightVal) {
      list.push(leftVal)
      leftInd++
    } else {
      list.push(rightVal)
      rightInd++
    }
  }

  while (leftInd < leftHalf.length) {
    list.push(leftHalf[leftInd])
    leftInd++
  }

  while (rightInd < rightHalf.length) {
    list.push(rightHalf[rightInd])
    rightInd++
  }

  return list
}

const list = [8, 6, 5, 9, 78, 888, 86, 10, 5, 82, 98]
console.log(mergeSort(list))
