var chocolateBars = [
    'snickers',
    'hundred grand',
    'kitkat',
    'skittles'
];

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
    return array.push(element)
}

function accessElementInArray() {

}

function removeElementFromEndOfArray(array) {
        var fix = array
        return fixpop()
}



function destructivelyRemoveElementFromEndOfArray() {
    return
}
