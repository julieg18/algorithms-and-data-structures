const linearSearch = (list, target) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      return i
    }
  }
  return null
}

const verify = (index) => {
  if (index !== null) {
    console.log(`Target found at index: ${index}`)
  } else {
    console.log('Target not found in list')
  }
}

const result = linearSearch([1, 2, 3, 4, 5], 7)
