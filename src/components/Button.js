import "./Style.css"

const Button = (props) =>{
    const {name} = props
    // function welcomeclick(){
    //     alert("You are welcome")

    // }


    return (
            <div>
                {/* <button className ="btn btn-lg" onClick = {welcomeclick}> Welcome</button> */}
                <button className ="btn btnG"> {name}</button> 
            </div>
            
                
    )

}

export default Button;