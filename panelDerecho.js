

class PanelCentral {
    constructor() {

    }

    agregarIMG(img) {
        this.modalIMG.push(img);
    }

    

    mostrarModal() {
        const openModal = document.querySelector('.hero__cta');
        const modal = document.querySelector('.modal');
        const closeModal = document.querySelector('.modal__close');
        openModal.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('modal--show')
        })

        closeModal.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('modal--show')
        })
    }


};
const abrirModalIMG = new PanelCentral();
abrirModalIMG.mostrarModal();







class PanelDerecho {

    constructor() {
        this.dropDown = [];
    }

    agregarValores(o) {
        this.dropDown.push(o);
    }

    mostrarInput() {
        let inputNumber = document.querySelector('.inputNumber');
        inputNumber.innerHTML +=
            ` <h4>titulo</h4>
        <input type="number"/>`
    }
    mostrarButtonSpecial() {
        let botonspecial = document.querySelector('.botonFormato'); 

        botonspecial.innerHTML += `<div class=" botonesDerecho"> 
        
        <h4>Formato</h4>
        <button>hola</button>
        <button>hola</button>
        <button>hola</button>
        <button>hola</button>
        
        
        </div>`
    }





    mostrarDropdown() {
        let dropDown = document.querySelector('.dropdownMolde');
        dropDown.innerHTML += ` 
                <h4>titulo</h4>
                <select name="select">
                <option value="value1">Value 1</option>
                <option value="value2" selected>Value 2</option>
                <option value="value3">Value 3</option>
                </select>
                         `
    }

    mostrarColorPicker() {
        let colorPicker1 = document.querySelector('.ColorPicker');
        colorPicker1.innerHTML += `
        <h4>Color</h4>
        <input type="color" name="" id="colorPiker">
        `

    }

    
    controladorColor(){
    const input = document.querySelector("input");
    const cuadrado=document.querySelector('.cuadrado');
    const cuadrado2=document.querySelector('.cuadrado2');

    cuadrado.addEventListener('click',()=>{
    cuadrado.style.borderColor='red';
    cuadrado.style.color='red';
    cuadrado2.style.borderColor='black';
    cuadrado2.style.color='black';
    input.oninput= ()=>{
    
        cuadrado.style.backgroundColor=input.value;
        
        cuadrado.style.color='#ffff';
    };
        
});



    cuadrado2.addEventListener('click',()=>{
    cuadrado2.style.borderColor='red';
    cuadrado2.style.color='red';
    cuadrado.style.borderColor='black'
    cuadrado.style.color='black';
    input.oninput= ()=>{
    
        cuadrado2.style.backgroundColor=input.value;
        
        cuadrado2.style.color='#ffff';
    };
        
    });

    }
    

    
}

const IP = new PanelDerecho();
IP.mostrarInput();
IP.mostrarButtonSpecial();
IP.mostrarDropdown();
IP.mostrarColorPicker();
IP.controladorColor();










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







