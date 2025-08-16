// Pega o campo de texto e os radio buttons
const inputTexto = document.getElementById('texto');
const opcoes = document.querySelectorAll('input[name="opcao"]');

// Adiciona evento para quando mudar a seleção
opcoes.forEach(radio => {
    radio.addEventListener('change', () => {
        if (radio.value === 'maiusculas') {
            inputTexto.value = inputTexto.value.toUpperCase();
        } 
        else if (radio.value === 'minusculas') {
            inputTexto.value = inputTexto.value.toLowerCase();
        }
    });
});
