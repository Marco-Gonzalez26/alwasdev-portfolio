import { proxy } from 'valtio'

const activeSelector = proxy({
  title: 'React',
  borderColor: 'border-react',
  textColor: 'text-react',
  icon: '/public/react.svg',
  active: true
})

export default activeSelector
