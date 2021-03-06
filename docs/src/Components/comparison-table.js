class ComparisonTable extends HTMLElement {
  constructor () {
    super()

    this.root = this.attachShadow({ mode: 'open' })

    // Dictionaries to translate numerical data values to text
    this.backgroundColor = {
      1: '#e6ecff',
      2: '#ffd6cc'
    }

    this.teamDisplay = {
      A: 'Team: <span style="color:Dodgerblue"><b>A</b> <i class="fa fa-gem"></i></span>',
      B: 'Team: <span style="color:Tomato"><b>B</b> <i class="fas fa-mountain"></i></span>'
    }

    this.genderDisplay = {
      1: '<b style="color:#1b94b9">Male </b><i class="fa fa-mars" style="color:#1b94b9" aria-hidden="true"></i>',
      2: '<b style="color:#bb281e">Female </b><i class="fa fa-venus" style="color:#bb281e" aria-hidden="true"></i>',
      3: '<b style="color:#eca33c">Non-Binary </b><i class="fa fa-neuter" style="color:#eca33c" aria-hidden="true"></i>',
      4: '<b style="color:#a2b86c">Other </b><i class="fa fa-genderless" style="color:#a2b86c" aria-hidden="true"></i>'
    }
  }

  set pair (pair) {
    this.root.innerHTML = `
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css" integrity="sha384-REHJTs1r2ErKBuJB0fCK99gCYsVjwxHrSU0N7I1zl9vZbggVJXRMsv/sLlOAGb4M" crossorigin="anonymous">

    <style>
      .otheralloc {
        text-align: center;
      }

      .myalloc {
        text-align: center;
      }

      .diffalloc {
        text-align:center;
      }

      #otheralloc_tot { text-align: center }

      #myalloc_tot { text-align: center }
      
      #diffalloc_tot { text-align: center }

      #earnings { text-align:center } 
    </style>

    <div class="row">
      <div class="col-sm" align="left"><b>Budget ${pair.other.subjectNr === 1 ? 'Leader' : pair.other.subjectNr}</b></div>
      <div class="col-sm" align="center">${this.teamDisplay[pair.other.team] || ''}</div>
      <div class="col-sm" align="right">${this.genderDisplay[pair.other.gender] || ''}</div>
    </div>
    <table class="table table-sm table-bordered table-hover alloc-table" style="background-color:${this.backgroundColor[pair.other.gender] || ''}">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Non-profit Organization</th>
        <th scope="col">Their Budget</th>
        <th scope="col">Your Budget</th>
        <th scope="col">Absolute Difference</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Reading Partners</th>
        <td class="otheralloc" id="rp">${pair.other.rp || ''}</td>
        <td class="myalloc" id="rp">${pair.own.rp || ''}</td>
        <td class="diffalloc" id="rp">${Math.abs(pair.other.rp - pair.own.rp)}</td>
      </tr>
      <tr>
        <th scope="row">Human Health Project</th>
        <td class="otheralloc" id="hhp">${pair.other.hhp || ''}</td>
        <td class="myalloc" id="hhp">${pair.own.hhp || ''}</td>
        <td class="diffalloc" id="hhp">${Math.abs(pair.other.hhp - pair.own.hhp)}</td>
      </tr>
      <tr>
        <th scope="row">Friends of the Urban Forest</th>
        <td class="otheralloc" id="fuf">${pair.other.fuf || ''}</td>
        <td class="myalloc" id="fuf">${pair.own.fuf || ''}</td>
        <td class="diffalloc" id="fuf">${Math.abs(pair.other.fuf - pair.own.fuf)}</td>
      </tr>
      <tr>
        <th scope="row">National Alliance for Law Enforcement Support</th>
        <td class="otheralloc" id="nales">${pair.other.nales || ''}</td>
        <td class="myalloc" id="nales">${pair.own.nales || ''}</td>
        <td class="diffalloc" id="nales">${Math.abs(pair.other.nales - pair.own.nales)}</td>
      </tr>
      <tr>
        <th scope="row">TRIP</th>
        <td class="otheralloc" id="trip">${pair.other.trip || ''}</td>
        <td class="myalloc" id="trip">${pair.own.trip || ''}</td>
        <td class="diffalloc" id="trip">${Math.abs(pair.other.trip - pair.own.trip)}</td>
      </tr>
      <tr>
        <th scope="row">Total</th>
        <td id="otheralloc_tot">${pair.other.findTotal() || ''}</td>
        <td id="myalloc_tot">${pair.own.findTotal() || ''}</td>
        <td id="diffalloc_tot">${pair.own.findTotalDiff(pair.other)}</td>
      </tr>
      <tr>
        <th scope="row" colspan="2" >Your "earnings" if this budget is passed</th>
        <td id="earnings"><b>${100 - pair.own.findTotalDiff(pair.other)}</b></td>
        <td align="center">${pair.own.subjectNr === 1 ? '<button type="button" class="btn btn-outline-info btn-block" onclick="submitAlloc(' + pair.other.subjectNr + ')">Select</button>' : ''}</button></td>
      </tr>
    </tbody>
  </table>`
  }
}

customElements.define('comparison-table', ComparisonTable)
