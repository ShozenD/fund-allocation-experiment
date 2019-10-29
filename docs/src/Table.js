////Table Strings

////Allocation table to compare with other members and to submit(for leader)
comparison_table = function( myAlloc, otherAlloc ) {
  var diff_rp = Math.abs(myAlloc.rp - otherAlloc.rp);
  var diff_hhp = Math.abs(myAlloc.hhp - otherAlloc.hhp);
  var diff_fuf = Math.abs(myAlloc.fuf - otherAlloc.fuf);
  var diff_nales = Math.abs(myAlloc.nales - otherAlloc.nales);
  var diff_trip = Math.abs(myAlloc.trip - otherAlloc.trip);
  var diff_total = Math.abs(myAlloc.findTotalDiff(otherAlloc));
  var earnings = Math.abs(myAlloc.findTotal() - diff_total);

  //HTML
  var title = '<h4 class="subjectNr">' + 'No: ' + otherAlloc.subjectNr + '</h4><table class="table alloc-table">';

  var thead = '<thead class="bg-info"><tr><th scope="col">Non-profit Organization</th><th scope="col">Their Budget</th><th scope="col">Your Budget</th><th scope="col">Absolute Difference</th></tr></thead>'

  var rp = '<tr><th scope="row" align="left">Reading Partners</th><td class="otheralloc" id="rp">' + otherAlloc.rp + '</td><td class="myalloc" id="rp">' + myAlloc.rp + '</td><td class="diffalloc" id="rp">' + diff_rp + '</td></tr>';

  var hhp = '<tr><th scope="row" align="left">Human Health Partners</th><td class="otheralloc" id="hhp">' + otherAlloc.hhp + '</td><td class="myalloc" id="hhp">' + myAlloc.hhp + '</td><td class="diffalloc" id="hhp">' + diff_hhp + '</td></tr>';

  var fuf = '<tr><th scope="row" align="left">Friends of the Urban Forest</th><td class="otheralloc" id="fuf">' + otherAlloc.fuf + '</td><td class="myalloc" id="fuf">' + myAlloc.fuf + '</td><td class="diffalloc" id="fuf">' + diff_fuf + '</td></tr>';

  var nales = '<tr><th scope="row" align="left">National Alliance for Law Enforcement Support</th><td class="otheralloc" id="nales">' + otherAlloc.nales + '</td><td class="myalloc" id="nales">' + myAlloc.nales + '</td><td class="diffalloc" id="nales">' + diff_nales + '</td></tr>';

  var trip = '<tr><th scope="row" align="left">TRIP</th><td class="otheralloc" id="trip">' + otherAlloc.trip + '</td><td class="myalloc" id="trip">' + myAlloc.trip + '</td><td class="diffalloc" id="trip">' + diff_trip + '</td></tr>';

  var total = '<tr><th scope="row">Total</th><td id="otheralloc_tot">' + otherAlloc.findTotal() + '</td><td id="myalloc_tot">' + myAlloc.findTotal() + '</td><td id="diffalloc_tot">' + diff_total + '</td></tr>';

  // create submit button
  var submit_button = '<p></p>';
  if( myAlloc.subejctNr == 1 ){
    submit_button = '<button type="button" class="btn btn-primary btn" onclick="submit('+ otherAlloc.subjectNr +')">Submit</button>';
  }

  var earn = '<tr><th scope="row">Your Earnings</th><td id="earnings">' + earnings + '</td><td></td><td>' + submit_button + '</td></tr>';

  var tbody = '<tbody>' + rp + hhp + fuf + nales + trip + total + earn + '</tbody>';

  return(title + thead + tbody);
}

