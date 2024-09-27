const itensMenu = [
    { nome: 'inicio', url: 'index.html' },
    { nome: 'Sobre', url: 'sobre.html' },
    { nome: 'Contato', url: 'contato.html' }
];

function meuMenu(){
    const body = document.querySelector('body');
    const header = document.createElement('header');
    const nav = document.createElement('nav');
    const lista = document.createElement('ul');
    body.prepend(header);
    header.appendChild(nav);
    nav.appendChild(lista);
};


function percorrerOsItens() {
    itensMenu.forEach (item => {
        const ul = document.querySelector('ul');
        let itens = document.createElement('li');
        let ancora = document.createElement('a');
        ancora.setAttribute('href', item.url);
        ancora.style.textDecoration = 'none';
        itens.appendChild()

    })
};
meuMenu();
percorrerOsItens();

    /*let item02 = document.createElement('li');
    let item03 = document.createElement('li');
    item01.textContent = 'item 01';
    item02.textContent = 'item 02';
    item03.textContent = 'item 03';

    lista.appendChild(item01);
    lista.appendChild(item02);
    lista.appendChild(item03);*/


