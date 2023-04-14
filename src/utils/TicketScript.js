const $ = (selector) => document.querySelector(selector)

const wrapper = $('#wrapper')
const ticket = $('#ticket')

const { width, height } = wrapper.getBoundingClientRect()

const halfWidth = width / 2
const halfHeight = height / 2

wrapper.addEventListener('mousemove', (event) => {
  const { offsetX, offsetY } = event

  const rotationX = ((offsetX - halfWidth) / halfWidth) * 5
  const rotationY = ((offsetY - halfHeight) / halfHeight) * 5
  ticket.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
  ticket.style.transition = 'all .1s ease'
})

wrapper.addEventListener('mouseleave', () => {
  ticket.style.transform = 'rotateX(0deg) rotateY(0deg)'

  ticket.style.transition = 'all .5s ease'
})
