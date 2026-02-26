import React, { useState, useContext } from 'react'
import CoreHeader from './Components/CoreHeader'
import CoreFooter from './Components/CoreFooter'
import "./Components/CSS/LogIn.css";
import { AuthContext } from '../../Context/authContext';
import { useNavigate } from 'react-router';
import AuthAPI from './Components/CoreAPI/AuthAPI';

export default function UserPassWord() {

    const { setUserLoginedIn } = useContext(AuthContext);
    const navigate = useNavigate();


    const [userInput, setUserInput] = useState({
        accountDetail: "",
        currentPassword: ""
    });

    const handleUserInputChange = (e) => {
        setUserInput({
            ...userInput,
            [e.target.name]: e.target.value
        });
    };

    const handleLogSubmit = async (e) => {
        e.preventDefault();

        const result = await AuthAPI({ userInput });

        if (result.user == 'Correct Password') {
            navigate("/");
            setUserLoginedIn(true);
        }

        else {
            alert(`${result.user}`);
        }


    };


    return (
        <React.Fragment>

            <CoreHeader />
            <h2 className="logMainHeading">Enter Your Credentials</h2>
            <div className="logInMainContainer">
                <div className="logFormContainer">
                    <div className="logUpperContainer">
                        <form id='logForm' style={{ display: "flex", height: '100%', width: '100%' }} onSubmit={handleLogSubmit}>
                            <div className="logLabelsContainer">
                                <label htmlFor="accountDetail" className="logLabel">Email Or Phone Number</label>
                                <label htmlFor="password" className="logLabel">Password</label>
                            </div>
                            <div className="logInputsContainer">
                                <input type="text" className="logInput" name='accountDetail' onChange={handleUserInputChange} />
                                <input type="password" className="logInput" name='currentPassword' onChange={handleUserInputChange} />
                            </div>
                        </form>
                    </div>
                    <div className="logLowerContainer">
                        <button form='logForm' className="logButton">Login</button>
                    </div>
                </div>
            </div>

            <div style={{
                marginTop: "600px"
            }}>
                <CoreFooter />
            </div>

        </React.Fragment>
    )
}
