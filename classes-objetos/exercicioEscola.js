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
    constructor(codigo, cidade, construcao, cursos){
        this.codigo = codigo;
        this.cidade = cidade;
        this.cursos = cursos;

        /*atributos */
        this.statusFuncionamento = false;
        this.idade = new Date().getFullYear() - construcao;
    }

    abrirEscola(){
        this.statusFuncionamento = True;
            console.log(`O SENAI: ${this.cidade} está ABERTO`);
        }

    fecharEscola(){
        this.statusFuncionamento = False;
            console.log(`O SENAI: ${this.cidade} está FECHADO`);
        }

    dadosEscola(){
        /*IF TERNARIO */
        const statusText = this.statusFuncionamento ? "ABERTO" : "FECHADO";
        
        console.log(`/===UNIDADE: ${this.cidade}===`);
        console.log(`STATUS ATUAL: ${statusText}`);
        console.log(`IDADE: ${this.idade} | CURSOS: ${this.cursos}`);
        console.log(`=============================================`);
        console.log(`[SISTEMA]: ${statusText}`);
    }
}

const escola1 = new Senai(603, 'Araraquara', '1900', '20');
escola1.dadosEscola();

/*abrir escola */
escola1.abrirEscola();
escola1.dadosEscola();

/*fechar escola */
escola1.fecharEscola();
escola1.dadosEscola();