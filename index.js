
//Player1

var randomNumer1 = Math.random(); //0-0.9999999
randomNumer1 = randomNumer1 * 6;
randomNumer1 = Math.floor(randomNumer1) + 1;

if(randomNumer1===1){
  document.querySelector(".img1").src="images/dice1.png";
}else if (randomNumer1===2) {
  document.querySelector(".img1").src="images/dice2.png";
}else if (randomNumer1===3) {
  document.querySelector(".img1").src="images/dice3.png";
}
else if (randomNumer1===4) {
  document.querySelector(".img1").src="images/dice4.png";
}else if (randomNumer1===5) {
  document.querySelector(".img1").src="images/dice5.png";
}else if (randomNumer1===6) {
  document.querySelector(".img1").src="images/dice6.png";
}

//Player2
var randomNumer2 = Math.random(); //0-0.9999999
randomNumer2 = randomNumer2 * 6;
randomNumer2 = Math.floor(randomNumer2) + 1;

if(randomNumer2===1){
  document.querySelector(".img2").src="images/dice1.png";
}else if (randomNumer2===2) {
  document.querySelector(".img2").src="images/dice2.png";
}else if (randomNumer2===3) {
  document.querySelector(".img2").src="images/dice3.png";
}
else if (randomNumer2===4) {
  document.querySelector(".img2").src="images/dice4.png";
}else if (randomNumer2===5) {
  document.querySelector(".img2").src="images/dice5.png";
}else if (randomNumer2===6) {
  document.querySelector(".img2").src="images/dice6.png";
}

//Show the winner
if(randomNumer1>randomNumer2){
  document.querySelector("h1").innerHTML="🚩Player 1 won!"
} else if (randomNumer2>randomNumer1) {
  document.querySelector("h1").innerHTML="󠁮󠁢󠁿Player 2 won! 🚩"
}else{
  document.querySelector("h1").innerHTML="Draw!"
}
