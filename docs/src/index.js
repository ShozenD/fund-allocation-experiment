import './Components/vote-table.js'
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
  const vt = document.createElement('vote-table');
  vt.pair = pair;
  main.appendChild(vt);
}