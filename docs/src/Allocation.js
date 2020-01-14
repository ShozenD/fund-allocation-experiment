/**
 * @param {number} subjectNr The subjectNr of the experiment subject
 * @param {number} gender The gender of the subject(A numerical value between 1 and 4)
 * @param {number} rp The allocation amount for Reading Partners
 * @param {number} hhp The allocation amount for Human Health Project
 * @param {number} fuf The allocation amount for Freinds of the Urban Forest
 * @param {number} nales The allocation amount for National Alliance for Law Enfocement Support
 * @param {number} trip The allocation amount for TRIP
 * @param {number} [team=false] An optional argument for team. Change to true for team experiment.
 */
class Allocation {
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

  /**
   * Gets the value for the indicated property.
   * @param {string} key The name of the property(ex. "rp").
   * @returns {number} Property value.
   */
  getProperty (key) {
    return this[key]
  }

  /**
   * Updates the indicated property with the given value.
   * @param {string} key The name of the property.
   * @param {number} value The new value.
   */
  update (key, value) {
    this[key] = parseInt(value)
  }

  /**
   * Finds the total of the budget allocation
   * @returns {number} The total of the budget allocation
   */
  findTotal () { // finds the sum of all elements
    return this.rp + this.hhp + this.fuf + this.nales + this.trip
  }

  /**
   * Finds the absolute difference between a property and a given value.
   * @param {string} key The name of the property.
   * @param {number} value The value in which to compare to.
   * @returns {number} The absolute difference.
   */
  findDiff (key, value) { // finds the absolute difference between given value
    return Math.abs(this[key] - value)
  }

  /**
   * Finds the total absolute diffenrece between another allocation.
   * @param {object} otherAlloc The allocation in which to compare to.
   * @returns {number} The total absolute difference
   */
  findTotalDiff (otherAlloc) { // findes the total absolute difference between another allocation
    var diffRp = Math.abs(otherAlloc.rp - this.rp)
    var diffHhp = Math.abs(otherAlloc.hhp - this.hhp)
    var diffFuf = Math.abs(otherAlloc.fuf - this.fuf)
    var diffNales = Math.abs(otherAlloc.nales - this.nales)
    var diffTrip = Math.abs(otherAlloc.trip - this.trip)
    return diffRp + diffHhp + diffFuf + diffNales + diffTrip
  }
}
