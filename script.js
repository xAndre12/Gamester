let gameWallpaper = document.querySelector(".game-wallpaper");
let start = document.querySelector(".start");
let text = document.querySelector(".game-text");
let layout = document.querySelector(".layout");
let back = document.querySelector(".back");

const arrowRight = document.querySelector(".arrow-right");
const arrowLeft = document.querySelector(".arrow-left");

let i = 0;

gameWallpaper.style.display = "flex";

const imgs = [
  {
    img: "./imgs/flappy-birds-2.0.png",
    url: "https://xandre12.github.io/flappy-birds-2.0/",
    text: "A copy of Flappy Birds, but you can shoot rockets by pressing click, jump with space ",
  },
  {
    img: "./imgs/fruit-ninja.png",
    url: "https://xandre12.github.io/fruit-ninja/",
    text: "Fruit-ninja 2.0 click on the fruits, but not on the bombs",
  },
  {
    img: "./imgs/make-your-character.png",
    url: "https://xandre12.github.io/make-your-character/",
    text: "Create your own character ",
  },
  {
    img: "./imgs/memory-card-game.png",
    url: "https://xandre12.github.io/Memory-Card-Game/",
    text: "Match the cards by clicking on them",
  },
  {
    img: "./imgs/minigame-fight.png",
    url: "https://xandre12.github.io/minigame-fight/",
    text: "Fight against each other, use space for attacks and wasd and arrows for movement",
  },
  {
    img: "./imgs/rock-paper-scissors.png",
    url: "https://xandre12.github.io/Rock-Paper-Scissors/",
    text: "Rock paper cissors against AI",
  },
  {
    img: "./imgs/rotate-puzzle.png",
    url: "https://xandre12.github.io/rotate-puzzle/",
    text: "Flick the pictures to solve the puzzle",
  },
  {
    img: "./imgs/slap-it.png",
    url: "https://xandre12.github.io/Slap-it/",
    text: "Slap the mosquitos by clicking on them, but let the butterflies live",
  },
  {
    img: "./imgs/space-invaders.png",
    url: "https://xandre12.github.io/space-invaders/",
    text: "Attack the aliens by sooting lasers with space",
  },
  {
    img: "./imgs/te-pui-cu-blondele.png",
    url: "https://xandre12.github.io/Te-pui-cu-blondele/",
    text: "Answer the questions correctly, and Dan Negru will be happy",
  },
  {
    img: "./imgs/typing-speed-test.png",
    url: "https://xandre12.github.io/typing-speed-test/",
    text: "Type the text above as fast as you can and see how fast you type",
  },
  {
    img: "./imgs/virtual-pet.png",
    url: "https://xandre12.github.io/Virtual-pet/",
    text: "Feed wash and take care of your monkey",
  },
  {
    img: "./imgs/whack-a-mole.png",
    url: "https://xandre12.github.io/whack-a-mole/",
    text: "Wack the moles by clicking on them, see how fast you are",
  },
  {
    img: "./imgs/x-o.png",
    url: "https://xandre12.github.io/X-O/",
    text: "Play X-O with a friend",
  },
];

let gameUrl = "https://xandre12.github.io/fruit-ninja/";

start.addEventListener("click", () => {
  gameWallpaper.style.display = "none";
  layout.style.display = "flex";
  if (start.innerHTML === "START") {
    window.open(gameUrl);
  }
  start.innerHTML = "START";
});

arrowLeft.addEventListener("click", () => {
  if (gameWallpaper.style.display === "flex") {
    i++;
    if (i === 14) {
      i = 0;
    }
    gameWallpaper.src = imgs[i].img;
    text.innerHTML = imgs[i].text;
    gameUrl = imgs[i].url;
  }
});
arrowRight.addEventListener("click", () => {
  if (gameWallpaper.style.display === "flex") {
    i--;
    if (i === -1) {
      i = 13;
    }
    gameWallpaper.src = imgs[i].img;
    text.innerHTML = imgs[i].text;
    gameUrl = imgs[i].url;
  }
});
back.addEventListener("click", () => {
  if (layout.style.display === "flex") {
    layout.style.display = "none";
    gameWallpaper.style.display = "flex";
    start.innerHTML = "VIEW";
  }
});
