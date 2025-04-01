import { createRoot } from 'react-dom/client'
import App from './components/App.js'

const container = document.createElement('div')

container.className = 'container'

document.body.appendChild(container)

const root = createRoot(container)

root.render(<App/>)