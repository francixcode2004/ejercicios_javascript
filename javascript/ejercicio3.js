console.log("Escribe tu nombre:");
const stdin = process.openStdin();

stdin.addListener("data", (data) => {
    console.log("Tu nombre es: " + data.toString());
    if (data==1){
        console.log("Fin del programa")
        process.exit();
    }
    
})