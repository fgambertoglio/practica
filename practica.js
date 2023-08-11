/* Array */

const misFrutas = [`Anana`, `Manzana`, `Pera`, `Banana`, `Naranja`];

/* ========== 0.1 Arrays ==========*/
console.log(`========== 0.1 Arrays ==========`);
/* console log para mostrar pera */
console.log(misFrutas[2]);

/* ========== 0.2 Prompt ========== */
console.log(`========== 0.2 Prompt ==========`);
/* Prompt para pedir edad */
let edad = Number(prompt(`Ingrese su edad`));

/* Console para mostrar la edad ingresada + 10 */
console.log(`en 10 años tendras ` + (edad + 10));

/* ========== 0.3 If - Else If - Else ========== */
console.log(`========== 0.3 If - Else If - Else ==========`);

if (edad < 18) {
  console.log(`no puedes entrar al sistema`);
} else if (edad >= 18 || edad < 21) {
  console.log(`necesitas verificacion por tarjeta de credito`);
} else if (edad >= 21) {
  console.log(`puedes ingresar sin problemas`);
}
/* funcion para mostrar array */
function lista(array) {
  array.forEach((element) => {
    console.log(element);
  });
}

console.log(`========== primera lista ==========`);
/* primera ejecucion para mostrar la lista sin agregados */
lista(misFrutas);

console.log(`========== segunda lista ==========`);

misFrutas.push("Uva", "Sandia", "Melon");

/* segunda ejecucion para mostrar la lista con agregados */
lista(misFrutas);

console.log(`========== otra opcion ==========`);
for (i = 0; i < misFrutas.length; i++) {
  console.log(misFrutas[i]);
}
