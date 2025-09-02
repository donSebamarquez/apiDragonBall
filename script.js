let añadirPersonaje = document.querySelector(".añadir")
let añadirNombre = añadirPersonaje.querySelector(".name");
let añadirKi = añadirPersonaje.querySelector(".ki");
let añadirKiMaximo = añadirPersonaje.querySelector(".maxki");
let añadirRaza = añadirPersonaje.querySelector(".race");

let btnAñadirPersonaje = document.querySelector(".añadirButton")
let btnEliminarPersonaje = document.querySelector(".eliminarButton")


let personajes = document.querySelector(".characters");

url = "https://dragonball-api.com/api/characters";
let array = [];

let id;
let nombre;
let raza;
let ki;
let kiMax;


document.addEventListener("DOMContentLoaded",()=>{

    fetch(url)
    .then(response => response.json())
    .then(objetos => {
    
        cargarPersonajes(objetos);
        
});

function cargarPersonajes(objetos){
    
    objetos.items.forEach(objeto => {
            
            array.push(objeto);

        });

    mostrarPersonajes(array);
    console.log(array)
}

function mostrarPersonajes(array){
    let texto = ``;
    array.forEach((e)=>{
        texto += `
            
            <p>Name : ${e.name}</p>
            <p>Descripcion : ${e.description}</p>
            <p>Raza : ${e.race}</p>
            <p>Ki : ${e.ki}</p>
            <p>Ki maximo : ${e.maxKi}</p>
            <p>Genero: ${e.gender}</p>
            <img src="${e.image}">
            
        `;
    })
    personajes.innerHTML = texto;
    

}

function borrarPersonaje(arr) {



}

function agregarPersonaje(id,nombre,raza,ki,kiMax){

    let nuevoPersonaje = {
        id : id,
        name : nombre,
        race : raza,
        ki : ki,
        kiMax : kiMax,
        description: "",
        gender: "",
        image: ""
    };
    array = [...array,nuevoPersonaje];
    console.log(array)
    mostrarPersonajes(array);
}

btnAñadirPersonaje.addEventListener("click",(e)=>{
    e.preventDefault();

    id = (array.length + 1); 
    nombre = añadirNombre.value;
    raza = añadirRaza.value;
    ki = añadirKi.value;
    kiMax = añadirKiMaximo.value;
    
    agregarPersonaje(id,nombre,raza,ki,kiMax)
    
    añadirNombre.value = "";
    añadirRaza.value = "";
    añadirKi.value = "";
    añadirKiMaximo.value = "";
})

btnEliminarPersonaje.addEventListener("click",()=>{
    
    borrarPersonaje()

})

})
