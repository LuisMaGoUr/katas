const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumAll(param) {
  let suma = 0
  for (const element of param) {
    suma = suma + element
  }
  return suma
}
let result = sumAll(numbers)
console.log(result)
