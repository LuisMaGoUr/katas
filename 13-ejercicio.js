/* Ejercicio 13

Buscador de nombres: Crea una función que reciba por parámetro un array
 y el valor que desea comprobar que existe dentro de dicho array - 
 comprueba si existe el elemento, en caso que existan nos devuelve un true y 
 la posición de dicho elemento y por la contra un false. 
Puedes usar este array para probar tu función: */

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function finderName(array, word) {
  let match = false;
  let position = -1;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === word) {
      match = true;
      position = index;
      return { match, position };
    } else {
      match = false;
    }
  }
  return { match, position };
}

const { match, position } = finderName(nameFinder, 'Jessica');
console.log(match);
console.log(position);

//ALTERNATIVA CON MÉTODOS:
/*   function finderName(array, element) {
    if (array.includes(element)) {
        return `${true}, posicion: ${array.indexOf(element)}`
    } else {
        return false;
    }
  }

  console.log(finderName(nameFinder, "Steve")) // true, posición 1 */
