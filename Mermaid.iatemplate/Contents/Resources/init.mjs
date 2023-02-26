import mermaid from './mermaid/mermaid.esm.mjs'

let unprocessed

export function configure() {
  const html = document.querySelector('html')
  const theme = html.classList.contains('night-mode') ? 'dark' : 'default'
  mermaid.initialize({
      securityLevel: 'loose',
      startOnLoad: false,
      theme: theme,
  })
}

export function render() {
  mermaid.run()
}

export function init() {
  const body = document.querySelector('[data-document]')
  configure()
  render()

  body.addEventListener('ia-writer-change', () => {
    unprocessed = body.innerHTML
    render()
  })

  const observer = new MutationObserver(([{target}]) => {
    if (!unprocessed) {
      unprocessed = body.innerHTML
    } else {
      body.innerHTML = unprocessed
    }
    configure()
    render()
  })

  observer.observe(
    document.querySelector('html'),
    {
      attributes: true,
      attributeFilter: ['class'],
    }
  )
}
