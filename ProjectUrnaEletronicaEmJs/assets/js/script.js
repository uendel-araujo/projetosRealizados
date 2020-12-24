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
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item) => {
        if(item.numero === numero) {
            return true;
        } else {
            return false;
        }
    });

    if(candidato.length > 0) {
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        descricao.innerHTML = `Nome: <b>${candidato.nome}</b> <br/> Partido: <b>${candidato.partido}</b>`;
        aviso.style.display = 'block';
        
        let fotosHtml = '';
        for(let i in candidato.fotos) {
            fotosHtml += `<div class="d-1-image"><img src="${candidato.fotos[i].url}" alt="${candidato.legenda}">${candidato.fotos[i].legenda}</div>`;
        }

        lateralDireita.innerHTML = fotosHtml;
    } else {
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>'
    }

    console.log('Candidato', candidato);
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