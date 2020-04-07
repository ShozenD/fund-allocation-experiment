class VoteButtons extends HTMLElement {
  constructor () {
    super()

    this.root = this.attachShadow({ mode: 'open' })
  }

  set init (a) {
    this.root.innerHTML = `
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

      <div class="container">
        <div class="row">
          <div class="col-sm">
            <button type="button" class="btn btn-outline-success btn-block" id="vote-agree" onclick="vote(1)">Agree</button>
          </div>
          <div class="col-sm">
            <button type="button" class="btn btn-outline-danger btn-block" id="vote-agree" onclick="vote(0)">Disagree</button>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('vote-buttons', VoteButtons)