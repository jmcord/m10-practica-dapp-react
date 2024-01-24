import {Home} from './pages'
import {AppLayout} from './components/ui/layouts'
import { WagmiConfig } from "wagmi";
import { ConnectKitProvider } from "connectkit";
import { config } from './config/wagmi'


function App() {

  const walletConnectProjectId = import.meta.env.REACT_APP_WALLET_CONNECT_PROJECT_ID
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider mode='ligth'>
       <AppLayout>
          <Home />
        </AppLayout>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

export default App
