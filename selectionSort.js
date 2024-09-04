const selectionSort = (list) => {
  // Runs in O(n^2) time
  const listLength = list.length
  const sortedList = []

  while (sortedList.length !== listLength) {
    let minInd = 0
    for (let i = 0; i < list.length; i++) {
      if (list[i] < list[minInd]) {
        minInd = i
      }
    }
    sortedList.push(...list.splice(minInd, 1))
  }

  return sortedList
}

const selectionSortWithOneArr = (list) => {
  // Runs in O(n^2) time

  for (let loopRuns = 0; loopRuns < list.length; loopRuns++) {
    minInd = 0
    for (let i = 0; i < list.length - loopRuns; i++) {
      if (list[i] < list[minInd]) {
        minInd = i
      }
    }
    list.push(...list.splice(minInd, 1))
  }

  return list
}

const sortedList = selectionSortWithOneArr([10, 6, 80, 70, 40])
