(() => {

  'use strict';

  const seats = document.getElementById('seating');
  const left = document.getElementById('left');
  const middle = document.getElementById('middle');
  const right = document.getElementById('right');
  left.innerHTML = "";
  middle.innerHTML = "";
  right.innerHTML = "";
  let counter = 0;

  const alpha = Array.from(Array(20)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  alphabet.forEach(letter =>{
    left.innerHTML += `<div class="label">${letter}</div>`;
    leftSeats(letter);
    middleSeats(letter);
    rightSeats(letter);
    right.innerHTML += `<div class="label">${letter}</div>`;

  });


  alphabet.forEach(letter =>{
    document.getElementById(`${letter}`)
  });


  function leftSeats(letter){
    for (let i = 1; i < 4; i++) {
      counter++;
      left.innerHTML += `<div id="${letter.toLowerCase()}${i}">${counter}</div>`;
      listening(letter, i);
    }
  }



  function rightSeats(letter){
    for (let i = 13; i < 16; i++) {
      counter++;
      right.innerHTML += `<div id="${letter.toLowerCase()}${i}">${counter}</div>`;
      listening(letter, i);
    }
  }

  function middleSeats(letter){
    for (let i = 4; i < 13; i++) {
      counter++;
      middle.innerHTML += `<div id="${letter.toLowerCase()}${i}">${counter}</div>`;
      listening(letter, i);
    }
  }

  function listening(letter, i){
    window.addEventListener('load', () =>{
      document.getElementById(`${letter.toLowerCase()}${i}`).addEventListener('mouseover', function(){
      console.log(this.innerHTML);
    });
   });

  }
















})();
