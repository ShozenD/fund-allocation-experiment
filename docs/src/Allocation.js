//Class Allocation
class Allocation{
  //Properties
  constructor(subjectNr, rp, hhp, fuf, nales, trip){
      this.subjectNr = subjectNr;
      this.rp = rp; //Reading Partners
      this.hhp = hhp; //Human Health Project
      this.fuf = fuf; //Friends of the Urban Forest
      this.nales = nales; //National Alliance for Law Enforcement Support
      this.trip = trip; //TRIP
  }
  
  //Methods
  getProperty(key){
      return this[key];
  }
  
  update(key, value){
      this[key] = parseInt(value);
  }
  
  findTotal(){ //finds the sum of all elements
      var total = this.rp + this.hhp + this.fuf + this.nales + this.trip;
      return total;
  }
  
  findDiff(key, value){ //finds the absolute difference between given value
      return Math.abs(this[key] - value);
  }
}

