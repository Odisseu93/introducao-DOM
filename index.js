console.log("Mensagem!");
//window.document.write(document.URL);
//let p1 = window.document.getElementsByTagName("p") [1];
// selecionou o primeiro elemento p (inicia no 0) e jogou na var p1
/*

p1 agora é um objeto html 
*/
//window.document.write("está escrito assim " + p1.innerText); // escreve o text de p1 na tela 
//window.document.write("está escrito assim " + p1.innerHTML); // escreve o text(com a formatacao HTML) de p1 na tela 
//p1.style.color ="Red";
/*
O objeto p1 altera a propriedade style.color (fonte vermelha)
*/
//let corpo = window.document.body;
/* 
a variável corpo recebe o a tag html <body>
*/
//corpo.style.background = "#CCCCCC";
/*
O objeto corpo altera a propriedade style.background (fundo cinza)
*/
//corpo.style.color = "black";
/*
O objeto corpo altera a propriedade style.color (fonte preta)
*/

//let d = window.document.getElementById("msg");
//d.style.background = "green";
/*
document.getElmentById() seleciona o elemento pelo ID
*/

/*
quando estiver no plural getElement estiver no plural , tem que colocar a posição entre []
exemplo: window.document.getElementsByName("msg")[0] 
*/

//let d = window.document.getElementsByName("msg")[0];
//d.style.background = "green";
/*
document.getElmentsByName() seleciona o elemento pelo name
*/

//let elementsByClass = document.getElementsByClassName("test")[];
//window.document.write(elementsByClass.innerHTML);
//elementsByClass.style.background = "red";
/*
document.getElmentByClassName() seleciona o elemento pela class
*/

/*
selecionado por elementos pelo selector
(querySelector() e querySelectorAll()),
esta forma de selecionar os elementos é recomendável pela maioria dos manuais.
Estas propriedades são mais recentes então, não todos navegadores suportam elas
*/

//querySelector()
//let qs = window.document.querySelector("p.msg");
//qs.style.background = "red";

/*
O  querySelectorAll() é acessado  como array
*/


//let qsa = window.document.querySelectorAll(".msg");

//qsa[1].style.background = "red";

//for(i=0;i<qsa.length;i++){
  //window.document.write(qsa[i].innerHTML +"<br>");
 // qsa[i].style.background = "red";
//}

