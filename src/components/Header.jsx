export default function Header(){
    return (
        <header className="flex px-8 py-4 border-b justify-between items-center
        bg-white">
                <img src="bm.png" alt="blockmaker-logo" className="sm:hidden" width={50}/>
                <img src="logo-blockmaker.png" alt="blockmaker-full-logo" className="hidden sm:flex" width={200}/>

                <button className="bg-gray-100 rounded-md">Conectar Wallet</button>
         
        </header>
    )
}