/**
 * A table that displays the subject's budget allocation in the individual allocation stage.
 */
class DebriefTable extends HTMLElement {
  constructor () {
    super()

    this.teamDisplay = {
      A: '<span style="color:Dodgerblue;"><b>A</b> <i class="fa fa-gem"></i></span>',
      B: '<span style="color:Tomato"><b>B</b> <i class="fas fa-mountain"></i></span>'
    }
  }

  set allocation (allocation) {
    this.innerHTML = `
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css" integrity="sha384-REHJTs1r2ErKBuJB0fCK99gCYsVjwxHrSU0N7I1zl9vZbggVJXRMsv/sLlOAGb4M" crossorigin="anonymous">

    <style>
      .alloc {
        text-align: center;
      }

      span {
        font-size: larger
      }
    </style>

    <br>
    <div class="row">
      <div class="col-sm"><h2 align="left">My Budget Allocation</h2></div>
      <div class="col-sm" align="right">${('MyTeam: ' + this.teamDisplay[allocation.team]) || ''}</div>
    </div>
    <table class="table table-bordered table-hover alloc-table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Non-profit Organization</th>
          <th scope="col">About</th>
          <th scope="col">Original Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row" align="left">Reading Partners</th>
          <td align="left">Commited to helping children become lifelong readers</td>
          <td class="alloc">${allocation.rp}</td>
        </tr>
        <tr>
          <th scope="row" align="left">Human Health Project</th>
          <td align="left">Assists individuals who are ill, along with their family, friends & practitioners</td>
          <td class="alloc">${allocation.hhp}</td>
        </tr>
        <tr>
          <th scope="row" align="left">Friends of the Urban Forest</th>
          <td align="left">Promote an urban forest through community plantings, maintenance, education, and advocacy</td>
          <td class="alloc">${allocation.fuf}</td>
        </tr>
        <tr>
          <th scope="row" align="left">National Allicance for Law Enforcement Support</th>
          <td align="left">Provides emotional and financial support to police families</td>
          <td class="alloc">${allocation.nales}</td>
        </tr>
        <tr>
          <th scope="row" align="left">TRIP</th>
          <td align="left">Promote transportation policies that help relieve traffic congestion</td>
          <td class="alloc">${allocation.trip}</td>
        </tr>
        <tr>
          <th colspan="2" scope="row" align="left">Total</th>
          <td id="my-alloc-total" align="center">${allocation.findTotal()}</td>
        </tr>
      </tbody>
    </table>
    `
  }
}

customElements.define('main-table', DebriefTable)
