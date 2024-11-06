const p = document.querySelector('#paragrafo')
const divimg = document.querySelector('#divimg');
const txt = document.querySelector('#txt')

/*divimg.addEventListener('click', () => {
    divimg.style.border = '2px solid black';
})*/

function pMouse () {
    divimg.style.border = '2px black solid';
}

function sMouse () {
    divimg.style.border = 'none';
}

divimg.addEventListener('mouseover', pMouse);
divimg.addEventListener('mouseout', sMouse);

p.onclick = () => {
    alert('Parágrafo clicado')
}

const clique = () => {
    console.log('Botão clicavel!');
    alert('Botão Clicado com sucesso!')
}

function pressTecla() {
    if (window.getComputedStyle(divimg, null).getPropertyValue
    ('background-color') === 'rgb(0, 0, 0)') {
        divimg.style.backgroundColor = 'rgb (255, 255, 255)'
} else {
    divimg.style.backgroundColor = 'rgb(0, 0, 0)'
        }
}
