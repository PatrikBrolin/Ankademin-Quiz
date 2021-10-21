const questionsData = [
  {
    question: "What's the biggest animal in the world?",
      a: "Elephant",
      b: "Blue Whale", 
      c: "Giraph",
      correct: "b"
  },
  {
    question: "What country is apple from",
      a: "USA",
      b: "China", 
      c: "UK",
      correct: "a"
  },
  {
    question: "What is the best football team in Stockholm",
      a: "AIK",
      b: "Hammarby", 
      c: "Djurgården",
      correct: "a"
  },
  {
    question: "What is the largest city in Sweden",
      a: "Stockholm",
      b: "Malmö",
      c: "Göteborg",
      correct: "a"
  },
  {
    question: "What is the capital of Iceland?",
      a: "Purnavijk", 
      b: "Höfnjavik", 
      c: "Reykjavík", 
      correct: "c"
  },
  {
    question: "How long is an olympic swimming pool?",
      a: "25 meters",
      b: "50 meters",
      c: "75 meters",
      correct: "b"
  },
  {
    question: "Which animal can be seen on the Porsche logo?",
      a: "Lion",
      b: "Wolf",
      c: "Horse",
      correct: "c"
  },
  {
    question: "What is the name of the largest ocean on earth",
      a: "Pacific ocean", 
      b: "Arctic ocean", 
      c: "Atlantic ocean",
      correct: "a"
  },
  {
    question: "What does come down but never goes up?",
      a: "A Ballon",
      b: "A bird",
      c: "Rain",
      correct: "c"
  },
  {
    question: "What colors are the Swedish flag?",
      a: "Blue",
      b: "White",
      c: "Yellow",
      correct: "a", 
      correct1: "c",
  },
  {
    question: "What are the 2 highest mountains called?",
      a: "Kilimanjaro",
      b: "Mount Everest",
      c: "K2",
      correct: "b",
      correct1: "c"
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

let currentRound = 0;
let score = 0;

loadQuiz()

answerBtn.addEventListener("click", () =>{
  currentRound++;
  if (currentRound < questionsData.length){ 
    selection()
    loadQuiz()
  } else {
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
  if (currentRound > 8)
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
  questionsData.forEach((item) =>{
    let scoreHolder = document.createElement("ul")
    scoreHolder.innerText = item.question
    let answer1 = document.createElement("li");
    answer1.innerText = item.a
    let answer2 = document.createElement("li");
    answer2.innerText = item.b
    let answer3 = document.createElement("li");
    answer3.innerText = item.c
    answerPage.appendChild(scoreHolder)
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

}

document.querySelector("#refreshBtn").addEventListener("click", () =>{
  location.reload();
})