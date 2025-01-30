let  randomnumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessfeild')
const guesses = document.querySelector('.guesses')
const remaining = document.querySelector('.lastresult')
const lowerhi = document.querySelector('.lowerhi')
const startover = document.querySelector('.resultParas')


const p = document.createElement('p');



let prevguess = []
let numguess = 1

let playgame = true

if(playgame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userinput.value);
        validateguess(guess)
    })
}

function validateguess(guess){
    if(isNaN(guess)){
        alert("please enter a valid number")
    }
    else if(guess<1)
    {
        alert("please enter the number more than 1")
    }
    else if(guess>100)
    {
        alert("please enter the number less than 100")
    }
    else{
        prevguess.push(guess)
        if(numguess === 10){
            cleanup(guess)
            displaymsg(`Game over .Random number was${randomnumber}`)
            endgame()
        }
        else{
            cleanup(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    if(guess === randomnumber){
        displaymsg(' congrats you guessted  it right')
        endgame()
    }
    else if (guess<randomnumber)
    {
        displaymsg("number is tooo low")
    }
    else if(guess>randomnumber)
    {
        displaymsg("number is tooo high")
    }
}

function cleanup(guess){
    userinput.value = ''
    guesses.innerHTML +=`${guess}, `;
    numguess++;
    remaining.innerHTML = `${11-numguess}`
}

function displaymsg(msg){
    lowerhi.innerHTML = `<h1> ${msg} </h1>`;
}
function endgame(){
    userinput.value = '';
    userinput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h1 id="newgame">start the game</h1>`;
    startover.appendChild(p)
    playgame = false
    newgame();
}
function newgame(){
    const newgamebutton = document.querySelector('#newgame')
    newgamebutton.addEventListener('click',()=>{
    randomnumber = parseInt(Math.random() * 100 + 1)
    prevguess = []
    numguess = 1
    guesses.innerHTML = ''
    remaining.innerHTML = `${11-numguess}`;
    userinput.removeAttribute('disabled')
    startover.removeChild(p)
    playgame = true

    })
}
