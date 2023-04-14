import React from 'react'

import { useState } from 'preact/hooks'
import { FlavorSelector } from './FlavorSelector'
import { Ticket } from '../Ticket'

const TicketContainer = () => {
  const [activeSelector, setActiveSelector] = useState({
    title: 'React',
    borderColor: 'border-react',
    textColor: 'text-react',
    icon: '/public/react.svg',
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
