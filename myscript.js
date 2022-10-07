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
  let selectedSeats = [];
  const reserveButton = document.getElementById('reserve');
  const reserveForm = document.getElementById('resform');
  const hideform = document.getElementById('cancel');
  const formParagraph = document.getElementById('selectedseats');
  const confirmButton = document.getElementById('confirmres');
  const reservedSeats = {
    record1: {
      seat: "b19",
      owner: {
        fname: "Joe",
        lname: "Smith"
      }
    },
    record2: {
      seat: "b20",
      owner: {
        fname: "Joe",
        lname: "Smith"
      }
    },
    record3: {
      seat: "b21",
      owner: {
        fname: "Joe",
        lname: "Smith"
      }
    },
    record4: {
      seat: "b22",
      owner: {
        fname: "Joe",
        lname: "Smith"
      }
    }
  };



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
      left.innerHTML += `<div id="${letter.toLowerCase()}${counter}" class="a">${counter}</div>`;

      reserving(letter, counter);
      selecting(letter, counter);
    }
  }

  function rightSeats(letter){
    for (let i = 13; i < 16; i++) {
      counter++;
      right.innerHTML += `<div id="${letter.toLowerCase()}${counter}" class="a">${counter}</div>`;

      reserving(letter, counter);
      selecting(letter, counter);
    }
  }

  function middleSeats(letter){
    for (let i = 4; i < 13; i++) {
      counter++;
      middle.innerHTML += `<div id="${letter.toLowerCase()}${counter}" class="a">${counter}</div>`;

      reserving(letter, counter);
      selecting(letter, counter);
    }
  }

  function reserving(letter, counter){

    for(const record in reservedSeats){
      if(document.getElementById(`${letter.toLowerCase()}${counter}`).id == reservedSeats[record].seat){
        document.getElementById(`${letter.toLowerCase()}${counter}`).innerHTML = "R";
        document.getElementById(`${letter.toLowerCase()}${counter}`).className = "r";
      }
    }
  }

  function selecting(letter, counter){
    window.addEventListener('load', () => {
      document.getElementById(`${letter.toLowerCase()}${counter}`).addEventListener('click', (event) => {
        if(event.target.className === "s"){
          event.target.className = "a";
          selectedSeats.forEach(seat => {
            if(seat === event.target.id){
              selectedSeats.splice(selectedSeats.indexOf(seat), 1);
            }
            if(selectedSeats.length === 0) reserveButton.style.display = "none";

          });
        }
        else if(event.target.className !== "r"){
          event.target.className = "s";
          selectedSeats.push(event.target.id);
          if(selectedSeats.length > 0) reserveButton.style.display = "block";
        }
      });

    });
  }

  /*-------------------- Form area---------------*/




  reserveButton.addEventListener('click', (event) => {
    event.preventDefault();
    if(selectedSeats.length === 1){

      formParagraph.innerHTML = `You have selected ${selectedSeats.length} Seat`;
    }
    else {
      formParagraph.innerHTML = `You have selected ${selectedSeats.length} Seats`;
    }
    reserveForm.style.display = "block";

  });


  hideform.addEventListener('click', (event) => {
    event.preventDefault();
    reserveForm.style.display = "none";

  });

  confirmButton.addEventListener('submit', (event) => {
    event.preventDefault();
   confirmReservation();
  });
  function confirmReservation() {

    const inputs = document.querySelectorAll('input');
    let recordsCounter = Object.keys(reservedSeats).length + 1;


    selectedSeats.forEach((id) => {

      document.getElementById(id).className = "r";
      document.getElementById(id).innerHTML = "R";

      reservedSeats[`record${recordsCounter++}`] = {
        seat: id,
        owner: {
          fname: inputs[0].value,
          lname: inputs[1].value
        }
      };
      selectedSeats = [];
      reserveButton.style.display = "none";
      document.getElementById('resform').style.display = "none";
      console.log(reservedSeats);
    });

  }
})();
