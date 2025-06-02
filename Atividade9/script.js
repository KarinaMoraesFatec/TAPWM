function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultado = document.getElementById('resultado');
    const btnCalcular = document.getElementById('btnCalcular');
    const btnNovamente = document.getElementById('btnNovamente');

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        resultado.innerHTML = "Por favor, preencha altura e peso corretamente.";
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);
    const classificacao = obterClassificacao(imc);

    resultado.innerHTML = `Seu IMC é <strong>${imc}</strong> (${classificacao}).`;

    // Esconde o botão Calcular e mostra o botão Novamente
    btnCalcular.classList.add('hidden');
    btnNovamente.classList.remove('hidden');
}

function obterClassificacao(imc) {
    if (imc < 18.5) {
        return "Magreza Grau 0";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Normal Grau 0";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso Grau 1";
    } else if (imc >= 30 && imc <= 39.9) {
        return "Obesidade Grau 2";
    } else {
        return "Obesidade Grave Grau 3";
    }
}

function reiniciar() {
    document.getElementById('altura').value = '';
    document.getElementById('peso').value = '';
    document.getElementById('resultado').innerHTML = '';

    document.getElementById('btnCalcular').classList.remove('hidden');
    document.getElementById('btnNovamente').classList.add('hidden');
}
