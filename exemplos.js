/*const titulo = document.querySelector('h1');

console.log(titulo.innerHTML)
console.log(titulo.innerText)
console.log(titulo.textContent)

titulo.textContent = 'Parágrafo Novo'*/





const body = document.querySelector('body');
const ancora = document.createElement('a');


ancora.setAttribute('href','https://www.ifro.edu.br');
ancora.setAttribute('target', 'blank');
ancora.textContent = 'IFRO';
ancora.style.color = 'red';
ancora.style.textDecoration = 'none';
ancora.style.fontWeight = 'bold';
ancora.style.fontSize = '20px';
body.appendChild(ancora);


/*const titulo = document.querySelector('h1');
titulo.remove();*/

const lista = document.createElement('ul');
const item01 = document.createElement('li');
const item02 = document.createElement('li');
const item03 = document.createElement('li');
item01.textContent = 'item 01';
item02.textContent = 'item 02';
item03.textContent = 'item 03';

body.appendChild(lista);
lista.appendChild(item01);
lista.appendChild(item02);
lista.appendChild(item03);