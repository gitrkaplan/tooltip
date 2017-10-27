const buttons = document.querySelectorAll('.button')

const tooltips = () => {
  return fetch('/tooltip/tips')
    .then(res => res.json())
    .then(array => randTooltip(array))
}

const randTooltip = array => {
  let num = Math.floor(Math.random() * 24 + 0)
  return array[num].tip
}

buttons.forEach(el => {
  el.addEventListener('mouseover', event => {
    const { top, bottom, left, right } = el.getBoundingClientRect()
    let tipText = el.getElementsByClassName('tooltiptext')
    tooltips().then(result => (tipText[0].innerHTML = result))
    if (window.innerHeight - bottom > 40 && window.innerWidth - right > 120) {
      el.classList.remove('top')
      el.classList.add('right')
    } else if (
      window.innerWidth - left > 120 &&
      window.innerHeight - top > 120
    ) {
      el.classList.remove('top')
      el.classList.add('left')
    }
  })
})
