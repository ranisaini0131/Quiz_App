const questions = [{
    "ques": "Which of the following is a markup language?",
    "a": "HTML",
    "b": "CSS",
    "c": "JavaScript",
    "d": "PHP",
    "correct": "a"
},
{
    "ques": "What was year JavaScript launched?",
    "a": "1996",
    "b": "1995",
    "c": "1994",
    "d": "noneof the above",
    "correct": "b"
},
{
    "ques": "What does CSS stands for?",
    "a": "HyperText Mak",
    "b": "Cascading Style Sheet",
    "c": "fghjk",
    "d": "noneof the above",
    "correct": "b"
}]

let index = 0;
let total = questions.length;
let wrong = 0, right = 0;
const quesBox = document.getElementById("ques-box");
const optionInputs = document.querySelectorAll(".options");
const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quesBox.innerText = `${index + 1}. ${data.ques}`;
    optionInputs[0].nextElementSibling.innerText = data.a;//here nextElementSibling refers to labecontemt of data.a gōes to label
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value; // input mekya h return krega or ye value ans me jaegy
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h3>Thanq for playing the Quiz</h3>
    <h2>${right} /${total} are correct </h2>
    `
}

//initial call
loadQuestion();