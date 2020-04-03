class TeamGroupAllocExp extends HTMLElement {
  constructor () {
    super()
    this.root = this.attachShadow({ mode: 'open' })

    this.teamDisplay = {
      A: '<span style="color:Dodgerblue;"><b>A</b> <i class="fa fa-gem"></i></span>',
      B: '<span style="color:Tomato"><b>B</b> <i class="fas fa-mountain"></i></span>'
    }
  }

  set explanation (info) {
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

    <div class="container">
      <!--Title-->
      <h3 id="subGrp" align="left">You are in team: ${this.teamDisplay[info.team]}</h3><br>

      <!--Member Explanation 1-->
      <div class="row member-expla-1">
        <h4 align="left">Your understanding of the following instructions will be checked
          in the next screen</h4>
        <p align="left">
          We previously asked you, individually, to allocate funds between five (5) non-profit
          organizations. In this part of the experiment (Phase II), you will be divided into two (2) teams. Even
          though you are divided into two (2) different teams, we are asking that both teams come together and agree
          about how to spend $100 between these five (5) organizations. This means that<b>a majority of the group
            (50% + 1)</b> must be in agreement about the allocation.</p>
        <p align="left">
          One member of the entire group will be randomly selected as the leader. The leader will be
          provided with the allocations of all group members and will be <b>tasked with selecting <u>one</u> budget
          to put up for a group vote</b>. Everyone will also be provided with the budgets of all of members of
          the group, including those of players who are on your team. Again, the budget will only pass if a majority
          (50% + 1) of members support it.</p>
        <p align="left">
          Once an allocation is agreed to, we will calculate the absolute difference between the amount given to an
          organization by the entire group and the amount donated to the organization earlier. We will add up the
          differences for all five (5) groups. This amount will then be subtracted from the $100 <b>you</b> received at the
          start.</p>
        <p align="left">
          Your goal in this part of the study is to adopt an allocation that minimizes the difference between the
          group's allocation and your own as much as possible.</p>
        <p align="left">It is also your goal in this part of the study to come to an agreement with the other members
          of your <b>team</b>. If all of the members of your team vote for the final group budget, everyone on
          that team will receive an additional "earning" of $25.</p>
        <p align="left"><b>Remember</b> that at the end of the study, one allocation will be randomly selected.
          If your allocation is the one which is randomly selected, your accumulated "earnings" in this section of the
          study (Phase II) will be sent to whichever organization that you had allocated the most amount of funds to
          (this is in addition to the amounts allocated to that organization in Phase I). See the table below for an
          example.</p>
      </div>

      <!--Table-->
      <div class="row table">
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
              <th scope="row">Your Earnings</th>
              <td>$40 (100 - 60)</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="row member-expla-2">
        <p align="left">For example: if all the <b>members of your team</b> voted for the final group budget, your "earnings"
          would total $65 ($40 absolute difference + $25 team reward).</p>
        <p align="left">Lastly, if the group is unable to agree on an allocation after 30 minutes, this
          phase of the study will end. You will be unable to "earn" any additional funds that could potentially be sent
          to your preferred organization.</p>
      </div>

      <div class="leader-expla-title"></div>
      <div class="row leader-expla"></div>
  </div>`

  if (info.leader) {
    this.root.innerHTML = this.root.innerHTML + `
    <br>
    <h4 align="center" class="text-danger leader-alert">You have been randomly chosen as group leader!</h4>
    <br>
    <h4 align="left">Leader's Task:</h4>
    <p align="left">
      Your job is to divide $100 between the same five organizations you donated to previously. To help with this task, you (and the other participants) will be provided with each members’ allocations. Once you have created a new budget (or have selected one from a participant), it will be put up for a vote. The budget will only pass if a majority (50% + 1) of participants support it.
    </p>`
  }
  }
}

customElements.define('team-group-alloc-exp', TeamGroupAllocExp)
