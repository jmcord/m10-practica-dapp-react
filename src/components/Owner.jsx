import { useContractRead } from "wagmi";
import {blockmakerTokenABI} from "../contracts/ABIs"

export default function Owner() {
    const result = useContractRead({
        abi: blockmakerTokenABI
    })


    return (
        <div>
            <h1>Owner</h1>
            {result.data}
        </div>
    )    
}