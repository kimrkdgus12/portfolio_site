import React from 'react';
import Project from './Project';
// import { Link } from 'react-router-dom'

const Home = () => {


    return (
        <div className="home-container">
            {/* 첫 번째 화면 */}
            <div className="screen screen-1">
                <main className="home-main">
                    <div className="intro-text">
                        <h2>쌈봉한 개발자를 꿈꾸는</h2>
                        <h1>김강현 입니다 ~!</h1>
                        <h3>I am the only being in the entire universe. This alone is enough reason to love me.</h3>
                        <div className="myUrl">
                            <button className="get-cv">Notion</button>
                            <button className="get-cv">Git-Hub</button>
                            <button className="get-cv">Project</button>
                        </div>

                        <div class="info-container">
                            <div class="info-item">
                                <div class="info-text">
                                    <span class="info-title">생년월일</span>
                                    <span class="info-value">02.12.29</span>
                                </div>
                            </div>
                            <div class="info-item">
                                <div class="info-text">
                                    <span class="info-title">주소지</span>
                                    <span class="info-value">전북 전주시</span>
                                </div>
                            </div>
                            <div class="info-item">
                                <div class="info-text">
                                    <span class="info-title">이메일</span>
                                    <span class="info-value">ganghyeongim557@gmail.com</span>
                                </div>
                            </div>
                            <div class="info-item">
                                <div class="info-text">
                                    <span class="info-title">학력</span>
                                    <span class="info-value">전남대(전자통신공학부)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="intro-image">
                        <img src="images/homePage2.png" alt="Kim's Page" />
                    </div>
                </main>

                <div className="scroll-indicator">
                    <div className="arrow-down"></div>
                </div>
            </div>


            {/* 두 번째 화면 */}
            <div className="screen screen-2">
                <h1><Project /></h1>
            </div>
        </div>
    );
}

export default Home;
