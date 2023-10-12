class Input{
    constructor(){

    }

    mostrarInput(){
        let inputNumber = document.querySelector('.inputNumber');
        inputNumber.innerHTML+= ` <input type="number"   />`
    }
}

const IP=new Input();
IP.mostrarInput();



class Dropdown {
    constructor(){
        
    }

    mostrarDropdown(){
        let dropDown = document.querySelector('.dropdownMolde');
        dropDown.innerHTML+= ` <select name="select">
            <option value="value1">Value 1</option>
            <option value="value2" selected>Value 2</option>
            <option value="value3">Value 3</option>
            </select>`
    }

       
}

const DP=new Dropdown();
DP.mostrarDropdown();



class ColorPicker{
    constructor(){

    }

    mostrarColorPicker(){
        let colorPicker1 = document.querySelector('.ColorPicker');
        colorPicker1.innerHTML+= `<input type="color" name="" id="">`
    
    }
}

const CPK = new ColorPicker();
CPK.mostrarColorPicker();






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

