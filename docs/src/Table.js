////Table Strings

//Allocation table to compare with other members(for normal memebers)
var memberTable = '<h4 class="subjectNr">1</h4><table class="table alloc-table"><thead class="bg-info"><tr><th scope="col">Non-profit Organization</th><th scope="col">Their Budget</th><th scope="col">Your Budget</th><th scope="col">Absolute Difference</th></tr></thead><tbody><tr><th scope="row">Reading Partners</th><td class="otheralloc" id="rp"></td><td class="myalloc" id="rp"></td><td class="diffalloc" id="rp"></td></tr><tr><th scope="row">Human Health Project</th><td class="otheralloc" id="hhp"></td><td class="myalloc" id="hhp"></td><td class="diffalloc" id="hhp"></td></tr><tr><th scope="row">Friends of the Urban Forest</th><td class="otheralloc" id="fuf"></td><td class="myalloc" id="fuf"></td><td class="diffalloc" id="fuf"></td></tr><tr><th scope="row">National Alliance for Law Enforcement Support</th><td class="otheralloc" id="nales"></td><td class="myalloc" id="nales"></td><td class="diffalloc" id="nales"></td></tr><tr><th scope="row">TRIP</th><td class="otheralloc" id="trip"></td><td class="myalloc" id="trip"></td><td class="diffalloc" id="trip"></td></tr><tr><th scope="row">Total</th><td id="otheralloc_tot"></td><td id="myalloc_tot"></td><td id="diffalloc_tot"></td></tr><tr><th scope="row"><th>Your Earnings</th><td id="earnings"></td><td></td><td></td></tr></tbody></table>';

//Allocation table to compare with other members and to submit(for leader)
comparison_table = function(myAlloc, otherAlloc) {
  var diff_rp = myAlloc.rp - otherAlloc.rp;
  var diff_hhp = myAlloc.hhp - otherAlloc.hhp;
  var diff_fuf = myAlloc.fuf - otherAlloc.fuf;
  var diff_nales = myAlloc.nales - otherAlloc.nales;
  var diff_trip = myAlloc.trip - otherAlloc.trip;
  var diff_total = myAlloc.getTotalDiff(otherAlloc);
  var earnings = myAlloc.getTotal() - diff_total;

  //HTML
  var title = '<h4 class="subjectNr">' + otherAlloc.subjectNr + '</h4><table class="table alloc-table">';

  var thead = '<thead class="bg-info"><tr><th scope="col">Non-profit Organization</th><th scope="col">Their Budget</th><th scope="col">Your Budget</th><th scope="col">Absolute Difference</th></tr></thead>'

  var rp = '<tr><th scope="row" align="left">Reading Partners</th><td class="otheralloc" id="rp">' + otherAlloc.rp + '</td><td class="myalloc" id="rp">' + myAlloc.rp + '</td><td class="diffalloc" id="rp">' + diff_rp + '</td></tr>';

  var hhp = '<tr><th scope="row" align="left">Human Health Partners</th><td class="otheralloc" id="hhp">' + otherAlloc.hhp + '</td><td class="myalloc" id="hhp">' + myAlloc.hhp + '</td><td class="diffalloc" id="hhp">' + diff_hhp + '</td></tr>';

  var fuf = '<tr><th scope="row" align="left">Friends of the Urban Forest</th><td class="otheralloc" id="fuf">' + otherAlloc.fuf + '</td><td class="myalloc" id="fuf">' + myAlloc.fuf + '</td><td class="diffalloc" id="fuf">' + diff_fuf + '</td></tr>';

  var nales = '<tr><th scope="row" align="left">National Alliance for Law Enforcement Support</th><td class="otheralloc" id="nales">' + otherAlloc.nales + '</td><td class="myalloc" id="nales">' + myAlloc.nales + '</td><td class="diffalloc" id="nales">' + diff_nales + '</td></tr>';

  var trip = '<tr><th scope="row" align="left">TRIP</th><td class="otheralloc" id="trip">' + otherAlloc.trip + '</td><td class="myalloc" id="trip">' + myAlloc.trip + '</td><td class="diffalloc" id="trip">' + diff_trip + '</td></tr>';

  var total = '<tr><th scope="row">Total</th><td id="otheralloc_tot">' + otherAlloc.findTotal() + '</td><td id="myalloc_tot">' + myAlloc.findTotal() + '</td><td id="diffalloc_tot">' + diff_total + '</td></tr>';

  var earn = '<tr><th scope="row">Your Earnings</th><td id="earnings">' + earnings + '</td><td></td><td></td></tr>';

  var tbody = '<tbody>' + rp + hhp + fuf + nales + trip + total + earn + '</tbody>';

  return(title + thead + tbody);
}

