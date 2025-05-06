
window.onload = function () {
    document.getElementById("modal").style.display = "flex";
  };
  
  function fecharModal() {
    document.getElementById("modal").style.display = "none";
  }  
 // Fechar modal
 
function mostrarMaior() {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const n3 = parseFloat(document.getElementById("num3").value);
  
    const maior = Math.max(n1, n2, n3);
    document.getElementById("resultado1").innerText = `Maior número: ${maior}`;
  }
  
  function ordenarNumeros() {
    const n1 = parseFloat(document.getElementById("ord1").value);
    const n2 = parseFloat(document.getElementById("ord2").value);
    const n3 = parseFloat(document.getElementById("ord3").value);
  
    const ordenados = [n1, n2, n3].sort((a, b) => a - b);
    document.getElementById("resultado2").innerText = `Ordem crescente: ${ordenados.join(', ')}`;
  }
  
  function verificarPalindromo() {
    let texto = document.getElementById("texto").value;
    let formatado = texto.replace(/\s+/g, '').toLowerCase();
  
    let reverso = formatado.split('').reverse().join('');
    let resultado = (formatado === reverso) ? "É um palíndromo!" : "Não é um palíndromo.";
  
    document.getElementById("resultado3").innerText = resultado;
  }

  function verificarSubconjunto() {
    const palavra1 = document.getElementById("palavra1").value.toLowerCase().trim();
    const palavra2 = document.getElementById("palavra2").value.toLowerCase().trim();
  
    if (!palavra1 || !palavra2) {
      document.getElementById("resultado4").innerText = "erro";
      return;
    }
  
    let subconjunto = true;
    for (let letra of palavra2) {
      if (!palavra1.includes(letra)) {
        subconjunto = false;
        break;
      }
    }
  
    const resultado = subconjunto ? "é um subconjunto" : "não é um subconjunto";
    document.getElementById("resultado4").innerText = resultado;
  }
  