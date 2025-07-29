//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
function adicionarAmigo(){
    let textoEscrito = document.getElementById("amigo").value;
    if (textoEscrito == ''){
        alert('Por favor, insira um nome.');
    }else{
        amigos.push(textoEscrito);
        document.getElementById("amigo").value = '';
        listarAmigos();
    }
}

function listarAmigos(){
    //<ul id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul>
    let listaHtml = document.getElementById("listaAmigos");
    listaHtml.innerHTML = "";
    for (let i = 0; i < amigos.length; i++){
        listaHtml.innerHTML += `<ul id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list">${amigos[i]}</ul>`;
    }
}

let amigos = [];
