/*
Lado 40

El area es 1600

El perímetro es 169
*/
const Area=(lado)=>{
    let area=Math.pow(lado,2) 
    return area
}
const Perimetro=(lado)=>{
    let perimetro=lado*4
    return perimetro
}
let lado=40
console.log("El area de un cuadrado es de: ", Area(lado))
console.log("El perimetro de un cuadrado es de: ", Perimetro(lado))
