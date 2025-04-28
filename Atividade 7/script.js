// Lógica do modal
document.getElementById('fecharModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Lógica do formulário
const form = document.getElementById('triangleForm');
const resultado = document.getElementById('resultado');
const tentarNovamenteBtn = document.getElementById('tentarNovamente');
const imagemTriangulo = document.getElementById('imagemTriangulo');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const a = parseFloat(document.getElementById('ladoA').value);
    const b = parseFloat(document.getElementById('ladoB').value);
    const c = parseFloat(document.getElementById('ladoC').value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultado.textContent = 'Por favor, insira apenas números válidos.';
        imagemTriangulo.innerHTML = '';
    } else if (Math.abs(b - c) < a && a < (b + c) &&
               Math.abs(a - c) < b && b < (a + c) &&
               Math.abs(a - b) < c && c < (a + b)) {
        
        if (a === b && b === c) {
            resultado.textContent = 'Triângulo Equilátero.';
            imagemTriangulo.innerHTML = '<img src="img/equilatero.png" alt="Triângulo Equilátero" class="imagem-triangulo">';
        } else if (a === b || a === c || b === c) {
            resultado.textContent = 'Triângulo Isósceles.';
            imagemTriangulo.innerHTML = '<img src="img/isosceles.png" alt="Triângulo Isósceles" class="imagem-triangulo">';
        } else {
            resultado.textContent = 'Triângulo Escaleno.';
            imagemTriangulo.innerHTML = '<img src="img/escaleno.png" alt="Triângulo Escaleno" class="imagem-triangulo">';
        }
    } else {
        resultado.textContent = 'Os valores informados não formam um triângulo.';
        imagemTriangulo.innerHTML = '';
    }

    tentarNovamenteBtn.style.display = 'block';
});

// Botão "Tentar Novamente"
tentarNovamenteBtn.addEventListener('click', function() {
    form.reset();
    resultado.textContent = '';
    imagemTriangulo.innerHTML = '';
    tentarNovamenteBtn.style.display = 'none';
});
