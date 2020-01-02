import './comparison-table.js'
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
  const ct = document.createElement('comparison-table');
  ct.pair = pair;
  main.appendChild(ct);
}