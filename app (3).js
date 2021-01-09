// Arrays Method
let array = [1, 2, 3, 4, 7, 8, 9];
let array2 = [1, 'hi', {name: 'mamareza'}, [2,3,4,5]]

// change Value
array[4] = 5
array[5] = 6
array[6] = 7

// array.isArray
let log = Array.isArray(array)

// length
log = array.length

// indexof
log = array.indexOf(4)

// push
array.push(8, 9, 10)

// pop
array.pop()

// unshift
array.unshift(0)

// shift
array.shift()

// splice
// array.splice(0, 2 )
array.splice(3, 2)
array.splice(3, 0, 4 , 5)


console.log(array)
console.log(log)