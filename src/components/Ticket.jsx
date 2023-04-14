import { useEffect } from 'preact/hooks'
import React from 'react'
export const Ticket = ({ activeSelector }) => {

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
    <section class='[perspective:1500px]' id='wrapper'>
      <article
        id='ticket'
        class={`shadow-2xl rounded-lg w-[375px] aspect-[7/9] md:aspect-[18/9] border-4 md:w-[800px] border-opacity-50 relative p-4 overflow-hidden ${activeSelector.borderClass} ${activeSelector.textClass}`}>
        <form class='flex flex-col w-full h-full rounded-lg p-4'>
          <label for='name' class='text-xl font-bold'>
            Name
          </label>
          <input
            id='name'
            class={`w-full border-2 border-opacity-50 ${activeSelector.borderClass} rounded md:w-1/2 p-2 text-lg`}
          />
          <label for='email' class='text-xl font-bold'>
            Email
          </label>
          <input
            id='email'
            class={`w-full border-2 border-opacity-50 ${activeSelector.borderClass} rounded md:w-1/2 p-2 text-lg`}
          />
          <label for='textarea' class='text-xl font-bold'>
            Tell me about your project!
          </label>
          <textarea
            id='textarea'
            class={`w-full border-2 border-opacity-50 ${activeSelector.borderClass} rounded md:w-1/2 resize-none p-2 h-full bg-transparent`}></textarea>
        </form>
        <img
          src={activeSelector.icon}
          class='absolute bottom-0 -right-36 md:top-12 -z-10 md:w-2/3 opacity-20'
        />
        <div class='absolute inset-0 h-full w-full filter blur-xl -z-10'></div>
      </article>
    </section>
  )
}
