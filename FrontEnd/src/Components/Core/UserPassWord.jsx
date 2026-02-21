import React, { useState,useContext } from 'react'
import CoreHeader from './Components/CoreHeader'
import CoreFooter from './Components/CoreFooter'
import "./Components/CSS/LogIn.css";
import { AuthContext } from '../../Context/authContext';
import { useNavigate } from 'react-router';

export default function UserPassWord() {

   const {setUserLoginedIn}=useContext(AuthContext);
   const navigate=useNavigate();


    const [userInput,setUserInput]=useState({
        accountDetail:"",
        currentPassword:""
    });

    const handleUserInputChange= (e) =>{
        setUserInput({
            ...userInput,
            [e.target.name]:e.target.value
        });
    };

    const handleLogSubmit = async(e)=>{
        e.preventDefault();
        let {accountDetail,currentPassword}=userInput;
        accountDetail=accountDetail.trim();
        currentPassword=currentPassword.trim();

        if(accountDetail.length==0){
            alert("Please Enter A valid Email or Phone Number");
            return;
        }
        else if(currentPassword.length==0){
            alert("Please Enter A valid Password");
            return;
        }

        if(accountDetail.includes("@") && accountDetail.includes(".")){
            var userMailAddress=accountDetail;
        }
        else if(accountDetail.length==10){
            var userPhoneNumber=accountDetail;
        }
        else{
            alert("Please Enter a Valid Information");
            return;
        }

        const respones = await fetch("http://localhost:3000/user/checkUser",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({userMailAddress,userPhoneNumber,currentPassword}),
        });

        const result= await respones.json();

        if(result.user=='User not found'){
            alert("some error");
        }
        else{
            navigate("/");
            setUserLoginedIn(true);
        }


    };


    return (
        <React.Fragment>

            <CoreHeader />
            <h2 className="logMainHeading">Enter Your Credentials</h2>
            <div className="logInMainContainer">
                <div className="logFormContainer">
                    <div className="logUpperContainer">
                        <form id='logForm' style={{display:"flex",height:'100%',width:'100%'}} onSubmit={handleLogSubmit}>
                            <div className="logLabelsContainer">
                                <label htmlFor="accountDetail" className="logLabel">Email Or Phone Number</label>
                                <label htmlFor="password" className="logLabel">Password</label>
                            </div>
                            <div className="logInputsContainer">
                                <input type="text" className="logInput" name='accountDetail' onChange={handleUserInputChange}/>
                                <input type="password" className="logInput" name='currentPassword' onChange={handleUserInputChange}/>
                            </div>
                        </form>
                    </div>
                    <div className="logLowerContainer">
                        <button form='logForm' className="logButton">Login</button>
                    </div>
                </div>
            </div>

            <div style={{
                marginTop:"600px"
            }}>
                <CoreFooter />
            </div>

        </React.Fragment>
    )
}
