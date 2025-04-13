function jogar(escolhaUsuario) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
  
    document.getElementById("resultado").innerHTML = "🤖 O computador está escolhendo...";
    document.getElementById("btn-reiniciar").style.display = "none"; // Esconder botão enquanto espera
  
    setTimeout(() => {
      const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
  
      let resultado = `1- Você escolheu: ${escolhaUsuario}<br><br>`;
      resultado += `2- Computador escolheu: ${escolhaComputador}<br><br>`;
  
      if (escolhaUsuario === escolhaComputador) {
        resultado += "Resultado: Empate!";
      } else if (
        (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra')
      ) {
        resultado += "Resultado: Você venceu! 🎉";
      } else {
        resultado += "Resultado: Que pena, você perdeu! 😢";
      }
  
      // Mostrar resultado final e botão de reiniciar
      document.getElementById("resultado").innerHTML = resultado;
      document.getElementById("btn-reiniciar").style.display = "inline-block";
    }, 3000); // 3 segundos de suspense
  }
  
  function reiniciarJogo() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("btn-reiniciar").style.display = "none";
  }
  
  function fecharModal() {
    document.getElementById("modal").style.display = "none";
  }
  