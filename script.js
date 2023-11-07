const dados = JSON.parse(localStorage.getItem('dados'));

    document.getElementById('tela').innerHTML = `Nome: ${dados.nome} <br>`;
    document.getElementById('tela').innerHTML += `Idade: ${dados.idade} <br>`;
    document.getElementById('tela').innerHTML += `Time: ${dados.time} <br>`;

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

    document.getElementById('tela').innerHTML = `Nome: ${dados.nome} <br>`;
    document.getElementById('tela').innerHTML += `Idade: ${dados.idade} <br>`;
    document.getElementById('tela').innerHTML += `Time: ${dados.time} <br>`;

    localStorage.setItem('dados', JSON.stringify(dados));

}

function apagarDados() {

    localStorage.removeItem('nome');
    document.getElementById('tela').innerHTML = '';

}