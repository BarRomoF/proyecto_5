class People{
    constructor( name, age, id){
    this._name;
    this._age;
    this._id
    }

    setName(name){
        this._name = name;
    }

    getName(){
        this._name = this._name
    }
    setAge(age){
        this._age = age;
    }
    getAge(){
        this._age = this._age

    }
    setId(id){
        this._id = id;
    }
    getId(){
        this._id = this._id

    }
    Saludar() {
        console.log("Hola rey")
    }

}

peo = People;

let personas=[];
for(let i = 0; i< 2; i++){
    peo = new People();
peo.name = prompt("Ingresa el nombre: ");
peo.age = prompt("Ingresa la edad: ");
peo.id = prompt("Ingresa el Id: ");
personas.push(peo);

}

for(let i = 0; i <= personas.length; i++){
}
console.log(personas);