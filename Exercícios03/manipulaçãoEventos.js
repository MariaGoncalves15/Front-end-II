const miniaturas = document.querySelectorAll('.miniatura')
const imgAmpliada = document.querySelector('#imgAmpliada')

    miniaturas.forEach (miniatura => {
        miniatura.addEventListener('click', () =>{
            miniaturas.forEach(function (miniatura)
            imgAmpliada.src = miniatura.src
            imgAmpliada.style.display = "block";
            imgAmpliada.dtyle.opacity = "0.4";
            imgAmpliada.dtyle.opacity = "1";

        )

    });