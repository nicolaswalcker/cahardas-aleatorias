const button = document.querySelector(".js-button");
const question = document.querySelector(".js-question");
const answer = document.querySelector(".js-answer");
var activeRiddle;
var timer, timer2;

const showData = (result) => {
  clearTimeout(timer);
  let randomRiddleIndex;
  do {
    randomRiddleIndex = Math.floor(Math.random() * result.piadas.length);
  } while (randomRiddleIndex === activeRiddle);

  activeRiddle = result.piadas[randomRiddleIndex];

  for (const campo in result) {
    let riddleQuestion = activeRiddle[0];
    let riddleAnswer = activeRiddle[1];

    question.innerHTML = riddleQuestion;
    answer.innerHTML = `
    <span>.</span><span>.</span><span>.</span>
    `;
    timer = setTimeout(() => {
      answer.innerHTML = riddleAnswer;
      answer.classList.add("u-transition-append");
    }, 3000);
  }
  clearDisplay();
};

const removeClass = () => {
  setTimeout(() => {
    question.classList.remove("u-transition-append");
    answer.classList.remove("u-transition-append");
  }, 400);
};

const clearDisplay = ()=>{
  timer2 = setTimeout(() => {
    question.innerHTML = "...";
    answer.innerHTML = "...";
  }, 10000)
}

button.addEventListener("click", (e) => {
  fetch("charadas.json")
    .then((response) => {
      response.json().then((data) => showData(data));
    })
    .catch((e) => console.error(e.message));

  question.classList.add("u-transition-append");
  clearTimeout(timer2);
  removeClass();
  
});
