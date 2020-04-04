class VoteTable extends HTMLElement {
  constructor () {
    super()
    this.root = this.attachShadow({ mode: 'open' })

    this.backgroundColor = {
      1: '#e6ecff',
      2: '#ffd6cc'
    }

    this.genderDisplay = {
      1: '<b style="color:#1b94b9">Male </b><i class="fa fa-mars" style="color:#1b94b9" aria-hidden="true"></i>',
      2: '<b style="color:#bb281e">Female </b><i class="fa fa-venus" style="color:#bb281e" aria-hidden="true"></i>',
      3: '<b style="color:#eca33c">Non-Binary </b><i class="fa fa-neuter" style="color:#eca33c" aria-hidden="true"></i>',
      4: '<b style="color:#a2b86c">Other </b><i class="fa fa-genderless" style="color:#a2b86c" aria-hidden="true"></i>'
    }

    this.teamDisplay = {
      A: '<span style="color:Dodgerblue"><b>A</b> <i class="fa fa-gem"></i></span>',
      B: '<span style="color:Tomato"><b>B</b> <i class="fas fa-mountain"></i></span>'
    }
  }

  set pair (pair) {
    this.root.innerHTML = `
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css" integrity="sha384-REHJTs1r2ErKBuJB0fCK99gCYsVjwxHrSU0N7I1zl9vZbggVJXRMsv/sLlOAGb4M" crossorigin="anonymous">

    <div class="row">
      <div class="col-sm" align="left">Team: ${this.teamDisplay[pair.other.team] || ''}</b></div>
      <div class="col-sm" align="center">My Team: ${this.teamDisplay[pair.own.team] || ''}</div>
      <div class="col-sm" align="right">${this.genderDisplay[pair.other.gender] || ''}</div>
    </div>

    <table class="table table-bordered table-hover alloc-table" style="background-color:${this.backgroundColor[pair.other.gender] || ''}">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Non-profit Organization</th>
          <th scope="col">Leader's Choice</th>
          <th scope="col">Your Allocation</th>
          <th scope="col">Difference</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th scope="row" align="left">Reading Partners</th>
          <td class="leader-alloc" id="rp" align="center">${pair.other.rp}</td>
          <td class="my-alloc" id="rp" align="center">${pair.own.rp}</td>
          <td class="diff-alloc" id="rp" align="center">${Math.abs(pair.other.rp - pair.own.rp)}</td>
        </tr>
        <tr>
          <th scope="row" align="left">Human Health Partners</th>
          <td class="leader-alloc" id="rp" align="center">${pair.other.hhp}</td>
          <td class="my-alloc" id="rp" align="center">${pair.own.hhp}</td>
          <td class="diff-alloc" id="rp" align="center">${Math.abs(pair.other.hhp - pair.own.hhp)}</td>
        </tr>
        <tr>
          <th scope="row" align="left">Friends of the Urban Forest</th>
          <td class="leader-alloc" id="rp" align="center">${pair.other.fuf}</td>
          <td class="my-alloc" id="rp" align="center">${pair.own.fuf}</td>
          <td class="diff-alloc" id="rp" align="center">${Math.abs(pair.other.fuf - pair.own.fuf)}</td>
        </tr>
        <tr>
          <th scope="row" align="left">National Alliance for Law Enforcement Support</th>
          <td class="leader-alloc" id="rp" align="center">${pair.other.nales}</td>
          <td class="my-alloc" id="rp" align="center">${pair.own.nales}</td>
          <td class="diff-alloc" id="rp" align="center">${Math.abs(pair.other.nales - pair.own.nales)}</td>
        </tr>
        <tr>
          <th scope="row" align="left">TRIP</th>
          <td class="leader-alloc" id="rp" align="center">${pair.other.trip}</td>
          <td class="my-alloc" id="rp" align="center">${pair.own.trip}</td>
          <td class="diff-alloc" id="rp" align="center">${Math.abs(pair.other.trip - pair.own.trip)}</td>
        </tr>
        <tr>
          <th scope="row" align="center">Your "earnings" if this budget is passed</th>
          <td id="earnings" align="center"><b>${100 - pair.own.findTotalDiff(pair.other)}</b></td>
          <td>${subjectNr !== 1 ? '<button type="button" class="btn btn-outline-success btn-block" id="vote-agree" onclick="vote(1)">Agree</button>' : ''}</td>
          <td>${subjectNr !== 1 ? '<button type="button" class="btn btn-outline-danger btn-block" id="vote-agree" onclick="vote(0)">Disagree</button>' : ''}</td>
        </tr>
      </tbody>
    </table>
    `
  }
}

customElements.define('vote-table', VoteTable)
