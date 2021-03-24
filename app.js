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

    const name = prompt('What is your name?');

    let score = 0;

    const firstAnswer = prompt('Can dark skinned grapes produce white wine?');
    const secondAnswer = prompt('Is Grenache a major grape variety?');
    const thirdAnswer = prompt('Is chardonnay a red grape?');

    if (isYes(firstAnswer)) score ++;
    if (isNo(secondAnswer)) score ++;
    if (isNo(thirdAnswer)) score ++;

    const resultsString = `${name} you got ${score} out of three correct!`;

    alert(resultsString);
    results.textContent = resultsString;

});