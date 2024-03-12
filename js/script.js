function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
let emails = [
    'abcdef@gmail.com',
    'ghijk@gmai.com',
    'lmnopq@gmail.com',
    'rstuv@gmail.com',
    'wxyz@gmail.com',
    'mario.rossi@gmail.com'
];
let resultSearch = document.getElementById('result-search');   
let buttonSearch = document.getElementById('searchmail');
buttonSearch.addEventListener('click', function(){
    let userWord= document.getElementById('ds-email').value.toLowerCase();
    let matchMail = false;
    for(let i = 0; i < emails.length; i++){
        if(userWord  === emails[i]){
            matchMail = true;            
        }
    
    } 
    if(matchMail){
        resultSearch.innerHTML= `la mail ${userWord} è presente nell'archivio`;
    }else{
        resultSearch.innerHTML= `la mail ${userWord} NON è presente nell'archivio`;
    }
})    


let dadoBtn = document.getElementById('dado-btn');
let resultDado = document.getElementById('result-dado');

dadoBtn.addEventListener('click', function(){
let usernumber = randomNumber(1,6);
let pcNumber = randomNumber(1,6);
})

if (usernumber > pcNumber){

} else if 













/*
let miavariabile = 'stringa';
let numero =  23;
let mybool = true;

//undefined
//null

//nuovo tipo Array
let classe123 = [
    'Nicola Filaninno',
    'Matteo Ruffa',
    'Federica Gallo',
    'Eldin Balje',
    'Sasha Politi'
];

let numeri = [[2,6,8], 10, 9]; 

//console.log(classe123);
//console.log(classe123.length);
//console.log(classe123[0]);

//console.log(numeri[0][1]);
// let primoElemento = classe123[0];
// let UltimoElemento = classe123[lunghezza - 1];
// let lunghezza = classe123.push('Angelo Ciulla');

// console.log(lunghezza);

//inserisco un elemento nell'array in coda
classe123.push('Angelo Ciulla');

//inserisco un elemento nell'array in cima
classe123.unshift('Andrea Sgura');
//console.log(classe123);

//elimina l'ultimo elemento dell'array
classe123.pop();

// let exultimo =classe123.pop();
// console.log(exultimo);

//elimina il primo elemento dell'array
classe123.shift();

//console.log(classe123);
// ciclo for su classe123
// for(let i = 0; i < classe123.length; i++){
//     let allievo = classe123[i];
//     console.log(allievo);
// }


/* 
Scrivere un array di numeri
Stampare tutti i numeri nell'array

*/
let mynumbers = [1,3,7,5,9,2,8];//......

// console.log(mynumbers);

// console.log(mynumbers[0]);

// for(let i = 0; i < mynumbers.length; i++){
//   console.log(mynumbers[i]);
// }

// for(let i = mynumbers.length - 1; i >= 0; i--){
//   console.log(mynumbers[i]);
// }
// for(let i = 0; i < mynumbers.length; i++){

//     if(mynumbers[i] % 2 !== 0){
//         console.log(mynumbers[i]);
//     }
// }

// let userWord = 'Sedia';
// let trovato = false;

// let text = ['Tavolo','Sedia','Computer', 'Mouse','Monitor'];
// for(let i = 0; i < text.length; i++){
//    if(userWord  === text[i]){
//     trovato = true;
//    } 
// }

// if(trovato){
//     console.log('Si ce l\'ho');
// } else {
//     console.log('Non ce l\'ho');
// }


// let numeriRandom = [];
// console.log(numeriRandom);

// let numeridaInserire = 10;
// // getRndInteger(min, max)

// for(let i = 0; i < 10; i++ ){
//     numeriRandom.push(getRndInteger(1,100));
// }

// console.log(numeriRandom);





// const button = document.querySelector('.btn');

// button.addEventListener('click', function(){
//     let text = ['Tavolo','Sedia','Computer', 'Mouse','Monitor'];
//     let userWord = document.getElementById('userValue').value;
//     let trovato = false;
//     for(let i = 0; i < text.length; i++){
//         if(userWord.toLowerCase() === text[i].toLowerCase()){
//             trovato = true;
//         }
//     }
//   const result = document.getElementById('result');
//     if(trovato){
//         result.innerHTML = 'Disponibile';
//     } else {
//         result.innerHTML = 'Non Disponibile';
//     }
// })

let images = [
    'fritz',
    'fuffy',
    'trilly'
];
const result = document.getElementById('result');
/* <img src="images/cats/fritz.jpg" alt="fritz" class="img-fluid d-block"> */
let tmpHtml = '';
// for(let i = 0; i < images.length; i++){
//     let img = document.createElement('img');
//     img.setAttribute('src',`images/cats/${images[i]}.jpg`);
//     img.setAttribute('alt', images[i]);
//     img.className = 'img-fluid d-block';
//     result.append(img);
//   tmpHtml += `
//   <img src="images/cats/${images[i]}.jpg" alt="${images[i]}" class="img-fluid d-block">
//   `;
//}
//console.log(tmpHtml);

//result.innerHTML = tmpHtml;
//  const boxes = document.getElementsByClassName('box');
//  console.log(boxes);

//  for(let i = 0; i < boxes.length; i++){
//     let index = i + 1;
//     if(index % 2 === 0){
//         boxes[i].classList.add('bg-success');
//     } else {
//         boxes[i].classList.add('bg-black');
//     }
    
//  }
