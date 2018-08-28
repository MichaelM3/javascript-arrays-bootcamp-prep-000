var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  extraArray = ["foo", ...array]
  return extraArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift('foo')
  return array
}

function addElementToEndOfArray(array, element) {
  extraArray = [...array, 'foo']
  return extraArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push('foo')
  return array
}

function accessElementInArray(array, index) {
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var extraArray = array.slice(1)
  return extraArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  var myArray = [1, 2, 3]
  extraArray = myArray.slice(0, myArray.length -1)
  return extraArray
}