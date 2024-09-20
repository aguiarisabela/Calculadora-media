const form = document.getElementbyId('form-atv')
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atv');
    const inputNotaAtividade = document.getElementById('nota-atv');


    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= 7 ? 'Aprovado' : 'Reprovado'}</td>`;
    linha += '</tr>';

    const corpoTabela = document.querySelector('tbody');
    linhas += linha

})
