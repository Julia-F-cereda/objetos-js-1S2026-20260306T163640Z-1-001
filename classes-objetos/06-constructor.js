/*primeiro metodo que vai ser executado quando 'new senai'
exige dados necessarios bem no incio*/
/*nao se usa functionem class*/

class Senai{
    constructor(codigo, cidade, idade) {
        this.codigo = codigo;
        this.cidade = cidade;
        this.idade = idade - '2026';
    }
    dadosEscola(){
        console.log(`unidade: ${this.cidade} | codigo: ${this.codigo}`);
    }
}

/*para passar as informações é só isso:*/
const escola1 = new Senai(603, 'Araraquara', '1900');

escola1.dadosEscola();
