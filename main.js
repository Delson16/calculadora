// var e o let podem ser usados para delcarar variaveis e o comando const sevre para declarar constantes
// O querySelector sevre para buscar algum elemento do html. Coloca-se o comando e e loco em seguinda parenteses, aspas e o nome do id/class/elememto  desejado.
const display = document.querySelector('#display');
// querySelectorAll: Busca todos os elementos
const buttons = document.querySelectorAll('button');

// em funções usa-se o comando => para atribuir um valor a uma variavel
buttons.forEach((btn) => {
    //Adicionando um evento ao btn (algo acontecerá quand se clicar com o mouse nele)
    //quando receber o click ele irá atribuir o conteúdo a seguir:
    btn.addEventListener('click', () => {
        //Se o id do botão clicado for igual ao sinal de igual
        if(btn.id === "="){
            display.value = eval(display.value);
        }
        else if (btn.id === "ac"){
            //As aspas deixam o conteúdo vazio
            display.value = "";
        }
        else if (btn.id === "de"){
            //Slice: função que um caractere. Neste caso informamos que deve pagar o caractere na posição direita e na ordem invertida, referenciada pelo numero -1
            display.value = display.value.slice(0,-1);
        }
        else{
            //+= usado para fazer com que a informação seja atribuida de forma acumulativa, sendo assim não se substitue o valor anteiror pelo mais recente, apenas concatena os caracteres digitados
            display.value += btn.id;
        }
    })

})