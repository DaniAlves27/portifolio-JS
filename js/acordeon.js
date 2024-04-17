const acordeonAcionar = document.querySelectorAll(".acordeon .acionar")
acordeonAcionar.forEach((acionar) => {
    acionar.addEventListener("click", (e)=> {
    const acordeon = acionar.parentElement
    const aberto = acordeon.classList.contains( "aberto" )

    if(aberto ){
        acordeon.classList.remove("aberto");    
    }else{
        acordeon.classList.add("aberto")
    }
})
})