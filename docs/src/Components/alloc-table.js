class AllocTable extends HTMLElement {
  constructor () {
    super()
    this.root = this.attachShadow({ mode: 'open' })
  }

  set allocation (alloc) {
    this.root.innerHTML = `
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Non-profit Organization</th>
              <th scope="col">About</th>
              <th scope="col">Amount Allocating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Reading Partners</th>
              <td>Commited to helping children become lifelong readers</td>
              <th><input type="text" class="form-control" name="alloc" id="rp" onblur="update('rp')"></th>
            </tr>
            <tr>
              <th scope="row">Human Health Project</th>
              <td>Assists individuals who are ill, along with their family, friends &amp; practitioners</td>
              <td><input type="text" class="form-control" name="alloc" id="hhp" onblur="update('hhp')"></td>
            </tr>
            <tr>
              <th scope="row">Friends of the Urban Forest</th>
              <td>Promote an urban forest through community plantings, maintenance, education, and advocacy</td>
              <td><input type="text" class="form-control" name="alloc" id="fuf" onblur="update('fuf')"></td>
            </tr>
            <tr>
              <th scope="row">National Alliance for Law Enforcement Support</th>
              <td>provides emotional and financial support to police families</td>
              <td><input type="text" class="form-control" name="alloc" id="nales" onblur="update('nales')"></td>
            </tr>
            <tr>
              <th scope="row">TRIP</th>
              <td>Promote transportation policies that help relieve traffic congestion</td>
              <td><input type="text" class="form-control" name="alloc" id="trip" onblur="update('trip')"></td>
            </tr>
            <tr>
              <th scope="row"></th>
              <th>Total</th>
              <th><input type="text" class="form-control" name="total" id="total"></th>
            </tr>
          </tbody>
        </table>`
  }
}

customElements.define('alloc-table', AllocTable)