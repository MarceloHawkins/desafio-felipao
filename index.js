//Heroi vamos lá!

//Aqui vai às informações de nosso bravo desbravador das estepes (Variáveis).
let nome = "Mercules";
let xp = 15;
let nivelDoHeroi = "";




//Por favor não aos erros (Caso queiram que nosso heroi ja comece no serasa, só vai aceitar valores a cima de 0)
    if (xp < 0) 
    {
     console.log("Vixi meu filho, algo de errado não esta certo. Que heroi é esse que já começa negativado???");
    return;
     
    }
    
    //Se eu subir para nivel 10 eu vou ser...Ops(Se "nivelDoHeroi for maior ou igual a 0 , entrará no if
   // e a variável xp se encaixará na posição correspondente).
    if( xp <= 1000) {
        nivelDoHeroi = "Ferro";
    } else if(xp >= 1001 &&  xp <= 2000) {
        nivelDoHeroi = "Bronze";
    }
     else if(xp >= 2001 && xp <= 5000) {
        nivelDoHeroi = "Prata";
    }
    else if(xp >= 5001 &&  xp <= 7000) {
        nivelDoHeroi = "Ouro";
    }
    else if(xp >= 7001 && xp <= 8000) {
        nivelDoHeroi = "Platina";
    }
    else if(xp >= 8001 && xp <= 9000) {
        nivelDoHeroi = "Ascendente";
    }
    else if(xp >= 9001 &&  xp <= 10000) {
        nivelDoHeroi = "Imortal";
    }
    else  {
        nivelDoHeroi = "Radiante";
    }
    

//Minha aventura já acabou?!?(E por fim, o console.log exibindo o nome e o nivel do Heroi)
console.log("O Herói de nome "+ nome + " está no nível de " + nivelDoHeroi);



