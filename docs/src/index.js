import './Components/main-table.js'
import { otherAllocs, myAlloc, vote } from './dummyAlloc.js'

window.addEventListener('load', () => {
  // createGrid()
  displayOtherAllocs()
})

/*
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
*/

function displayOtherAllocs () {
  const main = document.querySelector('main')
  const mt = document.createElement('main-table')
  mt.allocation = myAlloc
  main.appendChild(mt)
  /*
  document.querySelectorAll('.alloc-col').forEach(function (el, index) {
    var rt = fetchAllocations(myAlloc, otherAllocs[index])
    el.appendChild(rt)
  })
  */
}

function fetchAllocations (own, other) {
  const pair = {
    other: other,
    own: own
  }
  const vt = document.createElement('main-table')
  vt.allocation = own
  return vt
}