////Displays the main allocation table
main_table = function( myAlloc ) {
  
  //<thead> element
  var thead = '<thead class="thead-dark"> <tr> <th scope="col">Non-profit Organization</th> <th scope="col">About</th> <th scope="col">Original Amount</th>'; 
  if ( myAlloc.subejctNr == 1 ){
    thead += '<th scope="col">New Amount</th> </tr> </thead>';
  } else { thead += '</thead>'; }
  
  
  //<tr> element for Reading Partners
  var rp = '<tr><th scope="row" align="left">Reading Partners</th><td align="left">Commited to helping children become lifelong readers</td><td name="alloc" id="rp" align="center">' + myAlloc.rp + '</td>';
  if( myAlloc.subejctNr == 1 ) {
    rp += '<td align="center"><input type="text" class="form-control new-alloc" id="rp" value=' + myAlloc.rp + 'onchange="update()"></td></tr>';
  } else { rp += '</tr>'}

  //<tp> element for Human Health Project
  var hhp = '<tr><th scope="row" align="left">Human Health Project</th><td align="left">Assists individuals who are ill, along with their family, friends & practitioners</td><td name="alloc" id="hhp" align="center">' + myAlloc.hhp + '</td>';
  if ( myAlloc.subjectNr == 1 ) {
    hhp += '<td align="center"><input type="text" class="form-control new-alloc" id="hhp" value=' + myAlloc.hhp + 'onchange="update()"></td></tr>';
  } else { hhp += '</tr>' }
  
  //<tp> element for Friends of urban forest
  var fuf = '<tr><th scope="row" align="left">Friends of the Urban Forest</th><td align="left">Promote an urban forest through community plantings, maintenance, education, and advocacy</td><td name="alloc" id="hhp" align="center">' + myAlloc.fuf + '</td>';;
  if ( myAlloc.subejctNr == 1 ) {
    fuf += '<td align="center"><input type="text" class="form-control new-alloc" id="fuf" value=' + myAlloc.fuf + 'onchange="update()"></td></tr>';
  } else { fuf += '</tr>' }

  //<tp> element for National Alliance for Law Enforcement Support
  var nales = '<tr><th scope="row" align="left">National Allicance for Law Enforcement Support</th><td align="left">Provides emotional and financial support to police families</td><td name="alloc" id="nales" align="center">' + myAlloc.nales + '</td>';
  if ( myAlloc.subjectNr == 1 ) {
    nales += '<td align="center"><input type="text" class="form-control new-alloc" id="nales" value=' + myAlloc.nales + 'onchange="update()"></td></tr>';
  } else { nales += '</tr>' }

  //<tp> element for TRIP
  var trip = '<tr><th scope="row" align="left">TRIP</th><td align="left">Promote transportation policies that help relieve traffic congestion</td><td name="alloc" id="trip" align="center">' + myAlloc.trip + '</td>';
  if ( myAlloc.subjectNr == 1 ) {
    trip += '<td align="center"><input type="text" class="form-control new-alloc" id="trip" value=' + myAlloc.trip + 'onchange="update()"></td></tr>';
  } else { trip += '</tr>' }

  //<tp> element for total
  var total = '<tr><th scope="row" align="left">Total</th><td></td><td id="my-alloc-total" align="center">' + myAlloc.findTotal() + '</td>';
  if ( myAlloc.subjectNr == 1 ) {
    total += '<td align="center"><input type="text" class="form-control new-alloc" id="my-new-alloc-total" value=' + myAlloc.findTotal() + '></td></tr>';
  } else { total += '</tr>' }

  //row for submission buttons (leaders only)
  var submit = '<tr><th scope="row" align="left"></th><td align="left"></td><td align="center"><input class="btn btn-primary" value="Submit Allocation" onclick="submit()"></td><td align="center"><input class="btn btn-primary" value="Submit New Allocation" onclick="submit()"></td></tr>';

  //<tbody> element
  var tbody = rp + hhp + fuf + nales + trip + total;
  if ( myAlloc.subejctNr == 1 ) {
    tbody += submit; 
  }

  //return all elements
  return ( '<br><h2 align="left">My Allocations</h2><table class="table">' + thead + tbody + '</table>' );

}



//Allocation table for the normal memeber
var normalTable = '<table class="table"> <thead class="thead-dark"> <tr> <th scope="col">Non-profit Organization</th> <th scope="col">About</th> <th scope="col">Amount</th> </tr> </thead> <tbody> <tr> <th scope="row" align="left">Reading Partners</th> <td align="left">Commited to helping children become lifelong readers</td> <td name="alloc" id="rp" align="center">5</td> </tr> <tr> <th scope="row" align="left">Human Health Project</th> <td align="left">Assists individuals who are ill, along with their family, friends & practitioners</td> <td name="alloc" id="hhp" align="center">5</td> </tr> <tr> <th scope="row" align="left">Friends of the Urban Forest</th> <td align="left">Promote an urban forest through community plantings, maintenance, education, and advocacy </td> <td name="alloc" id="fuf" align="center">5</td> </tr> <tr> <th scope="row" align="left">National Alliance for Law Enforcement Support</th> <td align="left">provides emotional and financial support to police families</td> <td name="alloc" id="nales" align="center">4</td> </tr> <tr> <th scope="row" align="left">TRIP</th> <td align="left">Promote transportation policies that help relieve traffic congestion</td> <td name="alloc" id="trip" align="center">1</td> </tr> </tbody> </table>';

//Allocation table for the group leader
var leaderTable = '<div class="container"><br><h2 align="left">My Allocations</h2><table class="table"><thead class="thead-dark"><tr><th scope="col">Non-profit Organization</th><th scope="col">About</th><th scope="col">Original Amount</th><th scope="col">New Amount</th></tr></thead> <tbody> <tr> <th scope="row" align="left">Reading Partners</th> <td align="left">Commited to helping children become lifelong readers</td> <td name="alloc" id="rp" align="center">5</td> <td align="center"><input type="text" class="form-control new-alloc" id="rp" value=5 onchange="update()"></td> </tr> <tr> <th scope="row" align="left">Human Health Project</th> <td align="left">Assists individuals who are ill, along with their family, friends & practitioners</td> <td name="alloc" id="hhp" align="center">5</td> <td align="center"><input type="text" class="form-control new-alloc" id="hhp" value=5 onchange="update()"></td> </tr> <tr> <th scope="row" align="left">Friends of the Urban Forest</th> <td align="left">Promote an urban forest through community plantings, maintenance, education, and advocacy </td> <td name="alloc" id="fuf" align="center">5</td> <td align="center"><input type="text" class="form-control new-alloc" id="fuf" value=5 onchange="update()"></td> </tr> <tr> <th scope="row" align="left">National Alliance for Law Enforcement Support</th> <td align="left">provides emotional and financial support to police families</td> <td name="alloc" id="nales" align="center">4</td> <td align="center"><input type="text" class="form-control new-alloc" id="nales" value=4 onchange="update()"></td> </tr> <tr> <th scope="row" align="left">TRIP</th> <td align="left">Promote transportation policies that help relieve traffic congestion</td> <td name="alloc" id="trip" align="center">1</td> <td align="center"><input type="text" class="form-control new-alloc" id="trip" value=1 onchange="update()"></td> </tr> <tr> <th scope="row" align="left"></th> <td align="left"></td> <td align="center"><input class="btn btn-primary" value="Submit Allocation" onclick="submit()"></td> <td align="center"><input class="btn btn-primary" value="Submit New Allocation" onclick="submit()"></td> </tr> </tbody> </table> </div>';