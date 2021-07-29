const produtos = [
    {
        nome: 'Computador Core i7, 14gb RAM, HD 1tb, placa de vídeo GTX 1080',
        imagem: '01.png',
        valor: 3120
    },
    {
        nome: 'Computador Ryzen 5, 14gb RAM, HD 1tb, placa de vídeo GTX 1080',
        imagem: '02.png',
        valor: 3120
    },
    {
        nome: 'Computador Core i7, 14gb RAM, HD 1tb, placa de vídeo GTX 1080',
        imagem: '03.png',
        valor: 3120
    },
    {
        nome: 'Computador Ryzen 5, 14gb RAM, HD 1tb, placa de vídeo GTX 1080',
        imagem: '04.png',
        valor: 3120
    },
    {
        nome: 'Headset Gamer Surround, com microfone',
        imagem: '05.png',
        valor: 400
    },
    {
        nome: 'Headset Gamer Surround, com microfone',
        imagem: '06.png',
        valor: 400
    },
    {
        nome: 'Headset Gamer Surround, com microfone',
        imagem: '07.png',
        valor: 400
    },
    {
        nome: 'Headset Gamer Surround, com microfone',
        imagem: '08.png',
        valor: 400
    }
];

function formatarPreco(valor) {
    const real = parseInt(valor).toString().replace(/(\d{1,3})(\d{3})$/, '$1.$2');
    const decimal = valor.toFixed(2).replace(/^\d+\./, '');

    return `
         <span class="cifrao">R$</span>
         <span class="real">${real}</span>
         <span class="decimal">,${decimal}</span>
    `;
}

window.addEventListener('load', () => {
    const ctProdutos = document.querySelector('#produtos .lista-produtos');

    produtos.forEach(item => {
        ctProdutos.innerHTML += `
        <div class="item">
        <div class="foto">
            <img src="img/produtos/${item.imagem}" alt="${item.nome}">
        </div>
        <div class="detalhes">
            <h5 class="produto">${item.nome}</h5>
            <div class="valor">${formatarPreco(item.valor)}</div>
        </div>
        <div class="opcoes">
            <button>Ver detalhes</button>
        </div>
       </div>
    `
    });
});