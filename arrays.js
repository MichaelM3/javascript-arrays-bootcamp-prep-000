var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var myArray = [1]
  extraArray = ["foo", ...myArray]
  return extraArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var myArray = [1]
  myArray.unshift('foo')
  return myArray
}

function addElementToEndOfArray(array, element) {
  var myArray = [1]
  extraArray = [...myArray, 'foo']
  return extraArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  var myArray = [1]
  myArray.push('foo')
  return myArray
}

function accessElementInArray(array, index) {
  var myArray = [1,2,3]
  return myArray[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var myArray = 
}