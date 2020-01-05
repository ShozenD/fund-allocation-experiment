import './Components/result-table.js'
import { otherAllocs, myAlloc, vote } from './dummyAlloc.js'

window.addEventListener('load', () => {
  createGrid()
  displayOtherAllocs()
})

function createGrid () {
  const main = document.querySelector('main')
  var row = document.createElement('div')
  row.setAttribute('class', 'row')

  var col = document.createElement('div')
  col.setAttribute('class', 'col-sm alloc-col')

  row.appendChild(col)
  row.appendChild(col.cloneNode(true))

  for (var i = 0; i < otherAllocs.length / 2; i++) {
    main.appendChild(row.cloneNode(true))
  }
}

function displayOtherAllocs () {
  document.querySelectorAll('.alloc-col').forEach(function (el, index) {
    var rt = fetchAllocations(myAlloc, otherAllocs[index], vote[index])
    el.appendChild(rt)
  })
}

function fetchAllocations (proposed, their, vote) {
  const pair = {
    proposed: proposed,
    their: their
  }
  const rt = document.createElement('result-table')
  rt.vote = vote
  rt.pair = pair
  return rt
}
