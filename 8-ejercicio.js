const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
let stringMasLargo = ''
function findLongestWord(param) {
  for (const element of param) {
    // console.log(element);
    if (element.length > stringMasLargo.length) {
      stringMasLargo = element
    }
  }
}
findLongestWord(avengers)
console.log(`El String más largo es ${stringMasLargo}`)
