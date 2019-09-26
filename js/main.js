const about = document.querySelector('#about-body');
const now = document.querySelector('#right-now');
const goals = document.querySelector('#goal-body');

const aboutHead = document.querySelector('#head-about');
const nowHead = document.querySelector('#head-now');
const goalHead = document.querySelector('#head-goal');

// -------------------------------------------
// --------FUNCTION TO SHOW/HIDE -------------
// -------------------------------------------
function display(past, present, future) {
  about.setAttribute("class", `${past}`);
  goals.setAttribute("class", `${future}`);
  now.setAttribute("class", `${present}`);
};

// -------------------------------------------
// --------FUNCTION TO SHOW/HIDE -------------
// -------------------------------------------
function select(past, present, future) {
  aboutHead.setAttribute("class", `${past}`);
  nowHead.setAttribute("class", `${present}`);
  goalHead.setAttribute("class", `${future}`);
};


// -------------------------------------------
// --------EVENT HANDLERS -------------
// -------------------------------------------
document.addEventListener('click', (e) => {
  if (e.target.id === 'head-now') {
    display('hide', 'show', 'hide');
    select('not-selected', 'selected', 'not-selected');
  } else if (e.target.id === 'head-goal') {
    display('hide', 'hide', 'show');
    select('not-selected', 'not-selected', 'selected');
  } else if (e.target.id === 'head-about') {
    display('show', 'hide', 'hide');
    select('selected', 'not-selected', 'not-selected');
  }
});
