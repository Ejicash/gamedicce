var randomNumber0ne = Math.floor(Math.random() * 6 + 1); 
var randomImageSource0ne = "images/dice" + randomNumber0ne + ".png";
var image0ne = document.querySelectorAll("img")[0].setAttribute("src",randomImageSource0ne);

var randomNumberTwo = Math.floor(Math.random() * 6 +1);
var randomImageSourceTwo = "images/dice" + randomNumberTwo + ".png";
var imageTwo = document.querySelectorAll("img")[1].setAttribute("src",randomImageSourceTwo);

if (randomNumber0ne > randomNumberTwo) {
    document.querySelector("h1").innerHTML = "Player 1 wins! 🚩";
}
else if(randomNumberTwo > randomNumber0ne) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw! 🏳️";
}