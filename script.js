// Essa é a função responsável por gravar os dados ( Usando a "const dados = {}" você pode colocar mais de um chave (key) ).

function gravaDados() {
    const dados = {
        pessoa1: {
            nome: document.getElementById('nome').value,
            idade: document.getElementById('idade').value,
            time: document.getElementById('time').value,
        }
    };

    // Armazenar os dados no localStorage convertendo para string JSON
    localStorage.setItem('dados', JSON.stringify(dados));

    // Exibir os dados na tela
    document.getElementById('tela').innerHTML = `Nome: ${dados.pessoa1.nome} <br>`;
    document.getElementById('tela').innerHTML += `Idade: ${dados.pessoa1.idade} <br>`;
    document.getElementById('tela').innerHTML += `Time: ${dados.pessoa1.time} <br>`;
}

// Com esta função nós apagamos os dados que foram gravados tanto na tela do usuário quanto no local-storage da máquina.

function apagarDados() {
    localStorage.removeItem('dados');
    document.getElementById('tela').innerHTML = '';
}

let gravar = document.getElementById('gravar');
let apagar = document.getElementById('apagar');

gravar.addEventListener('click', () => {
    document.getElementById('tela').classList.remove('tela-clear');
    document.getElementById('tela').classList.add('tela');
});

apagar.addEventListener('click', () => {
    document.getElementById('tela').classList.remove('tela');
    document.getElementById('tela').classList.add('tela-clear');
});
