
// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var strikes = 0; // number or wrong guesses.

// Game functions: 

function startGame() {
  console.log("Game has started.");
  
  
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  strikes = 0;

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  // show the strike display
  document.getElementById("strikeTxt").classList.remove("hidden");
  
  generatePattern();
  playClueSequence();
}

function stopGame() {
  console.log("Game has stopped.");
  //varible conditions for when game is stopped
  gamePlaying = false;

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  
  // hide the strike display area
  document.getElementById("strikeTxt").classList.add("hidden");
  document.getElementById("strike1").classList.add("hidden");
  document.getElementById("strike2").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
  showImg(btn);
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
  hideImg(btn);
}
function showImg(btn){
  // show the image on the given button
  document.getElementById("imgBtn"+btn).classList.remove("hidden");
  document.getElementById("blankImgBtn"+btn).classList.add("hidden");
}
function hideImg(btn){
  // hide the image on the given button
  document.getElementById("imgBtn"+btn).classList.add("hidden");
  document.getElementById("blankImgBtn"+btn).classList.remove("hidden");
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  console.log("Playing clue sequence...");
  guessCounter = 0;
  let delay = nextClueWaitTime; // set delay to initial wait time
  clueHoldTime = 1000 - progress*100; // clue playback time speeds up as game progresses
  console.log("clueHoldTime: "+clueHoldTime);
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame(){
  console.log("User lost.");
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  console.log("User won.");
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  if(pattern[guessCounter] == btn){
    //Guess was correct
    console.log("Guess was correct.");
    if(guessCounter == progress){
      if(progress == pattern.length-1){
        //User wins
        winGame();
      }else{
        //Pattern was correct, next turn
        console.log("Next turn...");
        progress++;
        playClueSequence();
      }
    }else{
      //Check the next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect, add a strike and repeat that turn, no progress
    console.log("Guess was incorrect.");
    strikes++;
    console.log("Strikes: "+strikes);
    if(strikes == 3){
      loseGame();
    }else{
      playClueSequence();
    }
    //Display a strike, only up to 2 will ever appear, because game is over by 3
    document.getElementById("strike"+strikes).classList.remove("hidden");
  }
}

function generatePattern(){
  // Genertates a random pattern
  // pattern always has length of 8
  for(let i=0;i<8;i++){
    // assigne a random int from 1 to 4 for each element of "pattern"
    pattern[i] = Math.floor(Math.random()*4)+1;
  }
  console.log("Generated pattern: "+pattern);
}

// Sound Synthesis Functions
const freqMap = {
  1: 659.25,
  2: 329.63,
  3: 622.25,
  4: 311.13
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

