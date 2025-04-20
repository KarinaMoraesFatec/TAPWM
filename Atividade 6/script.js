// Armazena os dados das respostas do formulário
let respostas = [];

// Referências aos elementos da página
const botaoVerResultados = document.getElementById("verResultados");
const botaoFecharResultados = document.getElementById("fecharResultados");
const divResultados = document.getElementById("resultados");

// Evento de envio do formulário
document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio tradicional do formulário (sem recarregar a página)

  // Captura os valores preenchidos pelo usuário
  const idade = parseInt(document.getElementById("idade").value);
  const sexo = document.getElementById("sexo").value;
  const opiniao = parseInt(document.getElementById("opiniao").value);

  // Armazena a resposta no array
  respostas.push({ idade, sexo, opiniao });

  // Limpa os campos do formulário
  document.getElementById("formulario").reset();

  // Exibe o botão "Ver Resultados" após pelo menos 3 respostas
  if (respostas.length >= 3 && botaoVerResultados.classList.contains("hidden")) {
    botaoVerResultados.classList.remove("hidden");
  }
});

// Quando o botão "Ver Resultados" for clicado
botaoVerResultados.addEventListener("click", function () {
  mostrarResultados(); // Gera e exibe os resultados
  divResultados.classList.remove("hidden"); // Mostra a div dos resultados
  botaoFecharResultados.classList.remove("hidden"); // Mostra o botão de fechar
  botaoVerResultados.disabled = true; // Desabilita para evitar múltiplos cliques (opcional)
});

// Quando o botão "Fechar Resultados" for clicado
botaoFecharResultados.addEventListener("click", function () {
  divResultados.classList.add("hidden"); // Esconde a div dos resultados
  botaoFecharResultados.classList.add("hidden"); // Esconde o botão "Fechar Resultados"
  botaoVerResultados.disabled = false; // Reativa o botão "Ver Resultados"
});

// Função para calcular e exibir os resultados da pesquisa
function mostrarResultados() {
  // Cálculos principais
  const mediaIdade = respostas.reduce((soma, p) => soma + p.idade, 0) / respostas.length;
  const maisVelha = Math.max(...respostas.map(p => p.idade));
  const maisNova = Math.min(...respostas.map(p => p.idade));
  const pessimo = respostas.filter(p => p.opiniao === 1).length;
  const otimoBom = respostas.filter(p => p.opiniao >= 3).length;
  const porcentagemOtimoBom = (otimoBom / respostas.length) * 100;

  // Contagem por sexo
  const contagem = { masculino: 0, feminino: 0, outros: 0 };
  respostas.forEach(p => contagem[p.sexo]++);

  // Insere os resultados no HTML
  divResultados.innerHTML = `
    <p><strong>Média de idade:</strong> ${mediaIdade.toFixed(1)} anos</p>
    <p><strong>Pessoa mais velha:</strong> ${maisVelha} anos</p>
    <p><strong>Pessoa mais nova:</strong> ${maisNova} anos</p>
    <p><strong>Quantidade que responderam "péssimo":</strong> ${pessimo}</p>
    <p><strong>Porcentagem "ótimo" ou "bom":</strong> ${porcentagemOtimoBom.toFixed(2)}%</p>
    <p><strong>Quantidade de Homens:</strong> ${contagem.masculino}</p>
    <p><strong>Quantidade de Mulheres:</strong> ${contagem.feminino}</p> 
    <p><strong>Quantidade de Outros:</strong> ${contagem.outros}</p>
  `;
}
    function fecharModal() {
    document.getElementById("modal").style.display = "none";
  }
  