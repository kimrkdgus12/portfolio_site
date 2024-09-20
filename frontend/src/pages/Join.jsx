import React, { useState } from 'react'
import instance from "../axios"
import { useNavigate } from 'react-router-dom';

const Join = () => {

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const [userName, setUserName] = useState("");

    const nav = useNavigate();

    const sendData = async (e) => {
        e.preventDefault();
        console.log(`ID: ${id}, PW: ${pw}, userName: ${userName}`);

        try {
            const res = await instance.post("/getJoinData", {id: id, pw: pw, userName: userName});
            console.log("(회원가입) res result :", res.data.result);

            if (res.data.result === "success") {
                window.alert("회원가입이 완료되었습니다 !");
                nav("/login");
            } else {
                window.alert("회원 가입에 실패하셨습니다.. 다시 한 번 시도해주세요..!");
            }
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <form className='join_login-form' onSubmit={sendData}>

            <div className="join_login-title">
                <h1>회원 가입</h1>
            </div>

            <label className='join_login-label'>
                <input className='join_login-input' type="text" placeholder="아이디" onChange={(e) => { setId(e.target.value) }} />
            </label>
            <label className='join_login-label'>
                <input className='join_login-input' type="password" placeholder="비밀번호" onChange={(e) => { setPw(e.target.value) }} />
            </label>
            <label className='join_login-label'>
                <input className='join_login-input' type="text" placeholder="사용자 이름" onChange={(e) => { setUserName(e.target.value) }} />
            </label>

            <button className="join_login-button red" type="submit"><i className="icon ion-md-lock"></i>완료</button>

        </form>
    )
}

export default Join