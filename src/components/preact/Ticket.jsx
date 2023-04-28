import { useEffect, useRef } from 'preact/hooks'
import React from 'react'
import emailjs from '@emailjs/browser'

export const Ticket = ({ activeSelector }) => {
  const formRef = useRef(null)
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

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'Portfolio',
        'Template_Marco',
        formRef.current,
        import.meta.env.PUBLIC_EMAILJS_APIKEY
      )
      .then((result) => {
        console.log(result)
      })
      .catch((e) => console.log(e.text))
  }

  return (
    <section class='[perspective:1500px]' id='wrapper'>
      <article
        id='ticket'
        class='rounded-lg w-[375px] aspect-[16/9] md:aspect-[18/9] border-4 md:w-[800px] border-opacity-50 relative p-4 overflow-hidden bg-white/50 backdrop-blur-[2px]'
        style={{
          border: activeSelector.border
        }}>
        <form
          class='flex flex-col justify-center items-start h-full  p-4 gap-y-2'
          ref={formRef}
          onSubmit={handleSubmit}>
          <label for='name' class='text-xl font-bold'>
            Name
          </label>
          <input
            id='name'
            class={`w-full border-2 border-opacity-50 ${activeSelector.borderClass} rounded md:w-1/2 p-2 text-lg`}
            style={{
              border: '2px solid ' + activeSelector.text
            }}
          />
          <label for='email' class='text-xl font-bold'>
            Email
          </label>
          <input
            id='email'
            class={`w-full border-2 border-opacity-50  rounded md:w-1/2 p-2 text-lg`}
            style={{
              border: '2px solid ' + activeSelector.text
            }}
          />
          <label for='textarea' class='text-xl font-bold'>
            Tell me about your project!
          </label>
          <textarea
            id='textarea'
            class={`w-full border-2 border-opacity-50 rounded md:w-1/2 resize-none h-screen bg-transparent bg-white`}
            style={{
              border: '2px solid ' + activeSelector.text
            }}></textarea>
          <button
            className='px-10 py-2 text-lg font-bold text-white rounded'
            style={{
              background: activeSelector.text
            }}
            disabled>
            Send
          </button>
        </form>
        <img
          src={activeSelector.icon}
          class='absolute bottom-0 -right-36 md:top-12 -z-10 md:w-2/3 opacity-20 transition-all'
        />
        <div class='absolute inset-0 h-full w-full filter blur-xl -z-10'></div>
      </article>
    </section>
  )
}
