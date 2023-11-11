const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'Javascript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'What year was Javascript developed?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'None of these',
        'correct': 'b'
    },
    {   
        'que': 'What does CSS Stands for?',
        'a': 'Cascading Style Sheet',
        'b': 'Casca Style Sheet',
        'c': 'Code Style Sheet',
        'd': 'None of these',
        'correct': 'a'
    }
]
let index = 0;
const quesBox= document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options');
const loadQuestion =()=>{
    const data = questions[index]
    quesBox.innerText = `${index+1})${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}

const SubmitQuiz =()=>{
    
}

loadQuestion();