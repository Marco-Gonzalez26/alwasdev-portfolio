
import { useState } from 'react'
import { FlavorSelector } from './FlavorSelector'
import { Ticket } from './Ticket'

const TicketContainer = () => {
  const [activeSelector, setActiveSelector] = useState({
    title: 'React',
    icon: '/react.svg',
    border: '4px solid #53C1DE',
    text: '#53C1DE',
    active: true
  })

  return (
    <>
      <Ticket activeSelector={activeSelector} />
      <FlavorSelector
        setActiveSelector={setActiveSelector}
        activeSelector={activeSelector}
      />
    </>
  )
}

export default TicketContainer
