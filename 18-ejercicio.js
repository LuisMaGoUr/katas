/* Ejercicio 18

Probando For: Usa un bucle for para recorrer todos los destinos 
del array y elimina los elementos que tengan el id 11 y 40. 
Imprime en un console log el array. Puedes usar este array: */

const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
];

for (let index = 0; index < placesToTravel.length; index++) {
  const element = placesToTravel[index];
  if (element.id === 11 || element.id === 40) {
    delete element.id;
    delete element.name;
  }
}
console.log(placesToTravel);

//ALTERNATIVA:
/* Utilizamos el método splice para eliminar el dato elegido y además usamos el i-- para "neutralizar" el i++ del bucle por defecto y comprobar de nuevo la misma posición eliminada (esto lo hacemos por si acaso hubiese dos elementos seguidos con el mismo id)

for (let i = 0; i < placesToTravel.length; i++) {
    
    if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
        placesToTravel.splice(i, 1);
        i--;
    }
    
}

console.log(placesToTravel); */
