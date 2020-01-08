import './Components/comparison-table.js'
import './Components/main-table.js'
import { otherAllocs, myAlloc, vote, myNewAlloc } from './dummyAlloc.js'

window.addEventListener('load', () => {
  createGrid()
  displayOtherAllocs()
  displayMyAlloc(myAlloc)
})

/**
 * Creates a grid in which to append the comparison tables and graphs
 */
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

/**
 * Displays the subject's own allocation table
 * @param {Object} myalloc the subject's own allocation
 */
function displayMyAlloc (myalloc) {
  const d = document.querySelector('.my-alloc')
  const mt = document.createElement('main-table')
  mt.allocation = myalloc

  d.appendChild(mt)
}

function displayOtherAllocs () {
  document.querySelectorAll('.alloc-col').forEach(function (el, index) {
    // Display Comparison Table
    var rt = fetchAllocations(myAlloc, otherAllocs[index])
    el.appendChild(rt)

    // Display Graph
    drawGraph(el, myAlloc, otherAllocs[index])
  })
}

function fetchAllocations (own, other) {
  const pair = {
    other: other,
    own: own
  }
  const ct = document.createElement('comparison-table')
  ct.pair = pair
  return ct
}

/**
 * Draws donut graphs that compare two different budget allocations.
 * @param {HTML Element} el The HTML element to which to attach the graph
 * @param {Object} own The subject's own budget allocation
 * @param {Object} other The budget allocation to compare to.
 */
function drawGraph (el, own, other) {
  const g = document.createElement('div')
  g.setAttribute('id', 'comparison-graph-' + other.subjectNr)
  el.appendChild(g)

  const labels = ['RP', 'HHP', 'FUF', 'NALES', 'TRIP']
  const values = [
    [own.rp, own.hhp, own.fuf, own.nales, own.trip],
    [other.rp, other.hhp, other.fuf, other.nales, other.trip]
  ]
  const colors = ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600']

  var data = [{
    values: values[1],
    labels: labels,
    hole: 0.4,
    type: 'pie',
    name: 'Their Budget',
    marker: { colors: colors },
    domain: { row: 0, column: 0 },
    hoverinfo: 'label+percent+name',
    sort: false
  }, {
    values: values[0],
    labels: labels,
    hole: 0.4,
    type: 'pie',
    name: 'My Budget',
    domain: { row: 0, column: 1 },
    hoverinfo: 'label+percent+name'
  }]

  var layout = {
    annotations: [
      {
        font: { size: 20 },
        showarrow: false,
        text: 'Their Budget',
        x: 0.117,
        y: 1.1
      },
      {
        font: { size: 20 },
        showarrow: false,
        text: 'My Budget',
        x: 0.87,
        y: 1.1
      }
    ],
    showlegend: true,
    grid: { rows: 1, columns: 2 }
  }

  Plotly.newPlot('comparison-graph-' + other.subjectNr, data, layout)
}
