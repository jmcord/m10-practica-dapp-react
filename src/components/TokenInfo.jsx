import { useToken } from 'wagmi';



export default function TokenInfo() {
    const { data } = useToken({
        address: import.meta.env.VITE_CONTRACT_ADDRESS, 
      });
    
      console.log('Resultado lectura token', data);
    
      return (
        <div className="bg-white p-4 border shadow rounded-md">
          <h1>Token Info</h1>
          <p className="bg-gray-100 text-zinc-600 p-2 rounded-md text-sm">{data?.decimals}</p>
        </div>
      );
}