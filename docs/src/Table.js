// Table Strings

// Allocation table to compare with other members and to submit(for leader)
function comparisonTable(myAlloc, otherAlloc) {
  var diffRp = Math.abs(myAlloc.rp - otherAlloc.rp)
  var diffHhp = Math.abs(myAlloc.hhp - otherAlloc.hhp)
  var diffFuf = Math.abs(myAlloc.fuf - otherAlloc.fuf)
  var diffNales = Math.abs(myAlloc.nales - otherAlloc.nales)
  var diffTrip = Math.abs(myAlloc.trip - otherAlloc.trip)
  var diffTotal = myAlloc.findTotalDiff(otherAlloc)
  var earnings = myAlloc.findTotal() - diffTotal

  // HTML
  var title = '<h4 class="subjectNr">' + 'No: ' + otherAlloc.subjectNr + '</h4><table class="table alloc-table">'

  var thead = '<thead class="thead-dark"><tr><th scope="col">Non-profit Organization</th><th scope="col">Their Budget</th><th scope="col">Your Budget</th><th scope="col">Absolute Difference</th></tr></thead>'

  var rp = '<tr><th scope="row" align="left">Reading Partners</th><td class="otheralloc" id="rp">' + otherAlloc.rp + '</td><td class="myalloc" id="rp">' + myAlloc.rp + '</td><td class="diffalloc" id="rp">' + diffRp + '</td></tr>'

  var hhp = '<tr><th scope="row" align="left">Human Health Partners</th><td class="otheralloc" id="hhp">' + otherAlloc.hhp + '</td><td class="myalloc" id="hhp">' + myAlloc.hhp + '</td><td class="diffalloc" id="hhp">' + diffHhp + '</td></tr>'

  var fuf = '<tr><th scope="row" align="left">Friends of the Urban Forest</th><td class="otheralloc" id="fuf">' + otherAlloc.fuf + '</td><td class="myalloc" id="fuf">' + myAlloc.fuf + '</td><td class="diffalloc" id="fuf">' + diffFuf + '</td></tr>'
  var nales = '<tr><th scope="row" align="left">National Alliance for Law Enforcement Support</th><td class="otheralloc" id="nales">' + otherAlloc.nales + '</td><td class="myalloc" id="nales">' + myAlloc.nales + '</td><td class="diffalloc" id="nales">' + diffNales + '</td></tr>'

  var trip = '<tr><th scope="row" align="left">TRIP</th><td class="otheralloc" id="trip">' + otherAlloc.trip + '</td><td class="myalloc" id="trip">' + myAlloc.trip + '</td><td class="diffalloc" id="trip">' + diffTrip + '</td></tr>'

  var total = '<tr><th scope="row">Total</th><td id="otheralloc_tot">' + otherAlloc.findTotal() + '</td><td id="myalloc_tot">' + myAlloc.findTotal() + '</td><td id="diffalloc_tot">' + diffTotal + '</td></tr>'

  // create submit button
  var submitButton = '<p></p>'
  if (myAlloc.subjectNr === 1) {
    submitButton = '<button type="button" class="btn btn-primary btn" onclick="submitAlloc(' + otherAlloc.subjectNr + ')">Submit</button>'
  }

  var earn = '<tr><th scope="row">Your Earnings</th><td id="earnings">' + earnings + '</td><td></td><td>' + submitButton + '</td></tr>'

  var tbody = '<tbody>' + rp + hhp + fuf + nales + trip + total + earn + '</tbody>'

  return (title + thead + tbody)
}

