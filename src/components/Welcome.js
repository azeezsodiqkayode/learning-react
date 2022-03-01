import Button from "./Button";
import Logo from "./Logo";


const Welcome = () =>{

    return (
            <div className ="container">
                <h1>Welcome to Bill Payment </h1>
                <Logo/>
                <p>
                My name is Iqmah and I am the CEO for Zulfah. <br />

                Thank you for creating your account on our bills payment platform.<br /><br />

                We believe recharges shouldnt be bought physically again and that is why  we have designed this amazing platform to be your buddy<br />

                With our bills payment, your imagination is the only limit as we make it easy to develop better financial habits.

                <br /><br />
                Bills payment made easy <br />
		        Thank you
                </p>
                {/* <Button/> */}
                <Button name="Welcome"/>
            </div>
    )

}

export default Welcome;