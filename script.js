"use strict"

let name = "cruz";
console.log(`Yo, ${name}`);


function playSound(e) {
    // target attribute selector using es6 template strings ${ }
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // add class playing to key variable
    key.classList.add('playing');
    if (!audio) return; // stop the function from running
    audio.currentTime = 0; // rewinds to the start
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if it's not transform
    this.classList.remove('playing');
}


const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// adding EventListener (keydown) to the element window
window.addEventListener('keydown', playSound);