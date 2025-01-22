//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Funcionalidades: Adicionar nomes, Validar entrada (se tiver vazio o programa vai exibir um alerta), visualizar listas de nomes adicionados, sorteio aleatorio

let amigos = [];

function adicionarAmigo() {
    let amigoDigitado = document.getElementById('amigo').value.trim();

    if (amigoDigitado == '') {
        alert('Por Favor, insira um nome.')
    } else {
        amigos.push(amigoDigitado)
        console.log('Digitou um nome', amigos)
        document.getElementById('amigo').value = '';
        atualizarLista();
    } 
}

function atualizarLista() {
    lista = document.getElementById('listaAmigos')
    lista.innerHTML = '';

    let text = '';
    for (let i = 0; i < amigos.length; i++) {
        text += '<li>' + amigos[i] + '</li>';
    }
    lista.innerHTML = text;
}

function sortearAmigo() {
    if (amigos == 0) {
        alert('Escreva um nome antes de sortear')
    } else {
        let numeroAmigo = Math.floor(Math.random() * amigos.length)
        let amigoSorteado = amigos[numeroAmigo];
        document.getElementById('resultado').innerHTML = 'O amigo sorteado é: ' + amigoSorteado;
        document.getElementById('listaAmigos').innerHTML = '';
    }
}