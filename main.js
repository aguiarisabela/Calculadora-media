const form = document.getElementById('form-atividade')
const imgAprovado = '<img src="images/Aprovado.png" alt="emoji festejando">'; // adiciona a imagem na tabela a medida que a nota for adicionada
const imgReprovado = '<img src="images/reprovado.png" alt="emoji decepcionado">';
const atividades = []
const notas = []
const spamAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spamReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = Number(prompt("Digite a nota mínima:"))

let linhas = '' //Declara a variável linhas e a inicializa como uma string vazia. Essa variável será usada para acumular as linhas da tabela que serão geradas e exibidas na página.


form.addEventListener('submit', function(e){
    e.preventDefault();
   
    adicionaLinha();
    atualizaTabela();
    atualizaMedia();

})


function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida.`)
    } else{

    atividades.push(inputNomeAtividade.value)
    notas.push(Number(inputNotaAtividade.value))

    let linha = '<tr>'; // Inicia uma nova string chamada linha com o valor <tr>, que representa uma nova linha em uma tabela HTML.
    linha += `<td>${inputNomeAtividade.value}</td>`; // Adiciona uma célula de tabela <td> na string linha contendo o valor digitado no campo inputNomeAtividade. O valor é acessado por meio de inputNomeAtividade.value.
    linha += `<td>${inputNotaAtividade.value}</td>`; //Adiciona uma célula de tabela <td> na string linha contendo o valor digitado no campo inputNotaAtividade. O valor é acessado por meio de inputNotaAtividade.value.
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`; // Adiciona uma célula de tabela <td> na string linha que contém "Aprovado" se a nota da atividade (inputNotaAtividade.value) for maior ou igual a 7, e "Reprovado" caso contrário. Isso é feito com o operador ternário ? :.
    linha += '</tr>'; //Finaliza a string linha, fechando a linha de tabela com </tr>.

    linhas += linha
}

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody'); //Seleciona o elemento <tbody> da tabela onde as linhas serão inseridas. Esse elemento é necessário para manipular diretamente as linhas da tabela.
    corpoTabela.innerHTML = linhas; //Atualiza o conteúdo HTML do <tbody> com todas as linhas acumuladas na variável linhas. Isso faz com que as linhas sejam renderizadas na página
}


function atualizaMedia(){
    const mediaFinal = calculamediaFinal()
    

    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima? spamAprovado : spamReprovado
    
}

function calculamediaFinal(){
    let somaNotas = 0
    for(let i = 0; i< notas.length; i++){
        somaNotas += notas[i]
    }

    return media = somaNotas/notas.length
}