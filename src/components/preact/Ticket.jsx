import { useEffect } from 'preact/hooks'

export const Ticket = ({ activeSelector }) => {
  useEffect(() => {
    const $ = (selector) => document.querySelector(selector)

    const wrapper = $('#wrapper')
    const ticket = $('#ticket')

    const { width, height } = wrapper.getBoundingClientRect()

    const halfWidth = width / 2
    const halfHeight = height / 2
    try {
      document.createEvent('TouchEvent')
    } catch (error) {
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
    }
  })

  return (
    <>
      <section class='[perspective:1500px] relative' id='wrapper'>
        <article
          id='ticket'
          class='rounded-lg w-[300px] aspect-[7/8] lg:aspect-[18/9] border-4 lg:w-[800px] border-opacity-50 relative p-4 overflow-hidden bg-white/50 backdrop-blur-[2px] flex flex-col items-start'
          style={{
            border: activeSelector.border
          }}>
          <a
            href='mailto:magp260602@gmail.com'
            target='_blank'
            className='flex items-center justify-center gap-2 text-md font-semibold text-gray-800 lg:text-lg'>
            <img src='/mail2.svg' className='w-10 lg:w-16' />
            magp260602@gmail.com
          </a>
          <a
            href=''
            className='flex items-center justify-center gap-2 text-md font-semibold text-gray-800 lg:text-lg'>
            <img src='/instagram.svg' className='w-10 lg:w-16' />
            always.devv
          </a>
          <img
            src={activeSelector.icon}
            class='absolute bottom-0 -right-36 lg:top-12 -z-10 lg:w-2/3 opacity-20 transition-all'
          />
        </article>
      </section>
    </>
  )
}
