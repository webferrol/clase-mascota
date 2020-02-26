
var Mascota = function(id,nombre="Desconocido",tipo="Cánido",microchip="",edad=0){
    var __id=id||1;
    this.nombre = nombre;
    this.tipo = tipo;
    this.microchip=microchip;
    this.edad=edad;
    this.gender="f";

    this.setId=function(newId){
        __id=newId;
    }
    this.getId=function(){
        return __id;
    }
}



Mascota.prototype.getName=function(){
    return  this.nombre;
}

Mascota.prototype.getData = function(){
    let sexo=(this.gender==="f")?"Hembra":"Macho";
    let datos=["Identificador: "+this.getId(),"Nombre: "+this.nombre,"Tipo: "+this.tipo,"Microchip: "+this.microchip,"Edad: "+this.edad,"Sexo: "+sexo];
    return datos;
}