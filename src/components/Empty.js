

const Empty =(props)=>{
    const {name} = props
    return (
        <>
            <div class="card">
            <div class="card-body">
                There is nothing to display <br/>
                {name}
            </div>
            </div>
        </>
    )
}

export default Empty