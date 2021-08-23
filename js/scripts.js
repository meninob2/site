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

const scroll = (to, tempo = 500) => {
    const position = document.documentElement.scrollTop

    const dir = to > position

    const dist = (dir ? 1 : -1) * (to - position)

    const passos = []

    let falta = 0

    let dec = 1

    while (falta < dist) {
        if (falta + dec > dist) {
            passos.push(dist)
            falta = dist
        } else {
            falta += dec
            passos.push(falta)
            dec = dec + 2
        }
    }

    const step = passos.map(e => position + (dir ? e : -e))
    const stepTime = tempo / step.length

    const next = (i = 0) => {

        if (i > step.length - 1) return;

        const e = step[i]
        document.documentElement.scrollTop = e

        setTimeout(() => next(i + 1), stepTime)
    }

    next()
};

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
    const menu = document.querySelector('#menu');
    const btnAbreMenu = menu.querySelector('#abre-fecha-menu');

    btnAbreMenu.addEventListener('click', () => {
        menu.classList.toggle('aberto');
    });

    document.querySelectorAll('#menu ul li a').forEach(e => {
        e.addEventListener('click', function (e) {
            e.preventDefault()
            menu.classList.remove('aberto')
            const el = document.querySelector(this.getAttribute('href'))

            if (el) {
                scroll(el.offsetTop)
            }
        })
    })

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