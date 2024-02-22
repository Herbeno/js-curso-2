// DESAFIO
// O primerio desafio é inserir o Título 'Hora do desafio'
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

// Segundo desafio é criar uma função no console que marque todas as vezes que o botão 'console' for clicado
function botaoConsole() {
    console.log('O botão "Console" foi clicado');
}

// Terceiro desafio: Crie uma função que exiba um alerta com a mensagem 'Eu amo JS' sempre que o botão 'Alerta' for precionado
function mensagemAlerta() {
    alert('Eu amo JS')
}

// Quarto desafio: Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba o texto da mensagem concatenando com o texto: ' Estive em {cidade} e lembrei de você
function mensagemPrompt() {
    cidade = prompt('Digite o nome de uma cidade do Brasil')
    alert('Estive em '+ cidade + ' e lembrei de você')
}

// Quinto desafio: Ao clicar no botão 'Soma', peça 2 números e exiba o resultado da soma em um alerta.
function alertaSoma() {
    primeiroNumero = prompt('Digite o primeiro número da soma')
    segundoNumero = prompt('Digite o segundo número da soma')
    // Teremos que converter os valores de strings para números
    numero1 = parseFloat(primeiroNumero)
    numero2 = parseFloat(segundoNumero)
    somaDosNumeros = numero1 + numero2
    alert('O resultado dessa soma é '+ somaDosNumeros + '.')
}
