class Phase1Exp extends HTMLElement {
  constructor () {
    super()
    this.root = this.attachShadow({ mode: 'open' })
  }

  set explanation (info) {
    this.root.innerHTML = `
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <h1>Phase I Instructions</h1>
    <br>
    <div class="container">
      <p align="left">You will now be asked to <b>allocate $100 among</b> five (5) non-profit organizations</p>

      <p align="left">These non-profit organizations are <b>all local</b> to the Sacramento area.</p>

      <p align="left">
        You must make allocations in increments of $1, and <b>every organization must receive at least $1</b>. An allocation constraint is strictly enforced so that you may need to decrease funding from one organization in order to increase funding for another.
      </p>

      <p align="left">
        At the end of the study, one of the allocations from Phase I (yours or somebody else’s) will be randomly selected.
      </p>

      <p align="left">
        If your allocation is selected, <b>we will send the amounts that you allocated to the various organizations to them directly</b>. This means that these non-profit organizations may benefit directly from the amount you choose to donate in the next phase of this study. 
      </p>

      <p align="left">
        You will also have an opportunity to "earn" additional funds in Phase II of the study.  Again, remember that we will select one of the allocations from Phase I (yours or somebody else's). If you collect additional "earnings" in Phase II of the study, these earnings will be sent to the organization to which you had donated the most amount of funds to in Phase I.
      </p>

      <p align="left">
        Thus, it is important that you allocate the $100 so that it accords with your personal preferences, as it could be the one selected.
      </p>
    </div>
    `
  }
}

customElements.define('phase1-exp', Phase1Exp)