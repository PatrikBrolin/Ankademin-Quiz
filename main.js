const questionsData = [
  {
    question: "What's the biggest animal in the world?",
      a: "Elephant",
      b: "Blue Whale", 
      c: "Giraph",
      correct: "b",
      type: "radio"
  },
  {
    question: "What country is apple from?",
      a: "USA",
      b: "China", 
      c: "UK",
      correct: "a",
      type: "radio"
  },
  {
    question: "What is the best football team in Stockholm?",
      a: "AIK",
      b: "Hammarby", 
      c: "Djurgården",
      correct: "a",
      type: "radio"
  },
  {
    question: "What is the largest city in Sweden?",
      a: "Stockholm",
      b: "Malmö",
      c: "Göteborg",
      correct: "a",
      type: "radio"
  },
  {
    question: "What is the capital of Iceland?",
      a: "Purnavijk", 
      b: "Höfnjavik", 
      c: "Reykjavík", 
      correct: "c",
      type: "radio"
  },
  {
    question: "How long is an olympic swimming pool?",
      a: "25 meters",
      b: "50 meters",
      c: "75 meters",
      correct: "b",
      type: "radio"
  },
  {
    question: "Which animal can be seen on the Porsche logo?",
      a: "Lion",
      b: "Wolf",
      c: "Horse",
      correct: "c",
      type: "radio"
  },
  {
    question: "What is the name of the largest ocean on earth?",
      a: "Pacific ocean", 
      b: "Arctic ocean", 
      c: "Atlantic ocean",
      correct: "a",
      type: "radio"
  },
  {
    question: "What does come down but never goes up?",
      a: "A Ballon",
      b: "A bird",
      c: "Rain",
      correct: "c",
      type: "radio"
  },
  {
    question: "What colors are in the Swedish flag?",
      a: "Blue",
      b: "White",
      c: "Yellow",
      correct: "a",
      correct1: "c",
      type: "cb"
  }
]
let answerArray = [];
let letterArray =[];

const questionEl = document.getElementById("question");
const textA = document.getElementById("a-text");
const textB = document.getElementById("b-text");
const textC = document.getElementById("c-text");
const answerBtn = document.getElementById("answerBtn")
const quizContainer = document.querySelector(".quizContainer")
const darkMode = document.querySelector("#darkMode")
const scoreBtn = document.querySelector("#scoreBtn")

let currentRound = 0;
let score = 0;

loadQuiz()

answerBtn.addEventListener("click", () =>{
  points()
  currentRound++;
  if (currentRound < questionsData.length){ 
    selection()
    loadQuiz()
  } else {
    document.querySelector(".container").style.marginTop = "0px";
    quizContainer.style.display = "none";
    scoreBoard()
  }
})
// function to load in questions
function loadQuiz() {
  questionEl.innerText = questionsData[currentRound].question
  textA.innerText = questionsData[currentRound].a
  textB.innerText = questionsData[currentRound].b
  textC.innerText = questionsData[currentRound].c
  if (questionsData[currentRound].type === "cb")
  {
    let radioBtn = document.querySelectorAll("[name='choice']")
    radioBtn.forEach((btnradio) =>{
      btnradio.style.display = "none";
    })
    let choiceCB = document.querySelectorAll("[name='choiceCB']")
    choiceCB.forEach((btnCB) =>{
      btnCB.style.display = "inline"
    })
  }
  else {
    let choiceCB = document.querySelectorAll("[name='choiceCB']")
    choiceCB.forEach((btnCB) =>{
      btnCB.style.display = "none"
    })
    let radioBtn = document.querySelectorAll("[name='choice']")
    radioBtn.forEach((btnradio) =>{
      btnradio.style.display = "inline";
    })
  }
}

function selection() {
  let selectedBtn = document.querySelectorAll("[name='choice']");
  selectedBtn.forEach((item) => {
    if (item.checked){
      answerArray.push(item.nextElementSibling.innerText)
      letterArray.push(item.className)
    }
  });
  let choiceCB = document.querySelectorAll("[name='choiceCB']")
  choiceCB.forEach((elem)=> {
    if (elem.checked){
      answerArray.push(elem.nextElementSibling.nextElementSibling.innerText)
      letterArray.push(elem.className)
    }
  })
}

