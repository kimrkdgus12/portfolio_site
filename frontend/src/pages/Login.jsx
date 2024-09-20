import React, { useState } from 'react'
import instance from '../axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {

    const [id, setId] = useState();
    const [pw, setPw] = useState();

    const nav = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(`ID: ${id}, PW: ${pw}`);

        const res = await instance.post("/getLoginData", { id: id, pw: pw });
        console.log("(로그인) res result :", res.data);

        if (res.data.result === "success") {
            setUser(res.data.id);

            let obj = {
                auth: "user",
                user_id: res.data.id
            }
            sessionStorage.setItem("info", JSON.stringify(obj));

            alert("환영합니다 !!");
            nav("/");
        } else {
            alert("잘못된 아이디 혹은 비밀번호 입니다..");
        }

    };


    return (
        <div>
            <form className='join_login-form' onSubmit={handleLogin}>

                <div className="join_login-title">
                    <h1>로그인</h1>
                </div>

                <label className='join_login-label'>
                    <input className='join_login-input' type="text" placeholder="아이디" onChange={(e) => { setId(e.target.value) }} />
                </label>
                <label className='join_login-label'>
                    <input className='join_login-input' type="password" placeholder="비밀번호" onChange={(e) => { setPw(e.target.value) }} />
                </label>

                <button className="join_login-button red" type="submit"><i className="icon ion-md-lock"></i>완료</button>

            </form>
        </div>
    )
}

export default Login