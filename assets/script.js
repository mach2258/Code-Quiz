
// Selects element by class
var timerInterval

var timeEl = document.querySelector(".time");

var containerEl = document.querySelector(".container");

var mainQEL = document.querySelector(".mainQ");

var QcontainerEl = document.querySelector(".Qcontainer")

var option1El = document.querySelector(".option1");

var option2El = document.querySelector(".option2");

var option3El = document.querySelector(".option3");

var option4El = document.querySelector(".option4");

var startBtn = document.getElementById("startbtn");

var recordsEl = document.querySelector(".records")

var highLink = document.getElementById("highscores")

var index = 0

var user = prompt('What is thy name?')

var highscoreEl = document.querySelector('.highscore')

var highscores = []

console.log(startBtn)
// Selects element by id
var questions = [
  {
    question: 'What is the difference between Java and Javascript?',
    answers:{
      a: 'Theres not a difference',
      b: 'Java is a scripting language',
      c: 'Javascript uses the extention js',
      d: 'Java is a strongly typed language'
    },
    correctAnswer: 'Java is a strongly typed language'
  },
  {
    question: 'How do you select a element by Id?',
    answers:{
      a: 'document.id',
      b: 'var id',
      c: 'getElementById("id")',
      d: 'var "variable" = document.getElementById("id");'
    },
    correctAnswer: 'var "variable" = document.getElementById("id");'
  },
  {
    question: 'How do you console log?',
    answers:{
      a: 'console',
      b: 'console.log',
      c: 'console.addText',
      d: 'Input.console'
    },
    correctAnswer: 'console.log'
  },
  {
    question: 'How do you select a element by class?',
    answers:{
      a: 'var "variable" = document.querySelector("class of element");',
      b: 'var class',
      c: 'getElementByclass("class")',
      d: 'document.getClass'
    },
    correctAnswer: 'var "variable" = document.querySelector("class of element");'
  }
];

highscoreEl.setAttribute("class", "hidden")

var secondsLeft = 31;

function setTime() {
    timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.innerHTML = secondsLeft + "";
    if(secondsLeft === 0) {
        clearInterval(timerInterval);
    }

    }, 1000);
};



startBtn.addEventListener("click", startGame);

option1El.addEventListener("click", questionHandler); 

option2El.addEventListener("click", questionHandler);

option3El.addEventListener("click", questionHandler);

option4El.addEventListener("click", questionHandler); 

function startGame(){
  setTime()
  containerEl.setAttribute("class", "hidden")
  QcontainerEl.classList.add("reveal")
  setQuestions();
  
};

function setQuestions() {
  if(index < questions.length){
  mainQEL.textContent = questions[index].question;
  option1El.textContent = questions[index].answers.a;
  option2El.textContent = questions[index].answers.b;
  option3El.textContent = questions[index].answers.c;
  option4El.textContent = questions[index].answers.d;
  }else{
    endGame();
  }
};

function getHighscore(){
  if (localStorage.getItem("highscore") === null)
  {
    return highscores;
  }else
  {
    return JSON.parse(localStorage.getItem("highscore"));
  }
}


function setHighscore(){
  (localStorage.setItem("highscore", JSON.stringify(highscores)))
}

highLink.addEventListener("click", outputHighscore)

function outputHighscore(){
  containerEl.setAttribute("class", "hidden")
  QcontainerEl.classList.add("hidden")
  QcontainerEl.classList.remove("reveal")
  highscoreEl.setAttribute("class", "reveal")
  highscores = getHighscore()
  if(secondsLeft != 31){
  var person = {
    name: user,
    score: secondsLeft
  }
  highscores.push(person)
  }
  highscores = highscores.sort(function(a,b){return a.score - b.score});
  for (let index = 0; index < highscores.length; index++) {
    const person = highscores[index];
    var listItem = document.createElement("li");
    listItem.textContent = `name: ${person.name} score:${person.score}`;
    recordsEl.appendChild(listItem)
    setHighscore()
  }
}

function endGame() {
  clearInterval(timerInterval);
  outputHighscore()
}

function questionHandler(event){
  event.stopPropagation()
  console.log(event.target.innerHTML)
  if(event.target.innerHTML == questions[index].correctAnswer){
  index++
  setQuestions()
    
  }else {
    secondsLeft = secondsLeft -10
    index++
    setQuestions()
  }
}