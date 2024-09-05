const quickSort = (list) => {
  // Runs in O(n^2) time

  if (list.length <= 1) {
    return list
  }

  const lessThanPivot = []
  const greaterThanPivot = []
  const pivot = list[0]
  for (const value of list.slice(1)) {
    if (value <= pivot) {
      lessThanPivot.push(value)
    } else {
      greaterThanPivot.push(value)
    }
  }
  return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanPivot)]
}

const sortedNumbers = quickSort([1, 7, 5, 10, 900, 640, 7])
