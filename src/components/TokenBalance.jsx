import { useBalance, useAccount } from 'wagmi';
import { ErrorInfo } from './ui';

export default function TokenBalance() {
    const { address } = useAccount();
    
    const { data } = useBalance({
        address,
        token: import.meta.env.VITE_CONTRACT_ADDRESS
    });
    
    return (
        <div>
            <h1>TokenBalance</h1>
            {data && data.formatted} : <ErrorInfo message="Conecta tu wallet" />
        </div>
    );
}