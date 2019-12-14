class AllocationTimer {
  constructor (startTime) {
    this.startTime = startTime
    this.remainTime = 1000 * 60 * 30 // 30 mins
    this.timeout = false
  }

  startTimer () {
    var currentTime = new Date()
    var timeSinceStart = this.startTime - currentTime
    this.remainTime = this.remainTime - timeSinceStart

    const m = 1000 * 60
    if (this.remainTime < m * 15) {
      alert('15 minutes remaining')
    } else if (this.remainTime < m * 10) {
      alert('10 minutes remaining')
    } else if (this.remainTime < m * 5) {
      alert('5 minutes remaining')
    } else if (this.remainTime < m * 1) {
      alert('1 minute remaining')
    } else if (this.remainTime < 0) {
      alert('Timeout!')
      this.timeout = true
    }

    var t = setTimeout(this.startTimer(), 1000 * 60)
  }

  displayTime () {
    var minutes = Math.floor(this.remainTime / 60000)
    var seconds = Math.floor((this.remainTime % 60000) / 1000).toFixed(0)
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }
}
