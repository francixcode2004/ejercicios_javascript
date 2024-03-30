//calcular el factorial
const factorial=(num)=>{
    if(num==0){
        console.log("No se puede calcular el factorial")
        return
    }else{
        let factorial=1
        for(let i=1;i<=num;i++){
            factorial*=i
        }
        return factorial
    }
    
}
const num=5
console.log("El factorial de %d es: %d",num,factorial(num))


