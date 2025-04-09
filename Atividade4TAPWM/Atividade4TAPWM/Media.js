let nome = prompt("Qual é o nome do aluno?");

let primeiraNota = prompt("Primeira nota:")
let segundaNota = prompt("Segunda nota:")
let terceiraNota = prompt("Terceira nota:")

let media = (parseFloat(primeiraNota) + parseFloat(segundaNota) + parseFloat(terceiraNota)) / 3; 
alert("Aluno:"+ nome+"\n Média: " + media +".");
