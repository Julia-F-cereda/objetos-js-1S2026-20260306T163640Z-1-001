class Senai{
    codigo;
    cidade;

    descreverEscola(){
        console.log(`O codigo ${this.codigo} pertence a Escola SENAI de ${this.cidade}.`)

    }
}

const senaiAra = new Senai();
senaiAra.codigo = 603;
senaiAra.cidade = 'Araraquara';

const senaiMat = new Senai();
senaiMat.codigo = 145;
senaiMat.cidade = 'Matão';

senaiAra.descreverEscola();
senaiMat.descreverEscola();

