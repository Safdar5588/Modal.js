

let modal = document.querySelector(".modal")
let openModal = document.querySelector(".btn")
let close = document.querySelector(".close")



openModal.addEventListener("click" , function(){
  modal.style.display = "block";
  openModal.style.display = "none"
})

close.addEventListener("click" , function(){

    modal.style.display = "none"
    openModal.style.display = "block"
    
})

