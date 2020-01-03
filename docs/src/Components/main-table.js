class MainTable extends HTMLElement {
  constructor () {
    super()
  }

  set allocation (allocation) {
    this.innerHTML = `<br>
    <div class="row">
      <div class="col-sm"><h2 align="left">My Allocation</h2></div>
      <div class="col-sm"></div>
      <div class="col-sm">${allocation.team || ''}</div>
    </div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Non-profit Organization</th>
          <th scope="col">About</th>
          <th scope="col">Original Amount</th>
          ${allocation.subjectNr === 1 ? '<th scope="col">New Amount</th>' : ''}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" align="left">Reading Partners</th>
          <td align="left">Commited to helping children become lifelong readers</td>
          <td name="alloc" id="rp" align="center">${allocation.rp}</td>
          ${allocation.subjectNr === 1 ? '<td align="center"><input type="text" class="form-control my-new-alloc" id="rp" value=' + allocation.rp + ' onchange="update()"></td>' : ''}
        </tr>
        <tr>
          <th scope="row" align="left">Human Health Project</th>
          <td align="left">Assists individuals who are ill, along with their family, friends & practitioners</td>
          <td name="alloc" id="rp" align="center">${allocation.hhp}</td>
          ${allocation.subjectNr === 1 ? '<td align="center"><input type="text" class="form-control my-new-alloc" id="rp" value=' + allocation.hhp + ' onchange="update()"></td>' : ''}
        </tr>
        <tr>
          <th scope="row" align="left">Friends of the Urban Forest</th>
          <td align="left">Promote an urban forest through community plantings, maintenance, education, and advocacy</td>
          <td name="alloc" id="rp" align="center">${allocation.fuf}</td>
          ${allocation.subjectNr === 1 ? '<td align="center"><input type="text" class="form-control my-new-alloc" id="rp" value=' + allocation.fuf + ' onchange="update()"></td>' : ''}
        </tr>
        <tr>
          <th scope="row" align="left">National Allicance for Law Enforcement Support</th>
          <td align="left">Provides emotional and financial support to police families</td>
          <td name="alloc" id="rp" align="center">${allocation.nales}</td>
          ${allocation.subjectNr === 1 ? '<td align="center"><input type="text" class="form-control my-new-alloc" id="rp" value=' + allocation.nales + ' onchange="update()"></td>' : ''}
        </tr>
        <tr>
          <th scope="row" align="left">TRIP</th>
          <td align="left">Promote transportation policies that help relieve traffic congestion</td>
          <td name="alloc" id="rp" align="center">${allocation.trip}</td>
          ${allocation.subjectNr === 1 ? '<td align="center"><input type="text" class="form-control my-new-alloc" id="rp" value=' + allocation.trip + ' onchange="update()"></td>' : ''}
        </tr>
        <tr>
          <th scope="row" align="left">Total</th>
          <td></td>
          <td id="my-alloc-total" align="center">${allocation.findTotal()}</td>
          ${allocation.subjectNr === 1 ? '<td align="center"><input type="text" class="form-control" id="my-new-alloc-total" value=' + allocation.findTotal() + '></td>' : ''}
        </tr>
        ${allocation.subjectNr === 1 ? '<tr><th scope="row" align="left"></th><td align="left"></td><td></td><td align="center"><input class="btn btn-primary" value="Submit New Allocation" onclick="submitAlloc(1)"></td></tr>' : ''}
      </tbody>
    </table>
    `
  }
}

customElements.define('main-table', MainTable)
