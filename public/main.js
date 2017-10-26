const buttons = document.querySelectorAll('.button')

buttons.forEach(el => {
  el.addEventListener('mouseover', event => {
    const { top, bottom, left, right } = el.getBoundingClientRect()
    if (top > 30 && window.innerWidth - right > 120) {
      el.classList.remove('top')
      el.classList.add('right')
    } else if (bottom > 30 && window.innerWidth - right > 120) {
      el.classList.remove('top')
      el.classList.add('bottom')
    } else if (left > 120 && window.innerHeight - top > 120) {
      el.classList.remove('top')
      el.classList.add('left')
    }
  })
})
