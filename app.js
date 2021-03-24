// import functions and grab DOM elements
import { isYes, isNo } from './test/utils.js';

const button = document.getElementById('test');
const results = document.getElementById('results');

button.addEventListener('click', () => {
    alert('Welcome to the Quiz!');
    const wantsToTakeTheQuiz = confirm('Do you want to take the quiz?');

    if (!wantsToTakeTheQuiz) {
        alert('All good!');
        return;
    }

    let score = 0;
    const name = prompt('What is your name?');
    const firstAnswer = prompt('Can dark skinned grapes produce white wine?');
    const secondAnswer = prompt('Is Grenache a major grape variety?');
    const thirdAnswer = prompt('Is chardonnay a red grape?');

    if (isYes(firstAnswer)) score ++;
    if (isNo(secondAnswer)) score ++;
    if (isNo(thirdAnswer)) score ++;
    
    let percent = Math.round((score / 3) * 100);

    const resultsString = `${name}, you got ${percent}% on the quiz!`;
    
    alert(resultsString);
    results.textContent = resultsString;

});