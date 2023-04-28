import { TicketFlavors } from '../../utils/data'

export const FlavorSelector = ({ setActiveSelector, activeSelector }) => {
  return (
    <section className='flex gap-4 w-full p-4 flex-wrap justify-center items-center'>
      {TicketFlavors.map((flavor) => {
        return (
          <img
            className={
              activeSelector.title.toLowerCase() ===
              flavor.title.toLocaleLowerCase()
                ? 'w-12 scale-150 transition-all'
                : 'w-12 transition-all hover:opacity-50'
            }
            src={flavor.icon}
            title={flavor.title}
            onClick={() =>
              setActiveSelector({
                ...flavor,
                active: true
              })
            }
          />
        )
      })}
    </section>
  )
}
