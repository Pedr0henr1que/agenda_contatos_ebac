const form = document.getElementById('form-tabela');
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputagendaNome = document.getElementById('nome-contato');
    const inputagendaNumero = document.getElementById('numero-contato');

    let linha = '<tr>';
    linha += `<td>${inputagendaNome.value}</td>`;
    linha += `<td>${inputagendaNumero.value}</td>`;
    linha += `<td>${inputagendaNome.value}</td>`;
    linha += '<tr>';

    linhas += linha;

    const agendaTabela = document.querySelector('tbody');
    agendaTabela.innerHTML = linhas;

    inputagendaNome.value = '';
    inputagendaNumero.value = '';
});