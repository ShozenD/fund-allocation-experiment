/**
 * A table that displays the subject's budget allocation.
 */
class MainTable extends HTMLElement {
  constructor () {
    super()

    this.root = this.attachShadow({ mode: 'open' })

    this.teamDisplay = {
      A: '<span style="color:Dodgerblue;"><b>A</b> <i class="fa fa-gem"></i></span>',
      B: '<span style="color:Tomato"><b>B</b> <i class="fas fa-mountain"></i></span>'
    }
  }

  set allocation (allocation) {
    this.root.innerHTML = `
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css" integrity="sha384-REHJTs1r2ErKBuJB0fCK99gCYsVjwxHrSU0N7I1zl9vZbggVJXRMsv/sLlOAGb4M" crossorigin="anonymous">
    

    <style>
      .alloc {
        text-align: center;
      }

      span {
        font-size: larger
      }
    </style>

    <div class="row">
      <div class="col-sm" align="right">${this.teamDisplay[allocation.team] || ''}</div>
    </div>
    <table class="table table-bordered table-hover alloc-table">
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
          <td class="alloc">${allocation.rp}</td>
          ${allocation.subjectNr === 1 ? '<td align="center"><input type="text" class="form-control my-new-alloc" id="rp" value=' + 0 + ' onchange="update()"></td>' : ''}
        </tr>
        <tr>
          <th scope="row" align="left">Human Health Project</th>
          <td align="left">Assists individuals who are ill, along with their family, friends & practitioners</td>
          <td class="alloc">${allocation.hhp}</td>
          ${allocation.subjectNr === 1 ? '<td align="center"><input type="text" class="form-control my-new-alloc" id="hhp" value=' + 0 + ' onchange="update()"></td>' : ''}
        </tr>
        <tr>
          <th scope="row" align="left">Friends of the Urban Forest</th>
          <td align="left">Promote an urban forest through community plantings, maintenance, education, and advocacy</td>
          <td class="alloc">${allocation.fuf}</td>
          ${allocation.subjectNr === 1 ? '<td align="center"><input type="text" class="form-control my-new-alloc" id="fuf" value=' + 0 + ' onchange="update()"></td>' : ''}
        </tr>
        <tr>
          <th scope="row" align="left">National Allicance for Law Enforcement Support</th>
          <td align="left">Provides emotional and financial support to police families</td>
          <td class="alloc">${allocation.nales}</td>
          ${allocation.subjectNr === 1 ? '<td align="center"><input type="text" class="form-control my-new-alloc" id="nales" value=' + 0 + ' onchange="update()"></td>' : ''}
        </tr>
        <tr>
          <th scope="row" align="left">TRIP</th>
          <td align="left">Promote transportation policies that help relieve traffic congestion</td>
          <td class="alloc">${allocation.trip}</td>
          ${allocation.subjectNr === 1 ? '<td align="center"><input type="text" class="form-control my-new-alloc" id="trip" value=' + 0 + ' onchange="update()"></td>' : ''}
        </tr>
        <tr>
          <th colspan="2" scope="row" align="left">Total</th>
          <td id="my-alloc-total" align="center">${allocation.findTotal()}</td>
          ${allocation.subjectNr === 1 ? '<td align="center"><input type="text" class="form-control" id="my-new-alloc-total" value=' + 0 + '></td>' : ''}
        </tr>
        ${allocation.subjectNr === 1 ? '<tr><th colspan="2" scope="row" align="left"></th><td colspan="2" align="center"><input class="btn btn-outline-info btn-block" value="Submit New Allocation" onclick="submitAlloc(1)"></td></tr>' : ''}
      </tbody>
    </table>
    `
  }
}

customElements.define('main-table', MainTable)
