class VoteTable extends HTMLElement {
  constructor() {
    super();

    this.backgroundColor = {
      1: '#e6ecff',
      2: '#ffd6cc',
    }

    this.gender = {
      1: 'Male',
      2: 'Female',
      3: 'Non Binary',
      4: 'Other'
    }
  }

  set pair(pair) {
    this.innerHTML = `
    <div class="row">
      <div class="col-sm"><b>Allocation Team: ${pair.other.team || ''}</b></div>
      <div class="col-sm"><b>My Team: ${pair.own.team || ''}</b></div>
      <div class="col-sm">${this.gender[pair.other.gender]}</div>
    </div>

    <table class="table" style="background-color:${this.backgroundColor[pair.other.gender] || ''}">
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
          <td id="earnings" align="center">${20 - pair.own.findTotalDiff(pair.other)}</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    `
  }
}

customElements.define('vote-table', VoteTable);