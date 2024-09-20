import './App.css';
import Header from "./components/Header";
import { useEffect, useState } from 'react';
import instance from './axios';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Join from './pages/Join';

function App() {

  const [user, setUser] = useState();
  const [sInfo, setSInfo] = useState();

  const getSession = async () => {
    // console.log("세션 호출 !");
    const res = await instance.get("/getSession");
    // console.log("getSession res :", res.data);
  }

  useEffect(() => {
    getSession();
    console.log(JSON.parse(sessionStorage.getItem("info")));
    setSInfo(JSON.parse(sessionStorage.getItem("info")));
  }, [user]);


  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login setUser={setUser} />}></Route>
        <Route path='/join' element={<Join />}></Route>
      </Routes>
    </div>
  );
}

export default App;
