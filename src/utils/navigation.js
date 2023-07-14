import { findCardByPath } from './functions'

let prevPageScroll = 0

window.navigation.addEventListener('navigate', (navigateEvent) => {
  const toUrl = new URL(navigateEvent.destination.url)
  // check if is a external domain
  const toPath = toUrl.pathname
  const fromPath = location.pathname

  toPath.indexOf('/projects') === 0

  if (location.origin !== toUrl.origin) return

  if (toPath.indexOf('/projects') === 0) {
    return handleCardTransition(navigateEvent, toPath, fromPath)
  } else {
    return handleHomeTransition(navigateEvent, toPath, fromPath)
  }
})

function handleCardTransition(navigateEvent, toPath, fromPath) {
  const toUrl = new URL(navigateEvent.destination.url)
  const navHomeId = toUrl.href.split('/')[3]
  if (navHomeId.includes('#') === false) {
    navigateEvent.intercept({
      scroll: 'manual',
      async handler() {
        // fetch the page we want to visit

        const response = await fetch(toPath)
        // store the html on a variable
        const text = await response.text()

        // take the html within the body tag, with a regex
        const [, data] = text.match(/<body[^>]*>([\s\S]*)<\/body>/i)

        // Save the page scroll to restore it on the way back
        prevPageScroll = document.documentElement.scrollTop

        document.startViewTransition(() => {
          document.body.innerHTML = data
        })
      }
    })
  }
}

function handleHomeTransition(navigateEvent, toPath, fromPath) {
  const toUrl = new URL(navigateEvent.destination.url)
  const navHomeId = toUrl.href.split('/')[3]
  if (navHomeId.includes('#') === false) {
    navigateEvent.intercept({
      scroll: 'manual',
      async handler() {
        const response = await fetch(toPath)
        const text = await response.text()

        // take the html within the body tag, with a regex
        const [, data] = text.match(/<body[^>]*>([\s\S]*)<\/body>/i)

        document.startViewTransition(() => {
          document.body.innerHTML = data
          if (prevPageScroll) {
            document.documentElement.scrollTop = prevPageScroll
          }
        })
      }
    })
  }
}