// Displays the main allocation table
function mainTable(myAlloc) {
  var leader = false

  if (myAlloc.subjectNr === 1) {
    leader = true
  }

  // <thead> element
  var thead = '<thead class="thead-dark"> <tr> <th scope="col">Non-profit Organization</th> <th scope="col">About</th> <th scope="col">Original Amount</th>'
  if (leader) {
    thead += '<th scope="col">New Amount</th></tr></thead>'
  } else { thead += '</tr></thead>' }

  // <tr> element for Reading Partners
  var rp = '<tr><th scope="row" align="left">Reading Partners</th><td align="left">Commited to helping children become lifelong readers</td><td name="alloc" id="rp" align="center">' + myAlloc.rp + '</td>'
  if (leader) {
    rp += '<td align="center"><input type="text" class="form-control my-new-alloc" id="rp" value=' + myAlloc.rp + ' onchange="update()"></td></tr>'
  } else { rp += '</tr>' }

  // <tp> element for Human Health Project
  var hhp = '<tr><th scope="row" align="left">Human Health Project</th><td align="left">Assists individuals who are ill, along with their family, friends & practitioners</td><td name="alloc" id="hhp" align="center">' + myAlloc.hhp + '</td>'
  if (leader) {
    hhp += '<td align="center"><input type="text" class="form-control my-new-alloc" id="hhp" value=' + myAlloc.hhp + ' onchange="update()"></td></tr>'
  } else { hhp += '</tr>' }

  // tp> element for Friends of urban forest
  var fuf = '<tr><th scope="row" align="left">Friends of the Urban Forest</th><td align="left">Promote an urban forest through community plantings, maintenance, education, and advocacy</td><td name="alloc" id="hhp" align="center">' + myAlloc.fuf + '</td>'
  if (leader) {
    fuf += '<td align="center"><input type="text" class="form-control my-new-alloc" id="fuf" value=' + myAlloc.fuf + ' onchange="update()"></td></tr>'
  } else { fuf += '</tr>' }

  // <tp> element for National Alliance for Law Enforcement Support
  var nales = '<tr><th scope="row" align="left">National Allicance for Law Enforcement Support</th><td align="left">Provides emotional and financial support to police families</td><td name="alloc" id="nales" align="center">' + myAlloc.nales + '</td>'
  if (leader) {
    nales += '<td align="center"><input type="text" class="form-control my-new-alloc" id="nales" value=' + myAlloc.nales + ' onchange="update()"></td></tr>'
  } else { nales += '</tr>' }

  // <tp> element for TRIP
  var trip = '<tr><th scope="row" align="left">TRIP</th><td align="left">Promote transportation policies that help relieve traffic congestion</td><td name="alloc" id="trip" align="center">' + myAlloc.trip + '</td>'
  if (leader) {
    trip += '<td align="center"><input type="text" class="form-control my-new-alloc" id="trip" value=' + myAlloc.trip + ' onchange="update()"></td></tr>'
  } else { trip += '</tr>' }

  // tp> element for total
  var total = '<tr><th scope="row" align="left">Total</th><td></td><td id="my-alloc-total" align="center">' + myAlloc.findTotal() + '</td>'
  if (leader) {
    total += '<td align="center"><input type="text" class="form-control" id="my-new-alloc-total" value=' + myAlloc.findTotal() + '></td></tr>'
  } else { total += '</tr>' }

  // row for submission buttons (leaders only)
  var submit = '<tr><th scope="row" align="left"></th><td align="left"></td><td align="center"><input class="btn btn-primary" value="Submit Allocation" onclick="submitAlloc(0)"></td><td align="center"><input class="btn btn-primary" value="Submit New Allocation" onclick="submitAlloc(1)"></td></tr>'

  // <tbody> element
  var tbody = rp + hhp + fuf + nales + trip + total
  if (leader) {
    tbody += submit
  }

  // return all elements
  return ('<br><h2 align="left">My Allocations</h2><table class="table">' + thead + tbody + '</table>')
}

function voteTable(myAlloc, leaderAlloc) {
  var diffRp = Math.abs(myAlloc.rp - leaderAlloc.rp)
  var diffHhp = Math.abs(myAlloc.hhp - leaderAlloc.hhp)
  var diffFuf = Math.abs(myAlloc.fuf - leaderAlloc.fuf)
  var diffNales = Math.abs(myAlloc.nales - leaderAlloc.nales)
  var diffTrip = Math.abs(myAlloc.trip - leaderAlloc.trip)
  var diffTotal = myAlloc.findTotalDiff(leaderAlloc)
  var earnings = myAlloc.findTotal() - diffTotal

  // HTML
  var title = '<br><h2 align="left">Allocation Vote</h2>'

  var thead = '<thead class="thead-dark"><tr><th scope="col">Non-profit Organization</th><th scope="col">Leader`s Choice</th><th scope="col">Your Allocation</th><th scope="col">Difference</th></tr></thead>'

/*
  var rp = '<tr><th scope="row" align="left">Reading Partners</th><td class="leader-alloc" id="rp" align="center">' + leaderAlloc.rp + '</td><td class="my-alloc" id="rp" align="center">' + myAlloc.rp + '</td><td class="diff-alloc" id="rp" align="center">' + diffRp + '</td></tr>'

  var hhp = '<tr><th scope="row" align="left">Human Health Partners</th><td class="leader-alloc" id="hhp" align="center">' + leaderAlloc.hhp + '</td><td class="my-alloc" id="hhp" align="center">' + myAlloc.hhp + '</td><td class="diff-alloc" id="hhp" align="center">' + diffHhp + '</td></tr>'

  var fuf = '<tr><th scope="row" align="left">Friends of the Urban Forest</th><td class="leader-alloc" id="fuf" align="center">' + leaderAlloc.fuf + '</td><td class="my-alloc" id="fuf" align="center">' + myAlloc.fuf + '</td><td class="diff-alloc" id="fuf" align="center">' + diffFuf + '</td></tr>'

  var nales = '<tr><th scope="row" align="left">National Alliance for Law Enforcement Support</th><td class="leader-alloc" id="nales" align="center">' + leaderAlloc.nales + '</td><td class="my-alloc" id="nales" align="center">' + myAlloc.nales + '</td><td class="diff-alloc" id="nales" align="center">' + diffNales + '</td></tr>'

  var trip = '<tr><th scope="row" align="left">TRIP</th><td class="leader-alloc" id="trip" align="center">' + leaderAlloc.trip + '</td><td class="my-alloc" id="trip" align="center">' + myAlloc.trip + '</td><td class="diff-alloc" id="trip" align="center">' + diffTrip + '</td></tr>'

  var total = '<tr><th scope="row" align="left">Total</th><td class="leader-alloc-total" align="center">' + leaderAlloc.findTotal() + '</td><td id="my-alloc-total" align="center">' + myAlloc.findTotal() + '</td></tr>'

  var earn = '<tr><th scope="row">Your Earnings</th><td id="earnings">' + earnings + '</td><td></td><td></td></tr>'

  var tbody = '<tbody>' + rp + hhp + fuf + nales + trip + total + earn + '</tbody>'
*/
  return (title + thead)
}
