

const Card =(props)=>{

    const list = props.data


    return (
        <>
        <div className="card container">
        <div class="card-body">
            <h5 class="card-title">{list.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{list.type}</h6>
            <p class="card-text">id:{list.id} and ppu:{list.ppu}</p>
        </div>
        </div>
        </>
    )
}

export default Card;