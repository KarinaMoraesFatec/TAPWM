function validar() {
  const form = document.meuForm;
  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const comentario = form.comentario.value.trim();
  const radios = form.visita;
  let visitaSelecionada = "";

  // Validação Nome
  if (nome.length < 10) {
    alert("O nome deve ter pelo menos 10 caracteres!");
    return false;
  }

  // Validação E-mail
  if (email === "") {
    alert("Digite um e-mail válido!");
    return false;
  }

  // Validação Comentário
  if (comentario.length < 20) {
    alert("O comentário deve ter no mínimo 20 caracteres!");
    return false;
  }

  // Verifica se selecionou pesquisa
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      visitaSelecionada = radios[i].value;
      break;
    }
  }

  if (visitaSelecionada === "") {
    alert("Por favor, responda a pesquisa!");
    return false;
  }

  // Mensagem final corrigida
  if (visitaSelecionada === "sim") {
    alert("Volte sempre a esta página!");
  } else {
    alert("Que bom que você voltou a visitar esta página!");
  }

  return true;
}
