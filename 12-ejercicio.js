/* Ejercicio 12

Valores únicos: Crea una función que reciba por parámetro un array
 y compruebe si existen elementos duplicados, en caso que existan 
 los elimina para retornar un array 
 sin los elementos duplicados. Puedes usar este array para probar tu función:

pista (cuando eliminamos algo de un array, su longitud se verá afectada) */

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
          if (array[i] === array[j]) {
            array.splice(i, 1);
            
          }
        }
      }
      
      
  }

removeDuplicates(duplicates);
  console.log(duplicates);

  
  