import './Style.css'
import Button from './Button';


const Modal =()=>{
    return (
        
        <div className="container card">
        <ul className="list-group list-group-flush">
        <li className="list-group-item">
        <h2 className="title"> Find Your Account</h2>
        </li>
        <li className="list-group-item">
                <p className='text pt-4'>Please enter your email address or mobile number to search <br/> for your account.</p>
                <input type="text" id="inputemail" class="form-control modal-input"></input>
        </li>
        <li className="list-group-item">
            <div className ="modal-button">
            <button type="button" class="btn btn-secondary btnC">Cancel</button>
            <Button name="Search"/>
            </div>
        </li>
        </ul>
        </div>
    )
}

export default Modal;