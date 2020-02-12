let json = `[{"nome":"Bob","idade":5,"raca":"Cachorro","dono":"Vinicius","sexo":"Macho","peso":3.5,"vacinado":true,"servicos":["Banho","Vacina"]},{"nome":"xuxu","idade":5,"raca":"Cachorro","dono":"Vinicius","sexo":"Macho","peso":3.5,"vacinado":true,"servicos":["Banho","Vacina"]},{"nome":"Xorão","idade":5,"raca":"Cachorro","dono":"Vinicius","sexo":"Macho","peso":3.5,"vacinado":true,"servicos":["Banho","Vacina"]}]`

let darEntrada = (json)=>{
    let objJson = JSON.parse(json);
    /*for(let i = 0; i < obJson.length; i++){
        listPet.push(obJson[i]);
    }*/
    listPet = [...listPet, ...objJson];
}


let listPet = [{
    nome:'mimi',
    idade:2,
    raca:'raça teste',
    dono:'luana',
    sexo:'feminino',
    peso:10,
    vascinas:true,
    servicos:{
        servicoA:true,
        servicoB:false,
        servicoC:true,
    }
}]
darEntrada(json)

let cadPet = (nome,idade,raca,dono,sexo,peso,vascinas,servico) => {
       let obj = {
        nome:nome,
        idade:idade,
        raca:raca,
        dono:dono,
        sexo:sexo,
        peso:peso,
        vascinas:vascinas,
        servicos:servico
    }
    listPet.push(obj);
}
function vizualizarPet(){
    for(let i = 0; i < listPet.length; i++){
        console.log("Nome: "+listPet[i].nome);
        console.log("Raça: "+listPet[i].raca);
        console.log("Dono: "+listPet[i].dono);
        if(listPet[i].vascinas){
            console.log("estaVacinado\n");
        }else{
            console.log("não esta vascinado\n");
        }
    }
}
/*
cadPet('nome do pet', 2,'uma raça qualquer','eu','feminino', 21, true, [1,2,3]);

let verificaPet = pet =>{
    for(let i = 0; i < listPet.length; i++){
        if(listPet[i].nome == pet.nome){
            console.log("o pet ja foi criado\n");
            return i;
        }
    }
    listPet.push(pet);
    return listPet.length-1;
}
let darVacina = pet =>{
    let idPet = verificaPet(pet);
    console.log(`id do meu pet ${idPet}`);
    switch(listPet[idPet].vascinas){
        case true:
            console.log('o pet ja foi vascinado');
            break;
        case false:
            listPet[idPet].vascinas = true;
            console.log('pronto seu pet acabou de tomar vascina')
            break;
    }
}
/*
console.log(listPet[1]);
vizualizarPet();
console.log('___');
*//*
let umPetQualquer = {
    nome:'lulu',
    idade:2,
    raca:'raça teste',
    dono:'luana',
    sexo:'feminino',
    peso:10,
    vascinas:false,
    servicos:{
        servicoA:true,
        servicoB:false,
        servicoC:true,
    }};
    darVacina(umPetQualquer);
vizualizarPet();
*/
darEntrada(json);
vizualizarPet()