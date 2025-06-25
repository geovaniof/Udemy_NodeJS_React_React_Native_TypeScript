/*
    Abaixo de 17 Muita abaixo do peso
    Entre 17 e 18,49 Abaixo do peso
    Entre 18,5 e 24,99 Peso normal
    Entre 25 e 29,99 Sobrepeso
    Entre 30 e 34,99 Obesidade grau I
    Entre 35 e 39,99 Obesidade grau II
    Acima de 40 Obesidade grau III
*/
var peso;
var altura;
var imc;
var resultado;

function calcularIMC(event) {
    event.preventDefault();
    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);

    imc = peso / (altura * altura);

    resultado = document.getElementById('resultado');
    if(imc < 17)
    {        
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado você está muito abaixo do peso!';
    }
    else if (imc > 17 && imc <= 18.49){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado você está abaixo do peso!';            
    }
    else if (imc >= 18.5 && imc <= 24.99){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está no peso ideal!';            
    }
    else if (imc >= 25 && imc <= 29.99){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está com Sobrepeso!';            
    }
    else if (imc >= 30 && imc <= 34.99){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está com Obesidade grau I!';            
    }
    else if (imc >= 35 && imc <= 39.99){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está com Obesidade grau II!';            
    }
    else if (imc >= 40){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está com Obesidade grau III!';            
    }


    console.log("Peso: " + peso);
    console.log("Altura: " + altura);
    console.log("IMC:" + imc);

    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("peso").focus();
}