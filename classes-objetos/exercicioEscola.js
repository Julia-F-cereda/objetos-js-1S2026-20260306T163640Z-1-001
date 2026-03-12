/* Exercícios:
  1. No molde da classe 'Senai', adicione o atributo 'statusFuncionamento' 
     que deve iniciar sempre como 'false' (escola fechada por padrão).
  2. Crie o método 'abrirEscola()' para alterar o status para 'true' e
     exibir uma mensagem de boas-vindas.
  3. Crie o método 'fecharEscola()' para alterar o status para 'false' e
     avisar que as atividades encerraram.
  4. Teste as funcionalidades nas instâncias criadas.
*/

class Senai{
    constructor(codigo, cidade, construcao, cursos, statusFuncionamento){
        this.codigo = codigo;
        this.cidade = cidade;
        this.idade = new Date().getFullYear() - construcao;
        this.cursos = cursos;
        this.statusFuncionamento = statusFuncionamento.fecharEscola();
    }

    abrirEscola(){
        if (this.statusFuncionamento == True)
            console.log(`STATUS ATUAL: ABERTA`);
        }

    fecharEscola(){
        if (this.statusFuncionamento == False) 
            console.log(`STATUS ATUAL: FECHADA`);
        }

    dados(){
        console.log(`/n===UNIDADE: ${this.cidade}===`);
        console.log(`STATUS ATUAL: ${this.statusFuncionamento.fecharEscola()}`);
        console.log(`IDADE: ${this.idade} | CURSOS: ${this.cursos}`);
        console.log(`=============================================`);
        console.log(`[SISTEMA]: ${this.statusFuncionamento.abrirEscola()}`);
    }
}

const escola1 = new Senai(603, 'Araraquara', '1900', '20','' );
escola1.abrirEscola();