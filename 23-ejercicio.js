/* Ejercicio 23

Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola. */

const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Titan 2.', durationInMinutes: 80 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]
const peliPeque = [];
const peliMedi = [];
const peliGrande = [];


for (let i = 0; i < movies.length; i++) {
  const element = movies[i];
  if (element.durationInMinutes < 100 ) {
    peliPeque.push(element);
  
  } else if (element.durationInMinutes >= 100 && element.durationInMinutes <=200 ) {
    peliMedi.push(element);
    
  } 
  else{
    peliGrande.push(element);
  }
}
console.log('Peliculas pequeñas');
console.log('-------------------');
console.log(peliPeque);

console.log('Peliculas medianas');
console.log('-------------------');
console.log(peliMedi);

console.log('Peliculas grandes');
console.log('-------------------');
console.log(peliGrande);
