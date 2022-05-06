var prideQuiz = [
    {
        question: "What started the gay rights movement?",
        answers: {
            a: 'L.A. Riot',
            b: 'Chicago Riots',
            c: 'Stonewall Riot'
        },
        correctAnswer: 'c'
    },
    {
        question: "What is the updated Pride acronym (as of 2021)?",
        answers: {
            a: 'LGBTQ',
            b: 'LGBTQIA',
            c: 'LGBTQIA+'
        },
        correctAnswer: 'c'
    },
    {
        question: "What does Non-Binary mean?*",
        answers: {
            a: 'Gender neutral',
            b: 'Anything outside the gender binary',
            c: 'Gender Fluid'
        },
        correctAnswer: 'b'
    },
    {
        question: "What does the Q mean in LGBTQ?",
        answers: {
            a: 'Queer',
            b: 'Questioning',
            c: 'All of the above'
        },
        correctAnswer: 'c'
    },
    {
        question: "What month is Pride celebrated?",
        answers: {
            a: 'June',
            b: 'July',
            c: 'August'
        },
        correctAnswer: 'a'
    },
    {
        question: "How many colours are on the updated Pride flag?",
        answers: {
            a: '6',
            b: '10',
            c: '8',
        },
        correctAnswer: 'b'
    },
    {
        question: "Where does Non-binary fit in LGBTQ?",
        answers: {
            a: 'Trans',
            b: 'Queer',
            c: 'None of the above'
        },
        correctAnswer: 'a'
    },
    {
        question: "When was gay marriage legal in Canada?",
        answers: {
            a: '2002',
            b: '2005',
            c: '2010'
        },
        correctAnswer: 'b'
    },
    {
        question: "When was 'X' added as a gender marker in BC?",
        answers: {
            a: '2005',
            b: '2012',
            c: '2019'
        },
        correctAnswer: 'c'
    },
    {
        question: "Which Olympic year had the most publicly out LGBTQ athletes?",
        answers: {
            a: '2020 Tokyo Summer Olympics',
            b: '2010 Vancouver Winter Olympics',
            c: '2016 Rio Summer Olympics'
        },
        correctAnswer: 'a'
    }
];

var prideQuestions = document.getElementById('quizI');
var quizResults = document.getElementById('testResults');
var submitButton = document.getElementById('submitA');

generateQuiz(prideQuiz, prideQuestions, quizResults, submitButton);

function generateQuiz(questions, prideQuestions, quizResults, submitButton){
    
    function showQuestions(questions, prideQuestions){
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
            '<br><div class="question">' + questions[x].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div><br>'
        );
    }
        prideQuestions.innerHTML = output.join('');
    }
    function showResults(questions, prideQuestions, quizResults){
        var answerContainers = prideQuestions.querySelectorAll('.answers');

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
    showQuestions(questions, prideQuestions);

    submitButton.onclick = function(){
        showResults(questions, prideQuestions, quizResults);
    }
}