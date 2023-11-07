// Executa antes das funções.

const dados = JSON.parse(localStorage.getItem('dados'));

    document.getElementById('tela').innerHTML = `Nome: ${dados.nome} <br>`;
    document.getElementById('tela').innerHTML += `Idade: ${dados.idade} <br>`;
    document.getElementById('tela').innerHTML += `Time: ${dados.time} <br>`;
    
// Essa é a função responsavel por gravar os dados ( Usando a "const dados = {}" você pode colocar mais de um chave (key) ).

function gravaDados() {

    const dados = {
        pessoa1: {
            nome: document.getElementById('nome').value,
            idade: document.getElementById('idade').value,
            time: document.getElementById('time').value,
        },
        pessoa2: {
            nome: document.getElementById('nome').value,
            idade: document.getElementById('idade').value,
            time: document.getElementById('time').value,
        }
    }

// Aqui usando a chave (key) dados nós apresentamos os valores (nome, idade e time) na tela do usuario.
    document.getElementById('tela').innerHTML = `Nome: ${dados.nome} <br>`;
    document.getElementById('tela').innerHTML += `Idade: ${dados.idade} <br>`;
    document.getElementById('tela').innerHTML += `Time: ${dados.time} <br>`;

// Aqui é apresentado na tela do usuario o valor que foi guardado no local-storage.

    localStorage.setItem('dados', JSON.stringify(dados));

}

// Com esta função nós apagamos os dados que foram gravados tanto na tela do usuario quando o local-storage da maquina.

function apagarDados() {

    localStorage.removeItem('nome');
    document.getElementById('tela').innerHTML = '';

}