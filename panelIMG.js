const openModal =document.querySelector('.BotonCambiarImg');
const modal=document.querySelector('.modal');
const closeModal= document.querySelector('.modal__close');
openModal.addEventListener("click",(e)=>{
    e.preventDefault();
    modal.classList.add("modal--show");
})

closeModal.addEventListener('cllick',(e)=>{
    e.preventDefault();
    modal.classList.remove("modal--show");
})