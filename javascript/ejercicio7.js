// Función simulada para realizar una consulta al servidor
function consultarServidor() {
    return new Promise((resolve, reject) => {
        // Simulación de solicitud al servidor
        setTimeout(() => {
            const exito = Math.random() < 0.8; // 80% de éxito
            if (exito) {
                resolve("Datos obtenidos del servidor");
            } else {
                reject("Error al obtener datos del servidor");
            }
        }, 2000); // Retraso de 2 segundos
    });
}

// Función que utiliza async/await para manejar la solicitud al servidor
async function procesarSolicitud() {
    try {
        console.log("Iniciando solicitud...");
        const respuesta = await consultarServidor();
        console.log("Datos obtenidos:", respuesta);
        // Aquí puedes realizar más operaciones con los datos obtenidos
    } catch (error) {
        console.error("Error al procesar solicitud:", error);
        // Aquí puedes manejar el error de alguna manera
    }
}

// Llamada a la función que procesa la solicitud
procesarSolicitud();
