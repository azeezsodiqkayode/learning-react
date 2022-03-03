import './Style.css'

const SavingCard =(props)=>{

    const saving = props.data


    return (

        <>
        <div className="card text-dark bg-light mb-3 trans-card" style={{width: "30rem"}}>
        <div className="card-header">{saving.name}</div>
        <div className="card-body">
            <div className="row g-2">
            <div className="col-6">
            <div className="p-3 border bg-light "><p>Contribution</p>
                    <p>&#8358;{parseFloat(saving.installmentalContribution).toFixed(2)}/Day</p>
            </div>
            </div>
            <div className="col-6">
            <div className="p-3 border bg-light"><p>Interest Rate</p>
                    <p>{saving.interestRate}%</p></div>
            </div>
            <div className="col-6">
            <div className="p-3 border bg-light"><p> Start Date</p>
                    <p>{saving.startDate}</p></div>
            </div>
            <div className="col-6">
            <div className="p-3 border bg-light">
            <p>Maturity Date</p>
                    <p>{saving.estimatedTerminationDate}</p>
                </div>
            </div>
        </div>
        </div>



        </div>
        </>
    
    )
}

export default SavingCard;
