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
      <div class="col-sm"><h4>Budget: ${pair.other.subjectNr === 1 ? 'Leader' : pair.other.subjectNr}</h4></div>
      <div class="col-sm" align="center">Team: <b>${pair.other.team || ''}</b></div>
      <div class="col-sm" align="center">Gender: ${this.genderDisplay[pair.other.gender] || ''}</div>
      <div class="col-sm" align="center" color="green"> ${this.voteDisplay[this._vote] || ''} </div>
    </div>
    <table class="table alloc-table" style="background-color:${this.backgroundColor[pair.other.gender] || ''}">
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
        <th scope="row">Earnings</th>
        <td id="earnings" align="center"><b>${20 - pair.own.findTotalDiff(pair.other)}</b></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>`
  }
}

customElements.define('result-table', ResultTable)
