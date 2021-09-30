const inform = document.querySelector('#inform');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const message = document.querySelector('#message');

inform.innerText = mostRecentScore;

const username = document.querySelector('#username');

message.innerText = username;


