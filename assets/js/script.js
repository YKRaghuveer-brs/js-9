/** 
Author:    Build Rise Shine with Nyros (BRS) 
Created:   2023
Library / Component: Script file
Description: Virtual Keyboard
(c) Copyright by BRS with Nyros. 
**/

// DOM Elements
const keys = document.querySelectorAll(".keys");
const textarea = document.querySelector("textarea");
const deleteBtn = document.getElementById("delete");
const shiftBtn = document.getElementById("shift");
const spaceBtn = document.getElementById("space");

// Default theme
let chathams_blue = "#1A4B84";

// Init char array
let chars = [];
// Characters for each row
const row1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Delete'];
const row2 = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']'];
const row3 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
const row4 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const row5 = ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'Shift', 'Space'];

// Function to create buttons
function createButtons(row, containerId) {
  const container = document.getElementById(containerId);
  row.forEach(char => {
    const btn = document.createElement('button');
    btn.innerText = char;
    btn.classList.add('btn', 'keys');
    if (char === 'Delete') {
      btn.id = 'delete';
    } else if (char === 'Shift') {
      btn.id = 'shift';
    } else if (char === 'Space') {
      btn.id = 'space';
    }
    container.appendChild(btn);
  });
}

// Create all buttons
createButtons(row1, 'row1');
createButtons(row2, 'row2');
createButtons(row3, 'row3');
createButtons(row4, 'row4');
createButtons(row5, 'row5');

// Attach event listeners
document.querySelectorAll(".keys").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText === 'Delete') {
      chars.pop();
    } else if (btn.innerText === 'Space') {
      chars.push(' ');
    } else if (btn.innerText !== 'Shift') {
      textarea.value += btn.innerText;
      chars = textarea.value.split("");
    }
    textarea.value = chars.join("");
  });
});
// for each to get the key press
keys.forEach((btn) => {
  btn.addEventListener("click", () => {
    textarea.value += btn.innerText;
    chars = textarea.value.split("");
  });
});

// delete button event
deleteBtn.addEventListener("click", () => {
  chars.pop();
  textarea.value = chars.join("");
});

// spacebar button event
spaceBtn.addEventListener("click", () => {
  chars.push(" ");
  textarea.value = chars.join("");
});

// shift button event 
shiftBtn.addEventListener("click", () => {
  keys.forEach((btn) => {
    btn.classList.toggle("upper");
  });
});

// Change Theme
function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("movie-theme", theme);
}
setTheme(localStorage.getItem("movie-theme") || chathams_blue);
