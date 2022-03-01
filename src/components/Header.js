import Logo from "./Logo";
import Login from "./Login";
import './Style.css'

const Header = () =>{

    return(
        <header className="fb-header">
		<div className="inner-header">
		<Logo/>
		<Login/>
		</div>
	    </header>
    )

}

export default Header;