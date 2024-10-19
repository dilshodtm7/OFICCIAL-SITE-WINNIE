import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { TonConnectUIProvider } from '@tonconnect/ui-react'


const manifestUrl = 'https://tgram-ten.vercel.app/tonconnect-manifest.json'

createRoot(document.getElementById('root')).render(
<TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
    </TonConnectUIProvider>
)
