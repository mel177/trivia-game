$(document).ready(
    function () {
        function displayTrivia(quizElement) {

            for (questionNumber in questionArray) {
                var question = questionArray[questionNumber]
                var answersHTML = [];
                answersHTML.push('<input type="radio" name="' + questionNumber + '"> A: ' + question.answers.a + '</label>');
                answersHTML.push('<input type="radio" name="' + questionNumber + '"> B: ' + question.answers.b + '</label>');
                answersHTML.push('<input type="radio" name="' + questionNumber + '"> C: ' + question.answers.c + '</label>');
                answersHTML.push('<input type="radio" name="' + questionNumber + '"> D: ' + question.answers.d + '</label>');

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
            displayTrivia(quizElement);
        }

        var index = 0;
        var countdownTimer = {
            time: 150,
            reset: function () {
                this.time = 150;
                $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
            },
            start: function () {
                counter = setInterval(countdownTimer.count, 1000);
            },
            stop: function () {
                clearInterval(counter);
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
                    answerWrong();
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
        var correct = 0;
        var wrong = 0;

        // how the trivia will start with timer
        $('#startButton').on('click', function () {
            $(this).hide();
            countdownTimer.start();
            buildQuiz();
        });

        function getAnswer() {
            $('.answerChoice').on('click', function () {
                console.log('alert'.index);
                index++;
                console.log('click', index);
                $(".question").text('');
                $("#buttonA").text('');
                $("#buttonB").text('');
                $("#buttonC").text('');
                $("#buttond").text('');
                loadQuiz();
            })
        }
        // for right answers
        function answerCorrect() {
            correct++;
            alert("Correct!");
            console.log("correct");
        }
        // for wrong answers
        function answerWrong() {
            wrong++;
            alert("Incorrect!");
            console.log("wrong");
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