function scoreBoard() {
  
  let answerPage = document.querySelector(".answerPage");
  answerPage.style.display = "inline"
  let header = document.createElement("h2");
  header.innerText = "Correct answers"
  let yourScore = document.createElement("p")
  yourScore.innerText = "(scroll down to se your score)";
  let answers = document.querySelector("#answers")
  answers.appendChild(header)
  answers.appendChild(yourScore)
  questionsData.forEach((item) =>{
    let scoreHolder = document.createElement("ul")
    scoreHolder.innerText = item.question
    let answer1 = document.createElement("li");
    answer1.innerText = item.a
    let answer2 = document.createElement("li");
    answer2.innerText = item.b
    let answer3 = document.createElement("li");
    answer3.innerText = item.c
    answers.appendChild(scoreHolder)
    scoreHolder.appendChild(answer1)
    scoreHolder.appendChild(answer2)
    scoreHolder.appendChild(answer3)

    if (item.correct === "a"){
      answer1.style.color = "green"
      if(item.correct1 === "a")
        answer1.style.color = "green"
        if(item.correct1 === "b")
        answer2.style.color = "green"
          if(item.correct1 === "c")
        answer3.style.color = "green"
    }
    if (item.correct === "b"){
      answer2.style.color = "green"
      if(item.correct1 === "a")
        answer1.style.color = "green"
        if(item.correct1 === "b")
        answer2.style.color = "green"
          if(item.correct1 === "c")
        answer3.style.color = "green"
    }
    if (item.correct === "c"){
      answer3.style.color = "green"
      if(item.correct1 === "a")
        answer1.style.color = "green"
        if(item.correct1 === "b")
        answer2.style.color = "green"
          if(item.correct1 === "c")
        answer3.style.color = "green"
    }
  })
}

function points() {
  let selectedBtn = document.querySelectorAll("[name='choice']");
  selectedBtn.forEach((item) =>{
    if(item.checked === true){
      if(item.id === questionsData[currentRound].correct){
        score++
      }else {
      }
    }
  })
  let choiceCB = document.querySelectorAll("[name='choiceCB']")
  let choiceArray = []
  for(let i = 0; i<choiceCB.length; i++){
    if(choiceCB[i].checked){
      choiceArray.push(choiceCB[i].className)
    }
  }
  if (questionsData[currentRound].correct[0] === choiceArray[0]){
    if (questionsData[currentRound].correct1[0] === choiceArray[1]){
      score++
      console.log(score)
    }
  }
}

document.querySelector("#refreshBtn").addEventListener("click", () =>{
  location.reload();
})

let mode = "light"

darkMode.addEventListener("click",() =>{
  if (mode === "light"){
    document.querySelector("body").style.backgroundColor = "#001219"
    document.querySelector(".container").style.backgroundColor = "#001219"
    document.querySelector(".container").style.color = "white"
    document.querySelector(".quizContainer").style.backgroundColor = "#005f73"
    document.querySelector("#answerBtn").style.backgroundColor = "#003049"
    document.querySelector("#answerBtn").style.color = "white"
  
    mode = "dark"
  } else if(mode === "dark"){
    document.querySelector("body").style.backgroundColor = "#ede0d4"
    document.querySelector(".container").style.backgroundColor = "#ede0d4"
    document.querySelector(".container").style.color = "Black"
    document.querySelector(".quizContainer").style.backgroundColor = "#faedcd"
    document.querySelector("#answerBtn").style.backgroundColor = "ivory";
    document.querySelector("#answerBtn").style.color = "Black"
    mode = "light"
  }
})

scoreBtn.addEventListener("click", () =>{
  scoreBtn.style.display = "none"
  let scores = document.querySelector("#scores")
  let yourScore = document.createElement("h2");
  yourScore.innerText = `You got ${score} out of ${currentRound} points`
  yourScore.style.fontSize = "40px"
  scores.appendChild(yourScore)
  console.log(parseFloat(score)/parseFloat(currentRound))
  if(parseFloat(score)/parseFloat(currentRound) >= 0.8){
    yourScore.style.color = "green"
  }
  else if (parseFloat(score)/parseFloat(currentRound) >= 0.6){
    yourScore.style.color = "orange"
  } else {
    yourScore.style.color = "red"
  }
})
