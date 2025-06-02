/* ==== PARTE 1 - Retângulo ==== */

// Função construtora para Retângulo
function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    // Método para calcular a área
    this.calcularArea = function() {
        return this.base * this.altura;
    }
}

// Entrada de dados via prompt
const base = parseFloat(prompt("Digite a base do retângulo:"));
const altura = parseFloat(prompt("Digite a altura do retângulo:"));

// Cria objeto retângulo
const meuRetangulo = new Retangulo(base, altura);

// Calcula a área
const areaRetangulo = meuRetangulo.calcularArea();


/* ==== PARTE 2 - Contas Bancárias ==== */

// Classe principal Conta
class Conta {
    constructor(correntista, banco, numeroConta, saldo) {
        this._correntista = correntista;
        this._banco = banco;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }

    // Getters
    get correntista() { return this._correntista; }
    get banco() { return this._banco; }
    get numeroConta() { return this._numeroConta; }
    get saldo() { return this._saldo; }

    // Setters
    set correntista(valor) { this._correntista = valor; }
    set banco(valor) { this._banco = valor; }
    set numeroConta(valor) { this._numeroConta = valor; }
    set saldo(valor) { this._saldo = valor; }
}

// Classe Conta Corrente (herda Conta)
class Corrente extends Conta {
    constructor(correntista, banco, numeroConta, saldo, saldoEspecial) {
        super(correntista, banco, numeroConta, saldo);
        this._saldoEspecial = saldoEspecial;
    }

    get saldoEspecial() { return this._saldoEspecial; }
    set saldoEspecial(valor) { this._saldoEspecial = valor; }
}

// Classe Conta Poupança (herda Conta)
class Poupanca extends Conta {
    constructor(correntista, banco, numeroConta, saldo, juros, dataVencimento) {
        super(correntista, banco, numeroConta, saldo);
        this._juros = juros;
        this._dataVencimento = dataVencimento;
    }

    get juros() { return this._juros; }
    set juros(valor) { this._juros = valor; }

    get dataVencimento() { return this._dataVencimento; }
    set dataVencimento(valor) { this._dataVencimento = valor; }
}


/* ==== Entrada de dados via prompt ==== */

// Dados da conta corrente
const correntistaCorrente = prompt("Digite o nome do correntista (Corrente):");
const bancoCorrente = prompt("Digite o banco (Corrente):");
const numeroContaCorrente = prompt("Digite o número da conta (Corrente):");
const saldoCorrente = parseFloat(prompt("Digite o saldo (Corrente):"));
const saldoEspecial = parseFloat(prompt("Digite o saldo especial:"));

// Cria objeto Corrente
const contaCorrente = new Corrente(
    correntistaCorrente, bancoCorrente, numeroContaCorrente, saldoCorrente, saldoEspecial
);

// Dados da conta poupança
const correntistaPoupanca = prompt("Digite o nome do correntista (Poupança):");
const bancoPoupanca = prompt("Digite o banco (Poupança):");
const numeroContaPoupanca = prompt("Digite o número da conta (Poupança):");
const saldoPoupanca = parseFloat(prompt("Digite o saldo (Poupança):"));
const juros = parseFloat(prompt("Digite os juros da poupança (%):"));
const dataVencimento = prompt("Digite a data de vencimento da poupança:");

// Cria objeto Poupança
const contaPoupanca = new Poupanca(
    correntistaPoupanca, bancoPoupanca, numeroContaPoupanca, saldoPoupanca, juros, dataVencimento
);


/* ==== Preencher os dados nas seções do HTML ==== */

// Retângulo
document.getElementById('retangulo').innerHTML = `
    Base: ${meuRetangulo.base} <br>
    Altura: ${meuRetangulo.altura} <br>
    Área: ${areaRetangulo}
`;

// Conta Corrente
document.getElementById('contaCorrente').innerHTML = `
    Correntista: ${contaCorrente.correntista} <br>
    Banco: ${contaCorrente.banco} <br>
    Número da Conta: ${contaCorrente.numeroConta} <br>
    Saldo: ${contaCorrente.saldo} <br>
    Saldo Especial: ${contaCorrente.saldoEspecial}
`;

// Conta Poupança
document.getElementById('contaPoupanca').innerHTML = `
    Correntista: ${contaPoupanca.correntista} <br>
    Banco: ${contaPoupanca.banco} <br>
    Número da Conta: ${contaPoupanca.numeroConta} <br>
    Saldo: ${contaPoupanca.saldo} <br>
    Juros: ${contaPoupanca.juros}% <br>
    Data de Vencimento: ${contaPoupanca.dataVencimento}
`;
