class ResultTable extends HTMLElement {
  constructor () {
    super()
    this.root = this.attachShadow({ mode: 'open' })
    // Dictionaries to translate numerical data values to text
    this.backgroundColor = {
      1: '#e6ecff',
      2: '#ffd6cc'
    }

    this.genderDisplay = {
      1: '<b style="color:#00a5f2">Male </b><i class="fa fa-mars" style="color:#00a5f2" aria-hidden="true"></i>',
      2: '<b style="color:#b93fd1">Female </b><i class="fa fa-venus" style="color:#b93fd1" aria-hidden="true"></i>',
      3: '<b style="color:#ff7323">Non-Binary </b><i class="fa fa-neuter" style="color:#ff7323" aria-hidden="true"></i>',
      4: '<b style="color:#4260ee">Other </b><i class="fa fa-genderless" style="color:#4260ee" aria-hidden="true"></i>'
    }

    this.voteDisplay = {
      0: '<b style="color:#EF2917">REJECT</b>',
      1: '<b style="color:#008148">AGREE</b>'
    }
  }

  set vote (vote) {
    this._vote = vote
  }

  set pair (pair) {
    this.root.innerHTML = `
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

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
    </style>

    <div class="row">
      <div class="col-sm"><h4>${pair.their.subjectNr === 1 ? 'Leader' : 'No: ' + pair.their.subjectNr}</h4></div>
      <div class="col-sm" align="center"><b>${pair.their.team || ''}</b></div>
      <div class="col-sm" align="center">${this.genderDisplay[pair.their.gender] || ''}</div>
      <div class="col-sm" align="center" color="green"> ${this.voteDisplay[this._vote] || ''} </div>
    </div>
    <table class="table alloc-table" style="background-color:${this.backgroundColor[pair.their.gender] || ''}">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Non-profit Organization</th>
        <th scope="col">Proposed Budget</th>
        <th scope="col">Their Budget</th>
        <th scope="col">Absolute Difference</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Reading Partners</th>
        <td class="otheralloc" id="rp">${pair.proposed.rp || ''}</td>
        <td class="myalloc" id="rp">${pair.their.rp || ''}</td>
        <td class="diffalloc" id="rp">${Math.abs(pair.proposed.rp - pair.their.rp)}</td>
      </tr>
      <tr>
        <th scope="row">Human Health Project</th>
        <td class="otheralloc" id="hhp">${pair.proposed.hhp || ''}</td>
        <td class="myalloc" id="hhp">${pair.their.hhp || ''}</td>
        <td class="diffalloc" id="hhp">${Math.abs(pair.proposed.hhp - pair.their.hhp)}</td>
      </tr>
      <tr>
        <th scope="row">Friends of the Urban Forest</th>
        <td class="otheralloc" id="fuf">${pair.proposed.fuf || ''}</td>
        <td class="myalloc" id="fuf">${pair.their.fuf || ''}</td>
        <td class="diffalloc" id="fuf">${Math.abs(pair.proposed.fuf - pair.their.fuf)}</td>
      </tr>
      <tr>
        <th scope="row">National Alliance for Law Enforcement Support</th>
        <td class="otheralloc" id="nales">${pair.proposed.nales || ''}</td>
        <td class="myalloc" id="nales">${pair.their.nales || ''}</td>
        <td class="diffalloc" id="nales">${Math.abs(pair.proposed.nales - pair.their.nales)}</td>
      </tr>
      <tr>
        <th scope="row">TRIP</th>
        <td class="otheralloc" id="trip">${pair.proposed.trip || ''}</td>
        <td class="myalloc" id="trip">${pair.their.trip || ''}</td>
        <td class="diffalloc" id="trip">${Math.abs(pair.proposed.trip - pair.their.trip)}</td>
      </tr>
      <tr>
        <th scope="row">Total</th>
        <td id="otheralloc_tot">${pair.proposed.findTotal() || ''}</td>
        <td id="myalloc_tot">${pair.their.findTotal() || ''}</td>
        <td id="diffalloc_tot">${pair.their.findTotalDiff(pair.proposed)}</td>
      </tr>
      <tr>
        <th scope="row">Earnings</th>
        <td id="earnings" align="center"><b>${20 - pair.their.findTotalDiff(pair.proposed)}</b></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>`
  }
}

customElements.define('result-table', ResultTable)
