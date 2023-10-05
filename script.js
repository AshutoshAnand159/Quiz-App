const quiz = [
    {
        question:  "Which of the following keyword is used to define a variable in javascript ?",
        ans1text: "var",
        ans2text: "let",
        ans3text: "Both A and B",
        ans4text: "None of these",
        answer:   "Both A and B",
    },
    {
        question: " Which JavaScript method is used to write on browser's console?",
        ans1text: "console.write()",
        ans2text: "console.output()",
        ans3text: "console.log()",
        ans4text: "console.writeHTML()",
        answer:   "console.log()",
    },{
        question: "The function and var are known as?",
        ans1text: "Keywords",
        ans2text: "Data Types",
        ans3text: "Declaration statements",
        ans4text: "Prototypes",
        answer: "Declaration statements",
    },
    {
        question: "How many keywords are there in JavaScript to declare variables or constants??",
        ans1text: "1",
        ans2text: "2",
        ans3text: "3",
        ans4text: "4",
        answer: "3",

    },
    {
        question: "Which JavaScript method is used to write HTML output?",
        ans1text: "document.write()",
        ans2text: "document.output()",
        ans3text: "console.log()",
        ans4text: "document.writeHTML()",
        answer: "document.write()",
    },
    {
        
            question: "Which of the following is not JavaScript Data Types?",
            ans1text: "Undefined",
            ans2text: "Number",
            ans3text: "Boolean",
            ans4text: "Float",
            answer: " Float",
    },
    {
        question: " Among the following, which one is a ternary operator in JavaScript?",
        ans1text: "#",
        ans2text: "::",
        ans3text: "&:",
        ans4text: "?:",
        answer: " ?:",
    },

]
const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent)
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerElement = document.querySelectorAll(".answer");
console.log(option_a);
console.log(option_b);  
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;


submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns);
    // console.log(checkedAns.nextElementSibling.textContent);
    if( checkedAns === null){
        alert("Please select an answer");
    }else{
        if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
            score++;
        }

        currentQuestion++;
        if( currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else{
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }

    }
});