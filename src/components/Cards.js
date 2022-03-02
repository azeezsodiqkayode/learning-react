import Card from "./Card";
import Empty from "./Empty";

const Cards =()=>{

    const lists = [
                    {
                        "id": "0001",
                        "type": "donut",
                        "name": "Cake",
                        "ppu": 0.55,
                    },
                    {
                        "id": "0002",
                        "type": "donut",
                        "name": "Raised",
                        "ppu": 0.55
                    },
                    {
                        "id": "0003",
                        "type": "donut",
                        "name": "Old Fashioned",
                        "ppu": 0.55
                    }
    ]

    return(

        <div className="container">
            {
                (lists.length > 0)? lists.map(list => <Card data={list}/>): <Empty name ="Your list is empty"/>
            }
        </div>

    )

}

export default Cards