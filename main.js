const button = document.querySelector(".js-button");
const question = document.querySelector(".js-question");
const answer = document.querySelector(".js-answer");

const showData = (result) => {
  let randomRiddleIndex = Math.floor(Math.random() * result.piadas.length);
  let activeRiddle = result.piadas[randomRiddleIndex];

  for (const campo in result) {
    let riddleQuestion = activeRiddle[0];
    let riddleAnswer = activeRiddle[1];

    question.innerHTML = riddleQuestion;
    answer.innerHTML = riddleAnswer;
  }
};

const removeClass = ()=>{
  setTimeout(() => {
    question.classList.remove('u-transition');
    answer.classList.remove('u-transition');
  }, 400);
}

button.addEventListener("click", (e) => {
  fetch("charadas.json")
    .then((response) => {
      response.json().then((data) => showData(data));
    })
    .catch((e) => console.error(e.message));

    question.classList.add('u-transition');
    answer.classList.add('u-transition');
    removeClass();
});
