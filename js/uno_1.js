// let per= persona
// una funcion retorna un elemento,esuando la palabra "return"

class persona {
    constructor (nombre,edad,id){
        this.nombre= nombre,
        this.edad= edad,
        this.id=id
    }
    saludar() {
        console.log("hola");
    }
}

let personas =[]
for (let i = 0; i < 1; i++) {
    per= new persona();
    per.nombre=prompt("digite nombre ");
    per.edad=prompt("digite edad ");
    per.id=prompt("digite ID");
    personas.push(per.nombre, per.edad, per.id);
//     personas.push(per.edad);
//     personas.push(per.id);
    // personas.push(per)
}
console.log(personas);
per.saludar()