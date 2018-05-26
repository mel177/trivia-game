(function() {
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
        {
            question: "Whats is the name of Phoebe's birth mother?",
            answers: {
                a: "Rose",
                b: "Phoebe", 
                c: "Lily",
                d: "Daisy"
            },
            correctAnswer: "b"
        },
        {
             questions:"Chandler made out with which of Joey's sisters?",
            answers: {
                a: "Mary Louisa",
                b: "Mary Veronica",
                c: "Mary Theresa",
                d: "Mary Angela" 
            },
            correctAnswer: "d"
        },
        {
            question: "Who isn't one of Joey's sister?",
            answers: {
                a: "Vivian", 
                b: "Tina",
                c: "Cookie",
                d: "Mary Theresa"
            },
            correctAnswer: "a"
        },
        {
            question: "Where has Rachel NOT worked?",
            answers: {		
                a: "Gucci", 
                b: "Fortuna Fashions",
                c: "Ralph Lauren",
                d: "Bloomingdales"
            },
            correctAnswer: "a"
        },
        {
            question: "Which friend accidentally saw Rachel's boobies'?",
            answers: {
                a: "Joey",
                b: "Phoebe",
                c: "Gunther",
                d: "Chandler" 
            },
            correctAnswer: "d"
        },
        {
            question: "What did Janice's ex-husband sell?",
            answers: {
                a: "Jewelry",
                b: "Mattress", 
                c: "Drugs",
                d: "Flowers"
            },
            correctAnswer: "b"
        },
        {
            question:"Who took a dart in their butt to save Marcel?",
            answers: {
                a: "Phoebe",
                b: "Ross",
                c: "Rachel",
                d: "Joey"
            },
            correctAnswer: "a"
        },
        {
            question: "What dessert did Rachel try to make for Thanksgiving?",
            answers: {
                a: "Souffle",
                b: "Cookies",
                c: "Cake",
                d: "Trifle" 
            },
            correctAnswer: "d"
        },
        {	
            question: "Which is not a Phoebe song?",
            answers: {
                a: "Little Fetus",
                b: "Emma",
                c: "Smelly Cat",
                d: "I Hate Chandler" 
            },
            correctAnswer: "d"
        },
        {
            question: "Isnít that a kick-you-in-the-crotch, spit-on-your-neck fantastic?î Who said it?",
            answers: {
                a: "Ross",
                b: "Monica",
                c: "Rachel",
                d: "Chandler"
            },
            correcAnswer: "d"
        },
        {
            question: "This is a brand new information! Who said it?",
            answers: {
                a: "Monica",
                b: "Rachel",
                c: "Ross",
                d: "Phoebe"
            },
            correctAnswer: "d"
        },
    ];
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();