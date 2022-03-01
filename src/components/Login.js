import './Style.css'
import Button from './Button';
const Login =()=>{
   
    
    return (
        <div className='login'>
        <form className="login-grid">
				    <input className="form-control" type="text" name="text" placeholder='Email or phone'/>
					<input className="form-control" type="password" name="password" placeholder='password'/>
					<Button name="Log In"/>
                    <span className="form-control"><a href="/">Forgotten account?</a></span>
		</form>
        </div>
    )
}

export default Login;


