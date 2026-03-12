
class Senai{
    constructor(codigo, cidade, anoConstru, cursos) {
        this.codigo = codigo;
        this.cidade = cidade;
        this.idade = new Date().getFullYear() - anoConstru;
        this.cursos = cursos
    }
    dadosEscola(){
        console.log(`/n=== RELATORIO DE CADATSRO: ${this.cidade.toUpperCase()}===`);
        console.log(`codigo: ${this.codigo}`);
        console.log(`idade da escola:${this.anoConstru} ${this.idade}`);
    }
}

/*outra maneira de calcular idade
this.idade = new date().getFullYear() - anoConstrucao;

/*COMPARAÇÃO ENTRE ESCOLAS*/
const compararEsc = (e1, e2) => {
    console.log(`>comparando quantia de cursos: ${e1.cidade} x ${e2.cidade}...`)

    if (e1.cursos > e2.cursos) {
        console.log(`resultado: ${e1.cidade} possui mais cursos`); /*se a escola 1 possuir mais cursos*/
    }else if (e2.cursos > e1.cursos)/*a esocla 2 tiver mais*/{
        console.log(`resultado: ${e2.cidade} possui mais cursos`);
    } else{
        console.log(`resultado: As duas unidades possuem a mesma quantia de cursos`)
    }
    console.log(`status: ${e1.cidade} (${e1.cursos}) | ${e2.cidade} (${e2.cursos})\n`)
}

/*para passar as informações:*/
const escola1 = new Senai(603, 'Araraquara', '1900', '20');
const escola2 = new Senai(102, 'Valinhos', '2000', '10');

escola1.dadosEscola();
escola2.dadosEscola();