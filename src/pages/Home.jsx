import { useAccount } from "wagmi";
import { LoadingSpinner, Button, ErrorInfo, TextInput } from '../components/ui';

export default function Home() {
    const { address, isConnecting, isDisconnected } = useAccount();
    if (isConnecting) return <div>Connecting...</div>;
    if (isDisconnected) return <div>Disconnected</div>;
    
    return (
        <div>
            <h1>Home</h1>
            <div>Connected Wallet: {address}</div>
            <Button isLoading>Boton</Button> 
            <ErrorInfo message="Para mostrar errores" />
            <TextInput />
        </div>
    )
}