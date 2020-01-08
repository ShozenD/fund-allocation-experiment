/**
 * Displays a donut graph for the subjects budget allocation.
 * Requires a predefined element with id = my-alloc-graph.
 * @param {Object} alloc the subject's budget allocation
 */
function mainGraph (alloc) {
  const labels = ['RP', 'HHP', 'FUF', 'NALES', 'TRIP']
  const values = [alloc.rp, alloc.hhp, alloc.fuf, alloc.nales, alloc.trip]
  const colors = ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600']

  var data = [{
    name: 'My Budget',
    values: values,
    labels: labels,
    type: 'pie',
    hole: 0.4,
    marker: { colors: colors },
    sort: false,
    hoverinfo: 'label+percent+name'
  }]

  var layout = {
    showlegend: true
  }

  Plotly.newPlot('my-alloc-graph', data, layout)
}

/**
 * Draws donut graphs that compare two different budget allocations.
 * @param {HTML Element} el The HTML element to which to attach the graph
 * @param {Object} own The subject's own budget allocation
 * @param {Object} other The budget allocation to compare to.
 * @param {Boolean} update Changes the behavior of the function for updating the comparison graphs
 */
function comparisonGraph (el, own, other, update = false) {
  if (!update) {
    const g = document.createElement('div')
    g.setAttribute('id', 'comparison-graph-' + other.subjectNr)
    el.appendChild(g)
  }

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
    name: 'Your Budget',
    domain: { row: 0, column: 1 },
    hoverinfo: 'label+percent+name',
    sort: false
  }]

  var layout = {
    height: 400,
    annotations: [
      {
        font: { size: 20 },
        showarrow: false,
        text: 'Their Budget',
        x: 0,
        y: 1.0
      },
      {
        font: { size: 20 },
        showarrow: false,
        text: 'Your Budget',
        x: 0.97,
        y: 1.0
      }
    ],
    showlegend: true,
    grid: { rows: 1, columns: 2 }
  }

  Plotly.newPlot('comparison-graph-' + other.subjectNr, data, layout)
}

/**
 * Draws donut graphs that compare two different budget allocations.
 * @param {HTML Element} el The HTML element to which to attach the graph
 * @param {Object} own The subject's own budget allocation
 * @param {Object} other The budget allocation to compare to.
 * @param {Boolean} update Changes the behavior of the function for updating the comparison graphs
 */
function voteComparisonGraph (el, own, other, update = false) {
  if (!update) {
    const g = document.createElement('div')
    g.setAttribute('id', 'comparison-graph-' + other.subjectNr)
    el.appendChild(g)
  }

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
    name: 'Proposed Budget',
    marker: { colors: colors },
    domain: { row: 0, column: 0 },
    hoverinfo: 'label+percent+name',
    sort: false
  }, {
    values: values[0],
    labels: labels,
    hole: 0.4,
    type: 'pie',
    name: 'Your Budget',
    domain: { row: 0, column: 1 },
    hoverinfo: 'label+percent+name',
    sort: false
  }]

  var layout = {
    height: 400,
    annotations: [
      {
        font: { size: 20 },
        showarrow: false,
        text: 'Proposed Budget',
        x: 0.15,
        y: 1.3
      },
      {
        font: { size: 20 },
        showarrow: false,
        text: 'Your Budget',
        x: 0.85,
        y: 1.3
      }
    ],
    showlegend: true,
    grid: { rows: 1, columns: 2 }
  }

  Plotly.newPlot('comparison-graph-' + other.subjectNr, data, layout)
}
