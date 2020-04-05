// Class Allocation
class Allocation {
  // Properties
  constructor (subjectNr, gender, rp, hhp, fuf, nales, trip, team = false) {
    this.subjectNr = subjectNr
    this.gender = gender
    this.team = team // Team name, by default this is false
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

const myNewAlloc = new Allocation(1, 1, 1, 1, 1, 1, 'Diamond')

const myAlloc = new Allocation(1, 1, 5, 5, 5, 4, 1, 'Diamond')

const alloc1 = new Allocation(2, 3, 5, 4, 6, 3, 2, 'Diamond')
const alloc2 = new Allocation(3, 1, 6, 3, 7, 2, 2, 'Diamond')
const alloc3 = new Allocation(4, 2, 6, 3, 8, 2, 1, 'Triangle')
const alloc4 = new Allocation(5, 4, 5, 4, 7, 3, 1, 'Triangle')

const otherAllocs = [alloc1, alloc2, alloc3, alloc4]
const vote = [0, 1, 1, 0]

export { myAlloc, otherAllocs, vote, myNewAlloc }
