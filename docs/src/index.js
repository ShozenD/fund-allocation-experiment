window.addEventListener('load', () => {
  displayExpla()
})

function displayExpla () {
  const div = document.querySelector('#my-alloc')
  console.log(div)
  const exp = document.createElement('exp-introduction')

  exp.explanation = { team: 'A', leader: true }

  div.appendChild(exp)
}
