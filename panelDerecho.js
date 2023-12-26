/*Boton guardar con sweet alert*/
class MenuHeader{
    constructor(){

    }
    guardarCambio(){
        const botonGuardar = document.querySelector('#BotonGuardarid')
        botonGuardar.addEventListener('click', () => {
            Swal.fire({
                title: 'Perfecto',
                text: 'Has guardado con exito esta plantilla',
                confirmButtonText: 'Entendido',
                customClass: {
                    confirmButton: 'mi-boton-swal',
        
                }
        
        
            })
        })
    }
}
const BtnGuardar=new MenuHeader();
BtnGuardar.guardarCambio();

//Camibar familia tipografica
const tipografia=document.getElementById("Tipografia");
tipografia.addEventListener("change",()=>{
    //Función cuando deba cambiar la familia tipográfica del texto
    console.log("cambiaste la tipografía");
});

//Cambiar peso
const peso=document.getElementById("peso");
peso.addEventListener("change",()=>{
    //Funcion que cambia el peso de la tipografía
    console.log("cambiaste el peso");
})

//Input aumentar o bajar pixeles

const pixeles=document.getElementById("pixelesIndicador");
pixeles.addEventListener("click",()=>{
    //Funcion elegir entre pixeles, porcentaje y rem
    console.log("cambiaste el indicador de pixeles");
})

//Cambiar unidad de medida (Pixeles,Porcentaje,rem)

const unidadDeMedida=document.getElementById("inputUnidadDeMedida");
unidadDeMedida.addEventListener("change",()=>{
    //Dropdown cambiar unidad de medida
    console.log("cambiaste la unidad de medida");
})

//COLOR
const colorPicker=document.getElementById("colorPicker");
colorPicker.addEventListener("click",()=>{
    //Funcion que cambia de color el texto o algo seleccionado
    //Va con oninput las lineas de codigo estan incompletas.
    console.log("cambiaste de color algo");
})


//FORMATO
const formatos=document.getElementById("formatos");
formatos.addEventListener("click",()=>{
    //Cambiar el formato Bold, Italica, Tachado Etc

    console.log("cambiaste el Formato");
})

//JUSTIFICADO   
const justificado=document.getElementById("justificado");
justificado.addEventListener("click",()=>{
    //Funciones para el justificado

    console.log("Cambiaste el justificado");
})


//LISTA

const lista=document.getElementById("lista");
lista.addEventListener("click",()=>{
    //Funciones para la lista
    console.log("cambiaste la lista");

});

//SWITCH
const switch1=document.getElementById("enlace");
switch1.addEventListener("click",()=>{
   console.log("Cambiaste el switch");
});




