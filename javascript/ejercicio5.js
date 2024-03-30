/*

Enunciado: Crea una función en JavaScript que reciba una cadena de texto como 
argumento y devuelva un objeto que contenga la cantidad de veces que aparece cada palabra en la cadena. 
La función debe ignorar diferencias entre mayúsculas 
y minúsculas y debe filtrar palabras comunes en español como "y", "e", "de", "a", "en", etc.
 */
function contarRepeticiones(texto) {
    let palabras = texto.toLowerCase().split(/\W+/);
    let frecuencias = {};

    for (let palabra of palabras) {
        if (palabra) { // Esto evita contar strings vacíos que pueden aparecer.
            frecuencias[palabra] = (frecuencias[palabra] || 0) + 1;
        }
    }

    for (let palabra in frecuencias) {
        console.log(`${palabra}: ${frecuencias[palabra]}`);
    }
}

const texto = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.";

contarRepeticiones(texto);
