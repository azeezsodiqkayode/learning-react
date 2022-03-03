import Savings from "./Savings";
import TransactionHistory from "./TransactionHistory";
import CreateNewSaving from "./CreateNewSaving";

const Dashboard =()=>{


    return(
        <>
        <div className="row align-items-start p-3">
            <div className="col ms-2">
            <TransactionHistory/>
            </div>
            <div className="col">
            <CreateNewSaving/>
            </div>
            <div className="col">
            <Savings/>
            </div>
        </div>
        </>
        
        
    )
}

export default Dashboard;