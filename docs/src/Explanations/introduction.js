class Introduction extends HTMLElement {
  constructor () {
    super()
    this.root = this.attachShadow({ mode: 'open' })
  }

  set explanation (info) {
    this.root.innerHTML = `
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    
    <div class="container">
      <h1 align="left">Introduction</h1>
    </div>
    <div class="container">
      <p align="left">
        <b>Thank you!</b> for participating in this study. This study is part of an academic research project being
        conducted by a graduate student at the University of California, Davis.
      </p>

      <p align="left">
        <b>The purpose</b> of this research is to better understand individual decision making processes. Your participation and
        your contributions to academic scholarship are very much appreciated.
      </p>

      <p style="text-align: left;">
        As you complete this study, please keep in mind:
      </p>

        <ol>
          <li align="left">What you say in <b>this survey is <u>anonymous</u></b> and will be <b>kept strictly <u>confidential</u></b>.</li>
          <li align="left">Your participation in this study is <b>completely voluntary</b>. You are free to decide not to participate
            in this study.</li>
          <li align="left">You can also <b>withdraw at any time</b> without harming your relationship with the
            researcher or the University of California, Davis.</li>
        </ol>

      <p align="left">
        It should take about <u>45 minutes to complete the study</u>. If you choose not to participate, there will be no penalty.
        All answers provided will be used. The anonymity of the study makes withdrawing specific responses impossible.
        Although the results of this study may be published, <b>no information that could identify you will be included</b>.
      </p>

      <p align="left">
        Keep in mind that you will be asked to make decisions that reflect your true preferences. Some of your decisions may result in <b>real money</b> being sent to organizations in accordance with those
        preferences.
      </p>

      <p align="left">
        <b>You will also have the opportunity to "earn" money in the study</b>. These earnings may also potentially be sent to organizations in accordance with your preference. However, You will not lose money and there are no real risks attached to the decisions made within this study.
      </p>

      <p align="left">
        <b>We hope to learn more about individual decision making processes</b> through this study, and we plan to share what we learn by publishing the results of this work in scholarly outlets. Research sometimes requires that information regarding its purpose not be shared with the research participants because its knowledge could impact the results of the research. While the tasks you will be asked to perform for this research have been explained, the full intent of the research will not be provided until the completion of the study. At that time you will have the opportunity to ask questions, including about the purpose of the study and the procedures used. Note that none of the aspects of the research being withheld are reasonably expected to affect your willingness to participate.
      </p>

      <p align="left">
        Completion of this study constitutes your consent to participate in this study.
      </p>
    </div>
    `
  }
}

customElements.define('exp-introduction', Introduction)
