import Transactions from "./Transactions"


const TransactionHistory =()=>{

    return (
        <div class="card" style={{width: "30rem"}}>
        <div className="card-header">
            Transaction History
        </div>
            <Transactions/>
        </div>
    )
}

export default TransactionHistory