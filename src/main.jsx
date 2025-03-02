import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/'
import Provider from './components/ChackraUI/provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <main className='app-wrapper'>
        <App />
      </main>
    </Provider>
  </StrictMode>,
)
