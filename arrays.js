var chocolateBars = [
    'snickers',
    'hundred grand',
    'kitkat',
    'skittles'
];

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
        return
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
      return array.shift()
}

function destructivelyRemoveElementFromEndOfArray() {

}