//Allocation table for the normal memeber
var normalTable = '<table class="table"> <thead class="thead-dark"> <tr> <th scope="col">Non-profit Organization</th> <th scope="col">About</th> <th scope="col">Amount</th> </tr> </thead> <tbody> <tr> <th scope="row" align="left">Reading Partners</th> <td align="left">Commited to helping children become lifelong readers</td> <td name="alloc" id="rp" align="center">5</td> </tr> <tr> <th scope="row" align="left">Human Health Project</th> <td align="left">Assists individuals who are ill, along with their family, friends & practitioners</td> <td name="alloc" id="hhp" align="center">5</td> </tr> <tr> <th scope="row" align="left">Friends of the Urban Forest</th> <td align="left">Promote an urban forest through community plantings, maintenance, education, and advocacy </td> <td name="alloc" id="fuf" align="center">5</td> </tr> <tr> <th scope="row" align="left">National Alliance for Law Enforcement Support</th> <td align="left">provides emotional and financial support to police families</td> <td name="alloc" id="nales" align="center">4</td> </tr> <tr> <th scope="row" align="left">TRIP</th> <td align="left">Promote transportation policies that help relieve traffic congestion</td> <td name="alloc" id="trip" align="center">1</td> </tr> </tbody> </table>';

//Allocation table for the group leader
var leaderTable = '<div class="container"><br><h2 align="left">My Allocations</h2><table class="table"><thead class="thead-dark"><tr><th scope="col">Non-profit Organization</th><th scope="col">About</th><th scope="col">Original Amount</th><th scope="col">New Amount</th></tr></thead> <tbody> <tr> <th scope="row" align="left">Reading Partners</th> <td align="left">Commited to helping children become lifelong readers</td> <td name="alloc" id="rp" align="center">5</td> <td align="center"><input type="text" class="form-control new-alloc" id="rp" value=5 onchange="update()"></td> </tr> <tr> <th scope="row" align="left">Human Health Project</th> <td align="left">Assists individuals who are ill, along with their family, friends & practitioners</td> <td name="alloc" id="hhp" align="center">5</td> <td align="center"><input type="text" class="form-control new-alloc" id="hhp" value=5 onchange="update()"></td> </tr> <tr> <th scope="row" align="left">Friends of the Urban Forest</th> <td align="left">Promote an urban forest through community plantings, maintenance, education, and advocacy </td> <td name="alloc" id="fuf" align="center">5</td> <td align="center"><input type="text" class="form-control new-alloc" id="fuf" value=5 onchange="update()"></td> </tr> <tr> <th scope="row" align="left">National Alliance for Law Enforcement Support</th> <td align="left">provides emotional and financial support to police families</td> <td name="alloc" id="nales" align="center">4</td> <td align="center"><input type="text" class="form-control new-alloc" id="nales" value=4 onchange="update()"></td> </tr> <tr> <th scope="row" align="left">TRIP</th> <td align="left">Promote transportation policies that help relieve traffic congestion</td> <td name="alloc" id="trip" align="center">1</td> <td align="center"><input type="text" class="form-control new-alloc" id="trip" value=1 onchange="update()"></td> </tr> <tr> <th scope="row" align="left"></th> <td align="left"></td> <td align="center"><input class="btn btn-primary" value="Submit Allocation" onclick="submit()"></td> <td align="center"><input class="btn btn-primary" value="Submit New Allocation" onclick="submit()"></td> </tr> </tbody> </table> </div>';