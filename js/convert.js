function verificaInput(input)
{
    var ultimoValorDigitado = input.value.substring(input.value.length - 1, input.value.length);
    if(ultimoValorDigitado > 1 || ultimoValorDigitado < 0 || isNaN(parseInt(ultimoValorDigitado))){

        alert('Os valores aceitos são 1 e 0');
        input.value = input.value.substring(0, input.value.length - 1);
        return false;
    }

    if(input.value.length > 8 ){

        alert('O valor máximo é de 8 digitos');
        return false;

    }
    return true
}

function converterDecimal()
{
    var elemento = document.querySelector('#binary');
    let decimal = 0;

    for(var i = 0; i < elemento.value.length; i++){
        var valor = elemento.value.substring(i, i + 1);
        var resultado = valor * (Math.pow(2, (elemento.value.length - 1) - i));
        decimal += resultado;
    }

    document.querySelector('#decimal').value = decimal;
   
}