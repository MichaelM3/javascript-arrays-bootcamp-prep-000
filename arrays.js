var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var myArray = [1]
  extraArray = ["foo", ...myArray]
  return extraArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  list.unshift(extra)
  return list
}

function addElementToEndOfArray(array, element) {
  var myArray = [1]
  extraArray = [...myArray, 'foo']
  return extraArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  myArray = [1]
  myArray.push('foo')
  return myArray
}

function accessElementInArray(array, index) {
  var myArray = [1, 2, 3]
  return myArray[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var myArray = [1, 2, 3]
  myArray.shift()
  return myArray
}

function removeElementFromBeginningOfArray(array) {
  var myArray = [1, 2, 3]
  var extraArray = myArray.slice(1)
  return extraArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var myArray = [1, 2, 3]
  myArray.pop()
  return myArray
}

function removeElementFromEndOfArray(array) {
  var myArray = [1, 2, 3]
  extraArray = myArray.slice(0, myArray.length -1)
  return extraArray
}