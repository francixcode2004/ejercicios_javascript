class Persona{

    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    getNombre(){
        return this.nombre;
    }
    getEdad(){
        return this.edad;
    }    
    setNombre(newnombre){
        this.nombre=newnombre;
    }
    setEdad(newEdad){
        this.edad=newEdad;
    }
    saludar(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad}`)
    }
}
const persona1=new Persona("Francisco",20);
const persona2=new Persona("Mario",21);

persona1.saludar();
persona2.saludar();

persona1.setNombre("Maria");
persona1.setEdad("24");

persona1.saludar();