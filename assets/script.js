
// Selects element by class
var timeEl = document.querySelector(".time");

var containerEl = document.querySelector(".container");

var mainQEL = document.querySelector(".mainQ");

var option1El = document.querySelector(".option1");

var option2El = document.querySelector(".option2");

var option3El = document.querySelector(".option3");

var option4El = document.querySelector(".option4");


var startBtn = document.getElementById("startbtn");
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
    correctAnswer: 'd'
  },
  {
    question: 'How do you select a element by Id?',
    answers:{
      a: 'document.id',
      b: 'var id',
      c: 'getElementById("id")',
      d: 'var "variable" = document.getElementById("id");'
    },
    correctAnswer: 'd'
  },
  {
    question: 'How do you console log?',
    answers:{
      a: 'console',
      b: 'console.log',
      c: 'console.addText',
      d: 'Input.console'
    },
    correctAnswer: 'b'
  },
  {
    question: 'How do you select a element by class?',
    answers:{
      a: 'var "variable" = document.querySelector("class of element");',
      b: 'var class',
      c: 'getElementByclass("class")',
      d: 'document.getClass'
    },
    correctAnswer: 'a'
  }
];


var secondsLeft = 91;

function setTime() {
  // Sets interval in variable
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.innerHTML = secondsLeft + "";
    console.log(timeEl)

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
        clearInterval(timerInterval);
    }

    }, 1000);
};



startBtn.addEventListener("click", startGame) 

function startGame(){
  setTime()
  containerEl.setAttribute("class", "hidden")
  mainQEL.setAttribute("class", "reveal")
  mainQEL.textContent = questions[0].question;
  option1El.textContent = questions[0].answers.a;
  option2El.textContent = questions[0].answers.b;
  option3El.textContent = questions[0].answers.c;
  option4El.textContent = questions[0].answers.d;
  
};