import { useAccount } from "wagmi";
import { LoadingSpinner, Button } from '../components/ui';

export default function Home() {
    const { address, isConnecting, isDisconnected } = useAccount();
    if (isConnecting) return <div>Connecting...</div>;
    if (isDisconnected) return <div>Disconnected</div>;
    
    return (
        <div>
            <h1>Home</h1>
            <div>Connected Wallet: {address}</div>
            <LoadingSpinner className="w-20 h-20"/>
            <Button disabled>Mi componente boton</Button>
            <Button isLoading>Mi componente boton</Button>
        </div>
    )
}