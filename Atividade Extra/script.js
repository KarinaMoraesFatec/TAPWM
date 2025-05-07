function ex1() {
    let n = [
      document.getElementById('n1').value.trim(),
      document.getElementById('n2').value.trim(),
      document.getElementById('n3').value.trim()
    ];
  
    if (n.some(num => isNaN(num) || num === '')) {
      document.getElementById('res1').innerText = "Insira 3 números válidos.";
      return;
    }
  
    n = n.map(Number); // Convertendo para números
  
    // Calculando a soma, o quadrado e outros valores
    let soma = Math.max.apply(null, [0].concat(n)) + Math.min.apply(null, [0].concat(n)) + n.reduce((a, b) => a + b) - Math.max.apply(null, [0].concat(n)) - Math.min.apply(null, [0].concat(n));
    let quadrado1 = Math.pow(n[0], 2);
    let quadrado2 = Math.pow(n[1], 2);
  
    document.getElementById('res1').innerText = 
      `Soma: ${soma}, Quadrado 1º: ${quadrado1}, Quadrado 2º: ${quadrado2}`;
}

  
  function ex2() {
    let letras = [
      document.getElementById('l1').value.trim().toLowerCase(),
      document.getElementById('l2').value.trim().toLowerCase(),
      document.getElementById('l3').value.trim().toLowerCase(),
      document.getElementById('l4').value.trim().toLowerCase(),
      document.getElementById('l5').value.trim().toLowerCase()
    ];
  
    if (letras.some(l => !/^[a-z]$/.test(l))) {
      document.getElementById('res2').innerText = "Insira 5 letras válidas.";
      return;
    }
  
    let palavras = [];
    let contador = 0;
  
    while (palavras.length < 10 && contador < 1000) {
      let nova = '';
      let indices = [0, 1, 2, 3, 4];
  
      for (let i = indices.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = indices[i];
        indices[i] = indices[j];
        indices[j] = temp;
      }
  
      for (let i = 0; i < indices.length; i++) {
        nova += letras[indices[i]];
      }
  
      let existe = false;
      for (let i = 0; i < palavras.length; i++) {
        if (palavras[i] === nova) {
          existe = true;
          break;
        }
      }
  
      if (!existe) {
        palavras.push(nova); // uso do push
      }
  
      contador++;
    }
  
    document.getElementById('res2').innerText = palavras.join(', ');
  }
  
  