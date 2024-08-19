let Answers = JSON.parse(localStorage.getItem('Answers')) || [];

const CorrectAnswers = ['Constantinople',
    'Christopher Columbus',
    "Suleiman I",
    "1054",
    "Pope Eugene III",
    "The establishment of the Abbasid Caliphate",
    "Charlemagne",
    "Disputes over the French throne",
    "1517",
    "Treaty of Westphalia"];

function GetQuestions(Answer) {
    Answers.push(Answer);
    localStorage.setItem('Answers', JSON.stringify(Answers));

    console.log(Answers.length);
}

function ResetAnswers() {
    Answers = [];
    localStorage.removeItem('Answers');
    console.log('Answers have been reset:', Answers);
}

let UserInput = document.getElementById("UserInput");
let CorrectResults = document.getElementById("CorrectAnswers");

let deneme = document.getElementById("deneme");
let Score = 0;
for(i=0; i<Answers.length; i++){
    if(Answers[i] === CorrectAnswers[i]){
        Score +=1;
    }
}
deneme.textContent = `${Score}/${CorrectAnswers.length}`;

for(e=0; e<Answers.length; e++){
    UserInput.innerHTML += `<li><h3>${Answers[e]}</h3></li>`;
}
for(c=0; c<Answers.length; c++){
    CorrectResults.innerHTML += `<li><h3>${CorrectAnswers[c]}</h3></li>`;
}
