import { useEffect, useRef, useState } from 'preact/hooks'
import emailjs from '@emailjs/browser'
import Toast from './Toast'

export const Ticket = ({ activeSelector }) => {
  const formRef = useRef(null)
  const [sendingMessage, setSendingMessage] = useState(false)
  const [openToast, setOpenToast] = useState(false)
  const [toastText, setToastText] = useState('')
  useEffect(() => {
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
  })

  return (
    <>
      <section class='[perspective:1500px] relative' id='wrapper'>
        <article
          id='ticket'
          class='rounded-lg w-[375px] aspect-[16/9] md:aspect-[18/9] border-4 md:w-[800px] border-opacity-50 relative p-4 overflow-hidden bg-white/50 backdrop-blur-[2px]'
          style={{
            border: activeSelector.border
          }}>
          <img
            src={activeSelector.icon}
            class='absolute bottom-0 -right-36 md:top-12 -z-10 md:w-2/3 opacity-20 transition-all'
          />
          <div class='absolute inset-0 h-full w-full filter blur-xl -z-10'></div>
        </article>
      </section>
    </>
  )
}
