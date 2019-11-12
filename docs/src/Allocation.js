// Class Allocation
class Allocation {
  // Properties
  constructor (subjectNr, rp, hhp, fuf, nales, trip) {
    this.subjectNr = subjectNr
    this.rp = rp // Reading Partners
    this.hhp = hhp // Human Health Project
    this.fuf = fuf // Friends of the Urban Forest
    this.nales = nales // National Alliance for Law Enforcement Support
    this.trip = trip // TRIP
  }

  // Methods
  getProperty (key) {
    return this[key]
  }

  update (key, value) {
    this[key] = parseInt(value)
  }

  findTotal () { // finds the sum of all elements
    return this.rp + this.hhp + this.fuf + this.nales + this.trip
  }

  findDiff (key, value) { // finds the absolute difference between given value
    return Math.abs(this[key] - value)
  }

  findTotalDiff (otherAlloc) { // findes the total absolute difference between another allocation
    var diffRp = Math.abs(otherAlloc.rp - this.rp)
    var diffHhp = Math.abs(otherAlloc.hhp - this.hhp)
    var diffFuf = Math.abs(otherAlloc.fuf - this.fuf)
    var diffNales = Math.abs(otherAlloc.nales - this.nales)
    var diffTrip = Math.abs(otherAlloc.trip - this.trip)
    return diffRp + diffHhp + diffFuf + diffNales + diffTrip
  }
}
