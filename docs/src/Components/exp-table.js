class ExpTable extends HTMLElement {
  constructor () {
    super()
    this.root = this.attachShadow({ mode: 'open' })
  }

  set table (a) {
    this.root.innerHTML = `
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Non-profit Organization</th>
            <th scope="col">Your Budget</th>
            <th scope="col">Final Group Budget</th>
            <th scope="col">Absolute Difference</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Reading Partners</th>
            <td>30</td>
            <td>45</td>
            <td>15</td>
          </tr>
          <tr>
            <th scope="row">Human Health Project</th>
            <td>10</td>
            <td>5</td>
            <td>5</td>
          </tr>
          <tr>
            <th scope="row">Friends of the Urban Forest</th>
            <td>20</td>
            <td>20</td>
            <td>0</td>
          </tr>
          <tr>
            <th scope="row">National Alliance for Law Enforcement Support</th>
            <td>15</td>
            <td>20</td>
            <td>5</td>
          </tr>
          <tr>
            <th scope="row">TRIP</th>
            <td>25</td>
            <td>10</td>
            <td>15</td>
          </tr>
          <tr>
            <th scope="row">Total</th>
            <td>100</td>
            <td>100</td>
            <td>60</td>
          </tr>
          <tr>
            <th scope="row">Your "earnings" if this budget passed</th>
            <td>$40 (100 - 60)</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>`
  } 
}

customElements.define('exp-table', ExpTable)