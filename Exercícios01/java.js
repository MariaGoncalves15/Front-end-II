const itensMenu = [
    { nome: 'inicio', url: 'index.html' },
    { nome: 'Sobre', url: 'index.html' },
    { nome: 'Contato', url: 'index.html' }
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
    const ul = document.querySelector('ul');
    itensMenu.forEach (item => {
        let itens = document.createElement('li');
        let ancora = document.createElement('a');
        ancora.setAttribute('href', item.url);
        ancora.textContent = item.nome.toUpperCase();
        itens.appendChild(ancora);
        // ancora.style.textTransform = 'uppercase';
        ancora.style.textDecoration = 'none';
        ancora.style.color = 'black';
        ul.appendChild(itens);
    })
};

function style(){
    const header = document.querySelector('header');
    const ul = document.querySelector('ul');
    header.style.backgroundColor = '#002F6C';
    header.style.fontFamily = 'Arial';
    ul.style.display = 'flex';
    ul.style.flexDirection = 'row';
    ul.style.justifyContent = 'center';
    ul.style.alignItems = 'center';
    ul.style.height = '40px';
    ul.style.gap = '20px';
    ul.style.listStyleType = 'none';
    
}
meuMenu();
percorrerOsItens();
style();

