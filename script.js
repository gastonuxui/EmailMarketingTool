


const botonDropdown = document.querySelector('.dropdownBoton');
const dropDown = document.querySelector('#dropdown');
const BotonConFlecha = document.querySelector('#BotonConFlecha');
const iconoArrow180 = document.querySelector('#iconoArrow');

botonDropdown.addEventListener('click', () => {
    dropDown.classList.toggle('dropdownactive');
    BotonConFlecha.classList.toggle('BotonClickeado');
    iconoArrow180.classList.toggle('rotarIcono');

})

const botonGuardar=document.querySelector('#BotonGuardarid')
botonGuardar.addEventListener('click',()=>{
    Swal.fire({
        title: 'Perfecto',
        text: 'Has guardado con exito esta plantilla',
        confirmButtonText: 'Entendido',
        customClass: {
            confirmButton: 'mi-boton-swal',
            
          }

        
      })
})

