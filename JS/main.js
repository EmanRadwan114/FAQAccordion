const questions = document.querySelectorAll(".questionHeader");
const answerBox = document.querySelectorAll(".answerBox");
let isOpened = false;
let questionIndx = 0;
let focusedQuest = questions[questionIndx];

function closeCickedQuestion(answer) {
  answer.classList.remove("opened");

  answer.previousElementSibling.children[1].setAttribute(
    "src",
    "./assets/images/icon-plus.svg"
  );
}

function closeQuestions() {
  answerBox.forEach((answer) => {
    closeCickedQuestion(answer);

    // *style closed questions
    answer.previousElementSibling.classList.remove("border");
  });
}

function showAnswer(quest) {
  quest.children[1].setAttribute("src", "./assets/images/icon-minus.svg");
  quest.nextElementSibling.classList.add("opened");
}

function openClickedQues(quest) {
  if (!isOpened) {
    showAnswer(quest);

    // * get the focused question to be used in keyboard navigation
    focusedQuest = questions[questionIndx];
  }
}

// &open 1st question & focus on it
answerBox[0].classList.add("opened");
answerBox[0].previousElementSibling.children[1].setAttribute(
  "src",
  "./assets/images/icon-minus.svg"
);

// &loop over questions
questions.forEach((question, indx) => {
  // *add click event on every question
  question.addEventListener("click", function () {
    // *save the current active state of the question & its index
    isOpened = this.nextElementSibling.classList.contains("opened");
    questionIndx = indx;

    // *loop over the answers to close all of them when user click on evey question
    // * to keep only the clicked question open
    closeQuestions();

    // * open the clicked question only
    openClickedQues(this);
  });
});

// & style focused questions when user use arrow up / down
function styleFocusedQuest() {
  focusedQuest = questions[questionIndx];

  // * close questions & remove the border style from all questions except the focused one
  closeQuestions();

  // *style focused question
  focusedQuest.classList.add("border");
}

// & navigate through accordion using keyboard navigation
document.addEventListener("keyup", function (e) {
  isOpened = focusedQuest.nextElementSibling.classList.contains("opened");

  // *style focused question
  focusedQuest.classList.add("border");

  if (e.key == "Enter") {
    if (isOpened) {
      closeCickedQuestion(focusedQuest.nextElementSibling);
    } else {
      showAnswer(focusedQuest);
    }
  }

  if (e.key == "ArrowUp") {
    questionIndx--;

    if (questionIndx < 0) {
      questionIndx = questions.length - 1;
    }

    styleFocusedQuest();
  }

  if (e.key == "ArrowDown") {
    questionIndx++;

    // * get 1st question when user navigate from last question
    if (questionIndx >= questions.length) {
      questionIndx = 0;
    }

    styleFocusedQuest();
  }
});
