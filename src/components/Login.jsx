import React, { useEffect, useState } from 'react';
import axios from 'axios'


const Login = () => {
const [dataLogin, setDataLogin] = useState ("");
const [userConnected, setUserConnected] = useState ([]);
// const [error, setError] = useState('');
const [dataPassword, setDataPassword] = useState('');
const [searchUser, setSearchUser]= useState(false);
// console.log(dataPassword);
// console.log(dataLogin)
useEffect(async ()=>{
if ( searchUser){ 
    axios
    .get(`https://apiliveup.herokuapp.com/users?mail=${dataLogin}`)
    .then((res)=>res.data[0])
    .then((data)=>{
        console.log(data);
        setUserConnected (data);
        setSearchUser(false);
    });
    if (userConnected === undefined) {
        // setError('User not found');
    } else {
        console.log(dataLogin, userConnected.mail);
        if (
            dataPassword === userConnected.password &&
            dataLogin === userConnected.mail
        ){
            //  setError ('');
            await axios
            .post("https://apiliveup.herokuapp.com/login", userConnected, {withCredentials: true})
            .then((res)=>res.data)
            .then((data)=>console.log(data))
            .catch((err)=>console.log(err));

            axios
            .get("https://apiliveup.herokuapp.com/login")
            .then((res)=>console.log(res));
        } 
    
    }
}
},[dataLogin, searchUser, dataPassword]);

const handleLogin = (e) => {
    e.preventDefault();
    setSearchUser(true)
}

    return (
        <div className="login">
            <form  onSubmit= {handleLogin} className="loginForm">
                <label>
                   <input onChange={(e) =>setDataLogin(e.target.value)} type="email"></input> 
                </label>
                <label>
                    <input onChange={(e)=>setDataPassword(e.target.value)} type="password"></input>
                </label>
                <button className="loginBtn" type="submit"> Se connecter ! </button>
            </form>
        </div>
    )


};

export default Login