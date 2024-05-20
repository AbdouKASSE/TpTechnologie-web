const = form = document.querySelector("form"),
       allInput = document.querySelectorAll(".corps-form input"),
       connexion = document.getElementsByClassName(".btnEnregistrer");

       connexion.addEventListener("click", ()=>{
        allInput.forEach(input =>{
            if(input.value != ""){
                form.classList.add('secActive');
            }else{
                form.classList.remove('secActive');
                alert ("input vide");
            }
        })
       } );
    