
class Calculadora {
    constructor(numIni){
        this.resultado = numIni;
        console.log(`seu valor inicial é ${numIni}`);
    }
    somar(num){
        this.resultado += num;
        this.resultadoFim();
    }
    subtrair(num){
        this.resultado -= num;
        this.resultadoFim();
    }
    dividir(num){
        this.resultado /= num;
        this.resultadoFim();
    }
    multiplicar(num){
        this.resultado *= num;
        this.resultadoFim();
    }
    resultadoFim(){
        console.log(`seu valor agora eh ${this.resultado}`);
    }
}
var calc = new Calculadora(2);
calc.somar(6);
calc.subtrair(4);
calc.multiplicar(2);
calc.dividir(4);













/*

//minha funcao recebe outra por parametro e executa ela apenas e depois da um aviso dizendo que ela foi executada
function callback(funcaoRecebida){
    //a função que foi recebida é executada ela é executada como uma chamada normal de função
    funcaoRecebida();
    
    console.log('pronto executei a função recebida');
}
//chamo minha função callback que recebe uma função anonima por parametro (arrow function)
callback(()=>{console.log('oi eu sou a função de callback recebida e sou tambem uma arow function')});
*/









/*

//aqui defino minha função de intervalo toda vez que executo um setInterval ele me retorna um valor que é o indentificador daquele intervalo no caso aqui "idMeuIntervalo"
let idMeuIntervalo = setInterval(()=>{console.log('vc é o amor da minha vida')}, 3000);
//aqui usei um setTimeout pra depois de 7000 milisegundos ele executar um clear interval na variavel "idMeuIntervalo" ai com isso ele para a execução do meu intervalo
setTimeout(()=>{ clearInterval(idMeuIntervalo); }, 7000);
*/

/*
let obj = { 
    nome:"felipe", 
    idade:20,
    namorada:"luana"
}
let listaJson = [obj, obj , obj , obj ];
let meuObjJson = JSON.stringify(listaJson);
console.log(meuObjJson);
*/