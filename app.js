listaDeNumerosSorteados = [];
let totalN = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

console.log(numeroSecreto);


//Formatação dos textos HTML
function estilizar(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    }

//Função das mensagens iniciais para não precisar copiar código e editar em vários lugares diferentes.
function mensagemInicial() {
    estilizar ('h1','Bem vindo ao jogo do número secreto!!!!');
    estilizar ('p','Escolha um número entre 1 e 3.');
}

mensagemInicial();


//O que acontece quando chutamos
function chutar() {
    let chute = document.querySelector('input').value;

if (chute == numeroSecreto){

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você acertou em ${tentativas} ${palavraTentativa}!!!`;

    estilizar ('h1', 'Parabéns, você acertou!!!');
    estilizar ('p', mensagemTentativas);
    limparTextoAcerto();
    document.getElementById('reiniciar').removeAttribute('disabled');
}
    else {
        estilizar ('h1', 'Você errou! Tente novamente.');
        if (chute > numeroSecreto){
            estilizar ('p',`Você chutou muito alto!`);
        }
            else {
                estilizar ('p',`Você chutou muito baixo!`); 
            }
        tentativas++;
        limparTexto();
    }
}

//Função com retorno do número secreto
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * totalN + 1);
    let quantidadeNaLista = listaDeNumerosSorteados.length;
    
    if (quantidadeNaLista == totalN) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push (numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}


    //Aplicação da função
    estilizar ('h1','Bem vindo ao jogo do número secreto!!!!');
    estilizar ('p','Escolha um número entre 1 e 3.')





//função que reseta os campos
function limparTexto() {
    chute = document.querySelector ('input');
    chute.value = '';
}

function limparTextoAcerto() {
    chute = document.querySelector ('input');
    chute.value = ';D';
}

//Função que reinicia o game, automatizado.
function reiniciar() {
    numeroSecreto = gerarNumeroAleatorio();
    mensagemInicial();
    limparTexto();
    tentativas = 1;
    //resetar o botão novo jogo.
    document.getElementById ('reiniciar').setAttribute('disabled',true);
}





//Eu crio o html e estiliso no css, ponto, a partir disso tudo que eu fazer será pelo js linkando funções e itens apenas ao html.
//1. Crio uma var e uso: titulo = DOCUMENT.QUERYSELECTOR('h1'); titulo.innerHTML = 'Jogo do numero secreto); Só que ficariam muitos itens editados
//daí criamos uma função com parâmetro, onde apenas chamamos ela com os valores que queremos escrever (o item, o texto). genial.
//2.Usamos a função *sem parâmetro* para exibir itens. Usamos a função *com parametro* para facilitar a edição dos textos 
//e criamos a função *sem parametro mas com retorno*, onde ela devolve alguma informação, preciso entender direito como isso funciona.
//3.Vimos variáveis com valor de string e numero, agora criamos variáveis dentro das funções, as famosas escopo local.
//4.HTML tem dificuldade em entender template string, por isso criamos variáveis de template string nas tentativas (24)
//No final precisamos copiar alguns termos, então criamos uma variável pra editar os textos num lugar só. Tudo que é repetido pode ser automatizado.