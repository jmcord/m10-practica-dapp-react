import {Home} from './pages'
import {AppLayout} from './components/ui/layouts'



function App() {

  const walletConnectProjectId = import.meta.env.REACT_APP_WALLET_CONNECT_PROJECT_ID
  return (
    <AppLayout>
      <Home />
    </AppLayout>
  )
}

export default App
