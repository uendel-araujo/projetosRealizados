/** VARIÁVEIS DE CONTROLE DE INTERFACE */
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let numeros = document.querySelector('.d-1-3');
let descricao = document.querySelector('.d-1-4');
let lateralDireita = document.querySelector('.d-1-right');
let aviso = document.querySelector('.d-2');

/** VARIÁVEIS DE CONTROLE DE AMBIENTE */
let etapaAtual = 0;
let numero = '';

/** FUNÇÕES ESPECÍFICAS */
function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';
    
    for(let i=0; i< etapa.numeros; i++) {
        if( i === 0 ) {
            numeroHtml += '<div class="numero pisca"></div>';
        } else {
            numeroHtml += '<div class="numero"></div>';
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateralDireita.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface() {
    console.log('Atualizando Interface');
    console.log(numero);
}

/** FUNÇÕES DE CONTROLE */
function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca');
    if(elNumero !== null) {
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('pisca');
        } else {
            atualizaInterface();
        }
        
    }
}

function branco() {
    alert(`Clicou em BRANCO`);
}

function corrige() {
    alert('Clicou em CORRIGE');
}

function confirma() {
    alert(`Clicou em CONFIRMA`);
}

/** CHAMADAS DE INICIALIZAÇÃO DAS FUNÇÕES */
comecarEtapa();