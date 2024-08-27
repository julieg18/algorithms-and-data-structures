const recursiveBinarySearch = (list, target) => {
  if (list.length === 0) {
    return false
  }

  let midpoint = Math.floor(list.length / 2)

  if (list[midpoint] === target) {
    return true
  }

  if (list[midpoint] < target) {
    return recursiveBinarySearch(list.slice(midpoint + 1), target)
  }

  return recursiveBinarySearch(list.slice(0, midpoint), target)
}

const verify = (index) => {
  if (index) {
    console.log('Target found')
  } else {
    console.log('Target not found in list')
  }
}

const result = recursiveBinarySearch([1, 2, 3, 4, 5], 68)
