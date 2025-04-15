function jogar(escolhaUsuario) {
  const opcoes = ['pedra', 'papel', 'tesoura'];
  
  document.getElementById("resultado").innerHTML = "<br>🤖 O computador está escolhendo...";

  // Esconder o botão enquanto espera
  document.getElementById("btn-reiniciar").style.display = "none"; 
  
  setTimeout(() => {
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    // Criando as imagens para o resultado
    let resultado = `<br>1- Você escolheu: <img src="img/${escolhaUsuario}.png" alt="${escolhaUsuario}" class="opcao-imagem"><br><br>`;
    resultado += `2- Computador escolheu: <img src="img/${escolhaComputador}.png" alt="${escolhaComputador}" class="opcao-imagem"><br><br>`;
    
    // Determinando o resultado
    if (escolhaUsuario === escolhaComputador) {
      resultado += "Resultado: Empate!";
    } else if (
      (escolhaUsuario === 'resultadopedra.png' && escolhaComputador === 'tesoura.png') ||
      (escolhaUsuario === 'tesoura.png' && escolhaComputador === 'papel.png') ||
      (escolhaUsuario === 'papel.png' && escolhaComputador === 'pedra.png')
    ) {
      resultado += "Resultado: Você venceu! 🎉";
    } else {
      resultado += "Resultado: Que pena, você perdeu! 😢";
    }

    // Mostrar o resultado final e o botão de reiniciar
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
