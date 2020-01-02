import './main-table.js'
import { otherAlloc, playerAlloc } from './dummyAlloc.js'

window.addEventListener('load', () => {
  fetchAllocations();
});

function fetchAllocations() {
  const pair = {
    own: playerAlloc,
    other: otherAlloc
  }
  const main = document.querySelector('main');
  const mt = document.createElement('main-table');
  mt.allocation = pair.other;
  main.appendChild(mt);
}