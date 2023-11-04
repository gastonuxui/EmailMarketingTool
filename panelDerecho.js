

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







class PanelIzquierdo {

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
        <h4>titulo</h4>
        <input type="color" name="" id="colorPiker">
        `

    }

    cambiarColor() {
        /*La idea es lograr que las letras cambien de color*/
        const elegirColor = document.querySelector('#colorPiker');
        const textoMail = document.querySelector('#textoMail');
        elegirColor.addEventListener('mousemove', () => {
            textoMail.classList.add('MostrarTexto');
        });
    }
}

const IP = new PanelIzquierdo();
IP.mostrarInput();
IP.mostrarButtonSpecial();
IP.mostrarDropdown();
IP.mostrarColorPicker();










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






