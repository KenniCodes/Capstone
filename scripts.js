var myQuiz = [
    {
        question: "What is 10/2?",
        answers: {
            a: '3',
            b: '5',
            c: '115'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is 30/3?",
        answers: {
            a: '3',
            b: '5',
            c: '10'
        },
        correctAnswer: 'c'
    }
];

var quizQuestions = document.getElementById('quizI');
var quizResults = document.getElementById('testResults');
var submitButton = document.getElementById('submitA');

generateQuiz(myQuiz, quizQuestions, quizResults, submitButton);

function generateQuiz(questions, quizQuestions, quizResults, submitButton){
    
    function showQuestions(questions, quizQuestions){
        var output = [];
        var answers;

        for(var x=0; x<questions.length; x++){
            answers = [];
            for(letter in questions[x].answers){
                answers.push(
                    '<label>'
                        + '<input type="checkbox" name="question'+x+'"value="'+letter+'">'
                        + letter + ': '
                        + questions[x].answers[letter]
                    + '</label>'
                );
            }
        output.push(
            '<div class="question">' + questions[x].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );
    }
        quizQuestions.innerHTML = output.join('');
    }
    function showResults(questions, quizQuestions, quizResults){
        var answerContainers = quizQuestions.querySelectorAll('.answers');

        var userAnswer = '';
        var numCorrect = 0;

        for(var x=0; x<questions.length; x++){
            userAnswer = (answerContainers[x].querySelector('input[name=question'+x+']:checked')||{}).value;

            if(userAnswer===questions[x].correctAnswer){
                numCorrect++;
                answerContainers[x].style.color = 'green';
            }
            else{
                answerContainers[x].style.color = 'red';
            }
        }
        quizResults.innerHTML = 'Your results are ' + numCorrect + ' correct out of ' + questions.length;
    }
    showQuestions(questions, quizQuestions);

    submitButton.onclick = function(){
        showResults(questions, quizQuestions, quizResults);
    }
}