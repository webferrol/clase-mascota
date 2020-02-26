let miMascota= new Mascota(undefined,"Lucy");
document.querySelector(".formulario").addEventListener("submit",e=>{
    e.preventDefault();
    alert(miMascota.getData())
});