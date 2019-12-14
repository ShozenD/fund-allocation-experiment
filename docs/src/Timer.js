function getTimeRemaining (endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date())
  var seconds = Math.floor((t / 1000) % 60)
  var minutes = Math.floor((t / 1000 / 60) % 60)
  return {
    total: t,
    minutes: minutes,
    seconds: seconds
  }
}

function alertTimeRemaining (t) {
  var m = t.minutes
  if (m === 15) {
    alert('15 minutes remaining!')
  } else if (m === 10) {
    alert('10 minutes remaining!')
  } else if (m === 5) {
    alert('5 minutes remaining!')
  } else if (m === 1) {
    alert('1 minute remaining!')
  }
}

function initializeClock (id) {
  var timeInMinutes = 30
  var currentTime = Date.parse(new Date())
  var endtime = new Date(currentTime + timeInMinutes * 60 * 1000)

  // Intialize or store deadline in session Storage
  if (!sessionStorage.getItem('endtime')) {
    sessionStorage.setItem('endtime', String(endtime))
  } else {
    var deadlineString = sessionStorage.getItem('endtime')
    endtime = new Date(Date.parse(deadlineString))
  }

  var clock = document.getElementById(id)
  var minutesSpan = clock.querySelector('.minutes')
  var secondsSpan = clock.querySelector('.seconds')

  function updateClock () {
    var t = getTimeRemaining(endtime)

    alertTimeRemaining(t)

    minutesSpan.innerHTML = t.minutes
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2)

    if (t.total <= 0) {
      clearInterval(timeinterval)
    }
  }

  updateClock()
  var timeinterval = setInterval(updateClock, 1000)
}
