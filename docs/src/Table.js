class allocationTable {
  constructor(subjectNr, rp, hhp, fuf, nales, trip) {
    this.subjectNr = subjectNr;
    this.rp = rp; //Reading Partners
    this.hhp = hhp; //Human Health Project
    this.fuf = fuf; //Friends of the Urban Forest
    this.nales = nales; //National Alliance for Law Enforcement Support
    this.trip = trip; //TRIP
  }

  //methods
  getProperty(key) {
    return this[key];
  }

  update(key, value) {
    this[key] = parseInt(value);
  }

  findTotal() { //finds the sum of all elements
    var total = this.rp + this.hhp + this.fuf + this.nales + this.trip;
    return total;
  }

  /*
  findDiff(key, value){ //finds the absolute difference between given value
    return Math.abs(this[key] - value);
  }
  */

  render() {
    return ('<table class="table"> <thead class="thead-dark"> <tr> <th scope="col">Non-profit Organization</th> <th scope="col">About</th> <th scope="col">Amount Allocating</th> </tr> </thead> <tbody> <tr> <th scope="row">Reading Partners</th> <td>Commited to helping children become lifelong readers</td> <th><input type="text" class="form-control" name="alloc" id="hhp" onchange="update()" value=' + this.rp + '></th> </tr> <tr> <th scope="row">Human Health Project</th> <td>Assists individuals who are ill, along with their family, friends & practitioners</td><td><input type="text" class="form-control" name="alloc" id="hhp" onchange="update()" value=' + this.hhp + '></td> </tr> <tr> <th scope="row">Friends of the Urban Forest</th> <td>Promote an urban forest through community plantings, maintenance, education, and advocacy</td> <td><input type="text" class="form-control" name="alloc" id="fuf" onchange="update()" value=' + this.fuf + '></td> </tr > <tr> <th scope="row">National Alliance for Law Enforcement Support</th> <td>provides emotional and financial support to police families</td> <td><input type="text" class="form-control" name="alloc" id="fuf" onchange="update()" value=' + this.nales + '></td> </tr> <tr> <th scope="row">TRIP</th> <td>Promote transportation policies that help relieve traffic congestion</td> <td><input type="text" class="form-control" name="alloc" id="trip" onblur="update()" value=' + this.trip + '></td> </tr> <tr> <th scope="row"></th> <th>Total</th> <th><input type="text" class="form-control" name="total" id="total" value' + this.findTotal() + '></th></tr></tbody></table>');
  }
}

////Table Strings
//Allocation table to compare with other members(for normal memebers)
var memberTable = '<h4 class="subjectNr">1</h4><table class="table alloc-table"><thead class="bg-info"><tr><th scope="col">Non-profit Organization</th><th scope="col">Their Budget</th><th scope="col">Your Budget</th><th scope="col">Absolute Difference</th></tr></thead><tbody><tr><th scope="row">Reading Partners</th><td class="otheralloc" id="rp"></td><td class="myalloc" id="rp"></td><td class="diffalloc" id="rp"></td></tr><tr><th scope="row">Human Health Project</th><td class="otheralloc" id="hhp"></td><td class="myalloc" id="hhp"></td><td class="diffalloc" id="hhp"></td></tr><tr><th scope="row">Friends of the Urban Forest</th><td class="otheralloc" id="fuf"></td><td class="myalloc" id="fuf"></td><td class="diffalloc" id="fuf"></td></tr><tr><th scope="row">National Alliance for Law Enforcement Support</th><td class="otheralloc" id="nales"></td><td class="myalloc" id="nales"></td><td class="diffalloc" id="nales"></td></tr><tr><th scope="row">TRIP</th><td class="otheralloc" id="trip"></td><td class="myalloc" id="trip"></td><td class="diffalloc" id="trip"></td></tr><tr><th scope="row">Total</th><td id="otheralloc_tot"></td><td id="myalloc_tot"></td><td id="diffalloc_tot"></td></tr><tr><th scope="row"><th>Your Earnings</th><td id="earnings"></td><td></td><td></td></tr></tbody></table>';

//Allocation table to compare with other members and to submit(for leader)

//Allocation table for the normal memeber
var normalTable = '<table class="table"> <thead class="thead-dark"> <tr> <th scope="col">Non-profit Organization</th> <th scope="col">About</th> <th scope="col">Amount</th> </tr> </thead> <tbody> <tr> <th scope="row" align="left">Reading Partners</th> <td align="left">Commited to helping children become lifelong readers</td> <td name="alloc" id="rp" align="center">5</td> </tr> <tr> <th scope="row" align="left">Human Health Project</th> <td align="left">Assists individuals who are ill, along with their family, friends & practitioners</td> <td name="alloc" id="hhp" align="center">5</td> </tr> <tr> <th scope="row" align="left">Friends of the Urban Forest</th> <td align="left">Promote an urban forest through community plantings, maintenance, education, and advocacy </td> <td name="alloc" id="fuf" align="center">5</td> </tr> <tr> <th scope="row" align="left">National Alliance for Law Enforcement Support</th> <td align="left">provides emotional and financial support to police families</td> <td name="alloc" id="nales" align="center">4</td> </tr> <tr> <th scope="row" align="left">TRIP</th> <td align="left">Promote transportation policies that help relieve traffic congestion</td> <td name="alloc" id="trip" align="center">1</td> </tr> </tbody> </table>';

//Allocation table for the group leader
var leaderTable = '<div class="container"><br><h2 align="left">My Allocations</h2><table class="table"><thead class="thead-dark"><tr><th scope="col">Non-profit Organization</th><th scope="col">About</th><th scope="col">Original Amount</th><th scope="col">New Amount</th></tr></thead> <tbody> <tr> <th scope="row" align="left">Reading Partners</th> <td align="left">Commited to helping children become lifelong readers</td> <td name="alloc" id="rp" align="center">5</td> <td align="center"><input type="text" class="form-control new-alloc" id="rp" value=5 onchange="update()"></td> </tr> <tr> <th scope="row" align="left">Human Health Project</th> <td align="left">Assists individuals who are ill, along with their family, friends & practitioners</td> <td name="alloc" id="hhp" align="center">5</td> <td align="center"><input type="text" class="form-control new-alloc" id="hhp" value=5 onchange="update()"></td> </tr> <tr> <th scope="row" align="left">Friends of the Urban Forest</th> <td align="left">Promote an urban forest through community plantings, maintenance, education, and advocacy </td> <td name="alloc" id="fuf" align="center">5</td> <td align="center"><input type="text" class="form-control new-alloc" id="fuf" value=5 onchange="update()"></td> </tr> <tr> <th scope="row" align="left">National Alliance for Law Enforcement Support</th> <td align="left">provides emotional and financial support to police families</td> <td name="alloc" id="nales" align="center">4</td> <td align="center"><input type="text" class="form-control new-alloc" id="nales" value=4 onchange="update()"></td> </tr> <tr> <th scope="row" align="left">TRIP</th> <td align="left">Promote transportation policies that help relieve traffic congestion</td> <td name="alloc" id="trip" align="center">1</td> <td align="center"><input type="text" class="form-control new-alloc" id="trip" value=1 onchange="update()"></td> </tr> <tr> <th scope="row" align="left"></th> <td align="left"></td> <td align="center"><input class="btn btn-primary" value="Submit Allocation" onclick="submit()"></td> <td align="center"><input class="btn btn-primary" value="Submit New Allocation" onclick="submit()"></td> </tr> </tbody> </table> </div>';