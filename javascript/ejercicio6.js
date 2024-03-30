/*
Escribe una función en JavaScript llamada cargarUsuarios que simule la carga de datos de usuarios desde una API.
 La función debe retornar una promesa.

1 La función cargarUsuarios debe aceptar un parámetro url,
 que es la URL de la API ficticia de donde se cargarán los usuarios.
2 Dentro de la función, utiliza setTimeout para simular un retraso de la red.
 Este retraso debe ser de 2 segundos.
3 La promesa debe resolver con un objeto que simule ser la respuesta de la API. 
 Este objeto debe contener un campo usuarios que sea un arreglo de objetos, donde cada objeto represente a un usuario con al menos dos campos: id y nombre.
4 Si se invoca la función con una URL específica que consideres como "errónea" 
 (puedes definir cuál será esta URL de error), la promesa debe ser rechazada con un mensaje de error adecuado.
*/
function cargarUsuarios(url) {
    return new Promise((resolve, reject) => {
        // Simulación de carga de datos desde una API con un retraso de 2 segundos
        setTimeout(() => {
            if (url === "https://api.misitio.com/usuarios") {
                // Simulación de respuesta exitosa de la API
                const respuesta = {
                    usuarios: [
                        { id: 1, nombre: "Usuario 1" },
                        { id: 2, nombre: "Usuario 2" },
                        { id: 3, nombre: "Usuario 3" }
                    ]
                };
                resolve(respuesta);
            } else {
                // Simulación de error si la URL es incorrecta
                reject("Error: URL de la API incorrecta");
            }
        }, 2000); // Retraso de 2 segundos
    });
}

// Ejemplo de uso
cargarUsuarios("https://api.misitio.com/usuarios")
  .then(respuesta => {
    console.log(respuesta.usuarios); // Muestra los usuarios cargados
  })
  .catch(error => {
    console.error(error); // Maneja el caso de error
  });

