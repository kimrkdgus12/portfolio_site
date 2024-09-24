import './App.css';
import Header from "./components/Header";

import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from './axios'

import Home from './pages/Home';

function App() {

  const [list, setList] = useState([]);

  useEffect(() => {
    // 본인의 고유한 주소를 가지고 있는 데이터를 가져다 쓰겠다 ?
    // => axios 로 요청
    // => useEffect 를 사용
    let url = "/projectList.json"

    axios.get(url)
      .then(res => {
        console.log("axios res :", res.data.list);
        setList(res.data.list)
      })
      .catch(err => console.error(err))
  }, [])
  console.log(list);
  


  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
