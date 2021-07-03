var randomno1 = Math.floor(Math.random()*6) + 1;
var randomnoplace1 = "dice" + randomno1 + ".png";
var dice1 = document.querySelectorAll("img")[0].setAttribute('src', randomnoplace1);


var randomno2 = Math.floor(Math.random()*6) +1;
var randomnoplace2 = 'dice' + randomno2 + '.png'
var dice2 = document.querySelectorAll('img')[1].setAttribute('src', randomnoplace2);


if(randomno1>randomno2){
  document.querySelector('h1').innerHTML ='🚩🎌Player 1 Won'
}
else if (randomno2>randomno1){
  document.querySelector('h1').innerHTML ='🚩🎌Player 2 Won'
}
else{
  document.querySelector('h1').innerHTML ='🏳️Draw'
}
 function reload(){
   location.reload();
 }