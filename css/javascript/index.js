function toggleNav(){
    document.body.classList.toggle("nav-open");/*eliminar el nombre de class de body y con esta funcion en inspeccionar la llamo y aparece el navbar when i call it the second time it will disappear*/
}



document.querySelector(".nav-close").addEventListener("click" , () =>{
toggleNav();
});