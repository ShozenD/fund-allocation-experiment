class ComparisonTable extends HTMLElement {

  constructor(){
    super();

    this.backgroundColor = {
      1: '#e6ecff',
      2: '#ffd6cc',
    }

  }

  set pair(pair){

    this.innerHTML = `    
    <div class="row">
      <div class="col-sm"><h4>Budget: ${pair.other.subjectNr == 1 ? 'Leader' : pair.other.subjectNr}</h4></div>
      <div class="col-sm">Team: ${pair.other.team || ''}</div>
      <div class="col-sm">${pair.other.gender || ''}</div>
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
        <th scope="row">Your Earnings</th>
        <td id="earnings">${20 - pair.own.findTotalDiff(pair.other)}</td>
        <td></td>
        <td>${pair.own.subjectNr === 1 ? '<button type="button" class="btn btn-primary btn" onclick="submitAlloc(' + pair.other.subjectNr + ')">Submit</button>' : ''}</button></td>
      </tr>
    </tbody>
  </table>`;
  }

}

customElements.define('comparison-table', ComparisonTable);