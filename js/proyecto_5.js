class Serie {
     constructor( duracion,nombreSeRi,){
          this.duracion=("30mn");
          this.nombreSeRi;
     }
}

class Genero extends Serie
{
     constructor( duracion,nombreSeRi,romantica,accion,cienciaFiccion,terror){
          super(duracion,nombreSeRi)
          this.romantica;
          this.accion;
          this.cienciaFiccion;
          this.terror;
     }
}

class Actores {
     constructor(nombre,edad,comoSeEncuentra){
          this.nombre;
          this.edad;
          this.comoSeEncuentra;
     }
}

  Serie.duracion()
let Serie = new Serie

console.log(Serie)
