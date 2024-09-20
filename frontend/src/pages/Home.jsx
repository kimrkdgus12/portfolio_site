import React from 'react'
// import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home-container">
            <main className="home-main">
                <div className="intro-text">
                    <h2>Welcome To</h2>
                    <h1>Kim's Home_Page</h1>
                    <h3>김강현입니닷 !!</h3>
                    <div className="cta-buttons">
                        <button className="get-cv">노션</button>
                        <button className="get-cv">깃허브</button>
                        <button className="get-cv">프로젝트</button>
                    </div>
                </div>
                <div className="intro-image">
                    <img src="images/homePage2.png" alt="Kim's Page" />
                </div>
            </main>
        </div>
    )
}

export default Home