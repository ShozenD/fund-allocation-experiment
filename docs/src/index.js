import './Components/comparison-table.js'
import { otherAllocs, myAlloc } from './dummyAlloc.js'

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
    var rt = fetchAllocations(myAlloc, otherAllocs[index])
    el.appendChild(rt)
  })
}

function fetchAllocations (own, other) {
  const pair = {
    own: own,
    other: other
  }
  const ct = document.createElement('comparison-table')
  ct.pair = pair
  return ct
}
