<<<<<<< HEAD
import {Home} from './pages'
import {AppLayout} from './components/ui/layouts'
import { WagmiConfig } from "wagmi";
import { ConnectKitProvider } from "connectkit";
import { config } from './config/wagmi'


function App() {

  const walletConnectProjectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider mode='ligth'>
       <AppLayout>
          <Home />
        </AppLayout>
      </ConnectKitProvider>
    </WagmiConfig>
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
>>>>>>> 19fec0f1f7b76ba67019683335ebf5227e76ac19
  )
}

export default App
