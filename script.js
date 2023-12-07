const questions = [
    {
      questions: "What is the full form of DSA :",
      answers: [
        { text: "Daily Service Act", correct: false },
        { text: "Data Structures and Algorithms", correct: true },
        { text: "Data Sets and Applications", correct: false },
        { text: "Don't Say Anything", correct: false },
      ],
    },
    {
      questions: "What is the value of 3 + 3 :",
      answers: [
        { text: "6", correct: true },
        { text: "0", correct: false },
        { text: "3", correct: false },
        { text: "1", correct: false },
      ],
    },
    {
      questions: "Chemical Formula of Water :",
      answers: [
        { text: "CO2", correct: false },
        { text: "NH3", correct: false },
        { text: "CH4", correct: false },
        { text: "H2O", correct: true },
      ],
    },
    {
      questions: "Which is the largest country in terms of area ?",
      answers: [
        { text: "Russia", correct: true },
        { text: "Australia", correct: false },
        { text: "America", correct: false },
        { text: "India", correct: false },
      ],
    },
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  const scoreBox = document.getElementById("score-box");
  const scoreSpan = document.getElementById("score");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.questions;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      button.addEventListener("click", () => handleAnswerClick(answer.correct, button));
      answerButtons.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  function handleAnswerClick(isCorrect, selectedButton) {
    const buttons = answerButtons.getElementsByTagName('button');
  
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
      buttons[i].classList.remove('correct', 'incorrect');
  
      if (buttons[i] === selectedButton) {
        if (isCorrect) {
          buttons[i].classList.add('correct');
        } else {
          buttons[i].classList.add('incorrect');
        }
      }
    }
  
    // Update the score
    if (isCorrect) {
      score++;
    }
  
    // Show the next question after a brief delay
    setTimeout(() => {
      resetState();
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        // End of the quiz, display the score box
        scoreBox.style.display = "block";
        scoreSpan.textContent = score;
  
        // Hide the question statement
        questionElement.innerHTML = "";
  
        // You can add more actions here, such as restarting the quiz.
      }
    }, 1000);
  }
  
  startQuiz();
  