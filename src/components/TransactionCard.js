import './Style.css'

const TransactionCard =(props)=>{

    const transaction = props.data


    return (
        <ul className="list-group list-group-flush">
        <li className="row">
                <div className="col ">
                    <p>{transaction.name}</p>
                </div>
                <div className="col">
                    <p>&#8358;{parseFloat(transaction.amount).toFixed(0)}</p>
                  </div>
            </li> 
        </ul>
    )
}

export default TransactionCard;
