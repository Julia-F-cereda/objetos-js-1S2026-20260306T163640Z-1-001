const quadradoObjeto = {
    lados: 4,
    area: function(lado){
        return lado*lado
    },
    perimetro: function(lado){
        return this.lados * lado
    }
};

const quadrado = {
    lados: 4,
    area(lado){
        return lado * lado
    },
    perimetro(lado){
        return this.lados * lado
    }
};
console.log(quadrado)


const senai = {
    codigo: 603,
    cidade: 'araraquara'
};
console.log('______________________________________');
console.log(senai);

senai.telefone = 1633035252;
senai.rua = 'Hugo Negrini';
delete senai.rua;
senai.endereco = {rua: 'Hugo Negrini', bairro: 'Quitandinha', numero: '603'}
senai.alunos = ['SESI', 'EEBA', 'comunidade']

senai.endereco.numero = 62;
senai.alunos[2]= 'tecnico';


console.log(senai);
