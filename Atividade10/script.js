    // -- Forma 1: Usando objeto literal --
        const funcionario1 = {
            matricula: "0031432512006",
            nome: "Karina Moraes",
            funcao: "Analista de Sistemas"
        };

    // -- Forma 2: Usando função construtora
        function Funcionario(matricula, nome, funcao) {
            this.matricula = matricula;
            this.nome = nome;
            this.funcao = funcao;
        }

        const funcionario2 = new Funcionario("0031432512015", "Nicolly Silva", "Engenharia da Computação");

    // -- Forma 3: Usando classe 
        class FuncionarioClasse {
            constructor(matricula, nome, funcao) {
                this.matricula = matricula;
                this.nome = nome;
                this.funcao = funcao;
            }
        }

        const funcionario3 = new FuncionarioClasse("0031432512007","Ana Lucia", "Recursos Humano");

    // -- Exibir os dados na tela --
         const saida = document.getElementById('saida');

        saida.innerHTML = `
            <strong>Funcionário 1 - Objeto Literal</strong><br> <br>
            Matrícula: ${funcionario1.matricula}<br> 
            Nome: ${funcionario1.nome}<br>
            Função: ${funcionario1.funcao}<br><br>

            <strong>Funcionário 2 -  Função Construtora</strong><br><br>
            Matrícula: ${funcionario2.matricula}<br>
            Nome: ${funcionario2.nome}<br>
            Função: ${funcionario2.funcao}<br><br>

            <strong>Funcionário 3 - Classe</strong><br> <br>
            Matrícula: ${funcionario3.matricula}<br>
            Nome: ${funcionario3.nome}<br>
            Função: ${funcionario3.funcao}
        `;
