function adicionarCaracter(caracter){
    const valorInput = document.querySelector('.display').value

    document.querySelector('.display').value = valorInput + caracter
}

function limparTela(){
    document.querySelector('.display').value = ''
}

function calcularResultado(){
    const valorInput = document.querySelector('.display').value

    document.querySelector('.display').value = eval(valorInput)
}

function apagar() {
    const display = document.querySelector('.display');
    const valorInput = display.value;


    display.value = valorInput.slice(0, -1);
}