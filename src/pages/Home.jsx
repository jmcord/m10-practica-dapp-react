import { useAccount } from "wagmi";
import { LoadingSpinner, Button, ErrorInfo } from '../components/ui';

export default function Home() {
    const { address, isConnecting, isDisconnected } = useAccount();
    if (isConnecting) return <div>Connecting...</div>;
    if (isDisconnected) return <div>Disconnected</div>;
    
    return (
        <div>
            <h1>Home</h1>
            <div>Connected Wallet: {address}</div>
            <ErrorInfo message="Para mostrar errores" />
            <Button isLoading>Mi componente boton</Button>
        </div>
    )
}