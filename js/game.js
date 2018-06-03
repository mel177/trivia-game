$(document).ready(
    function () {
        function displayTrivia(quizElement, resultsContainer, submitButton) {

            for (questionNumber in questionArray) {
                var question = questionArray[questionNumber]
                var answersHTML = [];
                answersHTML.push('<input type="radio" value="a" class="selectAnswer" name="' + questionNumber + '"> A: ' + question.answers.a + '</label>');
                answersHTML.push('<input type="radio" value="b" class="selectAnswer" name="' + questionNumber + '"> B: ' + question.answers.b + '</label>');
                answersHTML.push('<input type="radio" value="c" class="selectAnswer" name="' + questionNumber + '"> C: ' + question.answers.c + '</label>');
                answersHTML.push('<input type="radio" value="d" class="selectAnswer" name="' + questionNumber + '"> D: ' + question.answers.d + '</label>');
               
        
                
                var triviaHTML = '\
             <div class="row">\
                <div class="col-sm-12">\
                <p>' + questionNumber + ' . ' + question.question  + '</p>\
                ' + answersHTML.join("")  + '\
                </div>\
                </div>\
                ';

                quizElement.innerHTML = quizElement.innerHTML + triviaHTML;
                //   questionNumber++;
            

               
            }

        }


        function buildQuiz() {
            var quizElement = document.querySelector('#quiz');
            var resultsContainer = document.querySelector('.resultsContainer');
            displayTrivia(quizElement, resultsContainer, submitButton);
            getAnswer();
            var submitElement = document.getElementById("submitButton");
            submitElement.onclick = submitButton;
        }
        
        // timer to the trivia quiz is built here
        var index = 0;
        var countdownTimer = {
            time: 100,
            reset: function () {
                this.time = 100;
                $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
            },
            start: function () {
                counter = setInterval(countdownTimer.count, 1000);
            },
            stop: function () {
                clearInterval(counter);
            },

            timeOut: function() {
                clearTimeout(countdownTimer);
                alert("Times Up!")
            },

            count: function () {
                countdownTimer.time--;
                console.log(countdownTimer.time);
                $('.timer').html(countdownTimer.time);
                if (countdownTimer.time >= 0) {
                    $('.timer').html(
                        '<h3>' + countdownTimer.time + 'seconds remaining</h3>');
                } else {
                    index++;
                    countdownTimer.timeOut();
                    
                    countdownTimer.reset();
                    if (index < questionArray.length) {
                        loadQuiz(index);
                    } else {
                        $(".answerchoice").hide();
                        showScore();
                    }
                }
            }

        }
        // Trivia quiz container
        var correct;
        var wrong = [];

        // how the trivia will start with timer
        $('#startButton').on('click', function () {
            $(this).hide();
            countdownTimer.start();
            buildQuiz();
        });

        // when user click on a letter, we need to see if they click on the right answer
            


        function getAnswer() {
            $('.selectAnswer').on('click', function () {
                var selValue = $(this).val(); 
                $('').html('<br/>Selected Radio Button Value is : <b>' + selValue + '</b>');
                var answerBank= [];
               
               

                //if question==1 var question1=this.value
                //if question==2 var question2==this.value;
                var userAnswer = '';
                var numCorrect = 0;
            // for each questions answered

            for(var i=0; i<questions.length; i++) {


            // which answer is selected
            userAnswer = (answerArray[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            // if user selects the right answer
            if(userAnswer===question[i].correctAnswer){
                numCorrect++;
            }
            }
            // show the number correct out of the total
            resultsContainer.innerHTML = numCorrect + 'out of ' + question.length;
 });
                
                   
}

// submit button
    function submitButton(){

        var question1 = document.querySelector('input[name="0"]:checked').value
        var question2 = document.querySelector('input[name="1"]:checked').value;
        var question3 = document.querySelector('input[name="2"]:checked').value;
        var question4 = document.querySelector('input[name="3"]:checked').value;
        var question5 = document.querySelector('input[name="4"]:checked').value;
        var question6 = document.querySelector('input[name="5"]:checked').value;
        var question7 = document.querySelector('input[name="6"]:checked').value;
        var question8 = document.querySelector('input[name="7"]:checked').value;
        var question9 = document.querySelector('input[name="8"]:checked').value;
        var question10 =document.querySelector('input[name="9"]:checked').value;
        var question11 =document.querySelector('input[name="10"]:checked').value;
        var correct = 0;

        if(question1 === "b") {
            correct++;
        }
        if(question2 === "d") {
            correct++;
        }
        if(question3 === "a") {
            correct++;
        }
        if(question4 === "a") {
            correct++;
        }
        if(question5 === "d") {
            correct++;
        }
        if(question6 === "b") {
            correct++;
        }
        if(question7 === "a") {
            correct++;
        }
        if(question8 === "b") {
            correct++;
        }
        if(question9 === "d") {
            correct++;
        }
        if(question10 === "d") {
            correct++;
        }
        if(question11 === "d") {
            correct++;
        }
        

        document.getElementById("numCorrect").innerHTML = "You got " + correct + " correct.";
    }



    // show Score
        function showScore() {
            $('.question').empty();
            $('.question').append("<h2><p>" + correct + " correct</p><h2>");
            $('.question').append("<h2><p>" + wrong + " correct</p><h2>");
            countdownTimer.stop();
            $('.timer').empty();
        }
    });

//setting attributes for each radio buttons selected

var q1 = {
    question: "Whats is the name of Phoebe's birth mother?",
    answers: {
        a: "Rose",
        b: "Phoebe",
        c: "Lily",
        d: "Daisy"
    },
    correctAnswer: "b"
};

var q2 = {
    question: "Chandler made out with which of Joey's sisters?",
    answers: {
        a: "Mary Louisa",
        b: "Mary Veronica",
        c: "Mary Theresa",
        d: "Mary Angela"
    },
    correctAnswer: "d"
};

var q3 = {
    question: "Who isn't one of Joey's sister?",
    answers: {
        a: "Vivian",
        b: "Tina",
        c: "Cookie",
        d: "Mary Theresa"
    },
    correctAnswer: "a"
};

var q4 = {
    question: "Where has Rachel NOT worked?",
    answers: {
        a: "Gucci",
        b: "Fortuna Fashions",
        c: "Ralph Lauren",
        d: "Bloomingdales"
    },
    correctAnswer: "a"
};

var q5 = {
    question: "Which friend accidentally saw Rachel's boobies'?",
    answers: {
        a: "Joey",
        b: "Phoebe",
        c: "Gunther",
        d: "Chandler"
    },
    correctAnswer: "d"
};
var q6 = {
    question: "What did Janice's ex-husband sell?",
    answers: {
        a: "Jewelry",
        b: "Mattress",
        c: "Drugs",
        d: "Flowers"
    },
    correctAnswer: "b"
};

var q7 = {
    question: "Who took a dart in their butt to save Marcel?",
    answers: {
        a: "Phoebe",
        b: "Ross",
        c: "Rachel",
        d: "Joey"
    },
    correctAnswer: "a"
};

var q8 = {
    question: "What dessert did Rachel try to make for Thanksgiving?",
    answers: {
        a: "Souffle",
        b: "Cookies",
        c: "Cake",
        d: "Trifle"
    },
    correctAnswer: "d"
};

var q9 = {
    question: "Which is not a Phoebe song?",
    answers: {
        a: "Little Fetus",
        b: "Emma",
        c: "Smelly Cat",
        d: "I Hate Chandler"
    },
    correctAnswer: "d"
};
var q10 = {
    question: "Isn't that a kick-you-in-the-crotch, spit-on-your-neck fantastic?î Who said it?",
    answers: {
        a: "Ross",
        b: "Monica",
        c: "Rachel",
        d: "Chandler"
    },
    correctAnswer: "d"
};
var q11 = {
    question: "This is a brand new information! Who said it?",
    answers: {
        a: "Monica",
        b: "Rachel",
        c: "Ross",
        d: "Phoebe"
    },
    correctAnswer: "d"
};

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11];
var answerArray = [];