import { useBalance, useAccount } from 'wagmi';
import { ErrorInfo } from './ui';

export default function TokenBalance() {
    const { address } = useAccount();
    
    const { data } = useBalance({
        address,
        token: import.meta.env.VITE_CONTRACT_ADDRESS
    });
    
    //if (isLoading) return <div>Loading...</div>



    return (
        <div>
            <h1>TokenBalance</h1>
            {data && data.formatted} {data?.symbol} : <ErrorInfo message="Conecta tu wallet" />
        </div>
    );
}