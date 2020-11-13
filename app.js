const possibleAnswers = ["It is certain",
"It is decidedly so",
"Without a doubt",
"Yes – definitely",
"You may rely on it",
"As I see it, yes",
"Most likely",
"Outlook good",
"Yes",
"Signs point to yes",
"Reply hazy, try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on it",
"My reply is no",
"My sources say no",
"Outlook not so good",
"Very doubtful"];


const title = document.querySelector('h1');
const container = document.querySelector('.container');
const ball = document.querySelector('#ball');
const ballImg = document.querySelector('.ballPng');
let message = document.querySelector('#message');

const mouseDown = function(e) {
    ballImg.style.cursor = 'grabbing';
};

const mouseUp = function(e) {
    ballImg.style.cursor = 'grab';
};

const mouseOut = function(e) {
    ballImg.style.cursor = 'grab';
};

const dragStart = function(e) {
    setTimeout(() => (this.className = 'invisible'), 0);
    message.innerText = '';
};

const dragEnds = function() {
    this.className = 'ball';
    this.className += ' ballDrop';
    ballImg.classList = 'ballPng';
    message.innerText = response();
    ball.appendChild(message);
};

// Get a random answer from the list of possible answers
let response = function() {
    let randIndex = Math.floor(possibleAnswers.length * Math.random())
    let answer = possibleAnswers[randIndex];
    return answer
    };

ballImg.addEventListener('mousedown', mouseDown);
ballImg.addEventListener('mouseup', mouseUp);
ballImg.addEventListener('mouseout', mouseOut);
ball.addEventListener('dragstart', dragStart);
ball.addEventListener('dragend', dragEnds);
