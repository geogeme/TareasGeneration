let btnEnviar= document.getElementById("btnEnviar");
let txtResult = document.getElementById("txtResult");

btnEnviar.addEventListener("click", function() {
        //adivinarNumero(Math.floor(Math.random() * 100) + 1, 0);
        adivinarNumero();
    }
)

function adivinarNumero() {
    let min = 1;
    let max = 100;
    let intentos = 0;
  
    while (true) {
      const numeroAdivinado = Math.floor((min + max) / 2);
      intentos++;
  
      const respuesta = prompt(`¿El número que estás pensando es ${numeroAdivinado}? Responde 'si', 'mayor' o 'menor'.`).toLowerCase();
  
      if (respuesta === 'si') {
        alert(`¡Adiviné el número ${numeroAdivinado} en ${intentos} intentos!`);
        break;
      } else if (respuesta === 'mayor') {
        min = numeroAdivinado + 1;
      } else if (respuesta === 'menor') {
        max = numeroAdivinado - 1;
      } else {
        alert('Respuesta no válida. Por favor, responde "si", "mayor" o "menor".');
      }
    }
  }




