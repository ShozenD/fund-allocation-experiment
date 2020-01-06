class VoteTable extends HTMLElement {
  constructor () {
    super()

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
      Diamond: '<span style="color:Dodgerblue"><b>Diamond</b> <i class="fa fa-gem"></i></span>',
      Triangle: '<span style="color:Tomato"><b>Triangle</b> <i class="fas fa-mountain"></i></span>'
    }
  }

  set pair (pair) {
    this.innerHTML = `
    <div class="row">
      <div class="col-sm">Team: ${this.teamDisplay[pair.other.team] || ''}</b></div>
      <div class="col-sm" align="right">My Team: ${this.teamDisplay[pair.own.team] || ''}</div>
      <div class="col-sm" align="right">${this.genderDisplay[pair.other.gender]}</div>
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
          <th scope="row" align="left">Reading Partners</th>
          <td class="leader-alloc" id="rp" align="center">${pair.other.trip}</td>
          <td class="my-alloc" id="rp" align="center">${pair.own.trip}</td>
          <td class="diff-alloc" id="rp" align="center">${Math.abs(pair.other.trip - pair.own.trip)}</td>
        </tr>
        <tr>
          <th scope="row" align="center">Your Earnings</th>
          <td colspan="3" id="earnings" align="center"><b>${20 - pair.own.findTotalDiff(pair.other)}</b></td>
        </tr>
      </tbody>
    </table>
    `
  }
}

customElements.define('vote-table', VoteTable)
