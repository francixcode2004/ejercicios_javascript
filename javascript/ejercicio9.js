/*
Escribe una funcion para poder leer el archivo bd.txt 
y muestra el resulatdo en formato
nombres:     apellidos:
utiliza promesas
*/

const fs = require('fs');
const archivo = "bd.txt";
const nombresbd=[
    "Juan Pérez",
    "María García",
    "Carlos Martínez",
    "Ana Rodríguez",
    "Pedro López",
    "Laura Sánchez",
    "Diego González",
    "Elena Fernández",
    "Andrés Ruiz",
    "Sofía Díaz"
]
function escribirArchivo(nombresbd, archivo) {
    fs.writeFileSync(archivo, nombresbd.join('\n'));
    console.log("Archivo creado con éxito.");
}
function mostrarArchivo(archivo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fs.existsSync(archivo) === false) {
                escribirArchivo(nombresbd,archivo);
                resolve(leerArchivo());
            } else {
                resolve(leerArchivo());
            }
        }, 2000);
    });
}

function leerArchivo() {
    let data = fs.readFileSync(archivo, 'utf8');
    return data;
}

mostrarArchivo(archivo)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
