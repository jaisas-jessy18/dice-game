var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageNumber1 = "dice" + randomNumber1 + ".png";
var imageSource1 = "images/" + imageNumber1;
var imageNumber2 = "dice" + randomNumber2 + ".png";
var imageSource2 = "images/" + imageNumber2;
document.querySelector(".img1").setAttribute("src", imageSource1)
document.querySelector(".img2").setAttribute("src", imageSource2)

/* if (randomNumber1 === 1)
    document.querySelector(".img1").setAttribute("src", "images/dice1.png")
else if (randomNumber1 === 2)
    document.querySelector(".img1").setAttribute("src", "images/dice2.png")
else if (randomNumber1 === 3)
    document.querySelector(".img1").setAttribute("src", "images/dice3.png")
else if (randomNumber1 === 4)
    document.querySelector(".img1").setAttribute("src", "images/dice4.png")
else if (randomNumber1 === 5)
    document.querySelector(".img1").setAttribute("src", "images/dice5.png")
else if (randomNumber1 === 6)
    document.querySelector(".img1").setAttribute("src", "images/dice6.png")

 */
if (randomNumber1 > randomNumber2)
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🏆 "
else if (randomNumber2 > randomNumber1)
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆 "
else
    document.querySelector("h1").innerHTML = "It's a draw!! 🤝 "