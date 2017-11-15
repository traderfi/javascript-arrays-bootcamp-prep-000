var chocolateBars = [
    'snickers',
    'hundred grand',
    'kitkat',
    'skittles'
];

function destructivelyRemoveElementFromEndOfArray(array) {
   array.pop()
   return array
}

function removeElementFromBeginningOfArray(array) {
      var fix = array.slice()
      return fix
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
      return array.shift()
}

function addElementToBeginningOfArray (array,element) {
      return [element, ...array]
}

function addElementToEndOfArray (array,element) {

      return [...array, element]
}



function destructivelyAddElementToBeginningOfArray(array,element) {

    return array.unshift(element)
}



function destructivelyAddElementToEndOfArray (array,element) {
   array.push(element)
   return array
}

function accessElementInArray() {
      return
}

function removeElementFromEndOfArray(array) {
      return
}


