const inform = document.querySelector('#inform');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const user = document.getElementById('username');
const message = document.querySelector('#examplename');


score.innerHTML = mostRecentScore;

if(mostRecentScore >= 70) {
    inform.innerHTML = "Congrats you passed the quiz!";
}
else {
    inform.innerHTML = "I guess you ain't a gamer after all...";
}