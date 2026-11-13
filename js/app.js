'use strict';

let hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', handleClick);

function handleClick(e) {
  e.stopPropagation;
  document.getElementById('drop-content').classList.toggle('open');
}
