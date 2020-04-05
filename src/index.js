window.addEventListener('load', () => {
  displayExpla()
})

function displayExpla () {
  const div = document.querySelector('.my-alloc')
  console.log(div)
  const exp = document.createElement('alloc-table')

  exp.allocation = {}

  div.appendChild(exp)
}
