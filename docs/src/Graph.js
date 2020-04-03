/**
 * Displays a donut graph for the subjects budget allocation.
 * Requires a predefined HTML element with element id set to "my-alloc-graph".
 * @param {Object} alloc the subject's budget allocation(an instance of the Allocation Class)
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
 * Draws donut graphs that compare two different budget allocations. The x, y parameters are optimized for the group allocation stage.
 * @param {HTMLElement} el The HTML element in which to attach the graph to.
 * @param {Object} own The subject's own budget allocation(an instance of the Allocation Class).
 * @param {Object} other The budget allocation to compare to(an instance of the Allocation Class).
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
        x: 0.98,
        y: 1.2
      },
      {
        font: { size: 20 },
        showarrow: false,
        text: 'Your Budget',
        x: 0.92,
        y: 1.2
      }
    ],
    showlegend: true,
    grid: { rows: 1, columns: 2 }
  }

  Plotly.newPlot('comparison-graph-' + other.subjectNr, data, layout)
}

/**
 * Draws donut graphs that compare two different budget allocations. The x, y parameters are optimized for the voting page.
 * @param {HTMLElement} el The HTML element to which to attach the graph
 * @param {Object} own The subject's own budget allocation(an instance of the Allocation Class).
 * @param {Object} other The budget allocation to compare to(an instance of the Allocation Class).
 * @param {Boolean} update Changes the behavior of the function for updating the comparison graphs
 */
function voteComparisonGraph (el, own, other) {
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
        x: 0.90,
        y: 1.5
      },
      {
        font: { size: 20 },
        showarrow: false,
        text: 'Your Budget',
        x: 0.92,
        y: 1.5
      }
    ],
    showlegend: true,
    grid: { rows: 1, columns: 2 }
  }

  Plotly.newPlot('comparison-graph-' + other.subjectNr, data, layout)
}

/**
 * Draws donut graphs that compare two different budget allocations. The x, y parameters are optimized for the voting page.
 * @param {HTMLElement} el The HTML element to which to attach the graph
 * @param {Object} own The subject's own budget allocation(an instance of the Allocation Class).
 * @param {Object} other The budget allocation to compare to(an instance of the Allocation Class).
 * @param {Boolean} update Changes the behavior of the function for updating the comparison graphs
 */
function resultComparisonGraph (el, proposed, their) {
  const g = document.createElement('div')
  g.setAttribute('id', 'comparison-graph-' + other.subjectNr)
  el.appendChild(g)

  const labels = ['RP', 'HHP', 'FUF', 'NALES', 'TRIP']
  const values = [
    [proposed.rp, proposed.hhp, proposed.fuf, proposed.nales, proposed.trip],
    [their.rp, their.hhp, their.fuf, their.nales, their.trip]
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
    name: 'Their Budget',
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
        x: 0.90,
        y: 1.5
      },
      {
        font: { size: 20 },
        showarrow: false,
        text: 'Their Budget',
        x: 0.92,
        y: 1.5
      }
    ],
    showlegend: true,
    grid: { rows: 1, columns: 2 }
  }

  Plotly.newPlot('comparison-graph-' + other.subjectNr, data, layout)
}
