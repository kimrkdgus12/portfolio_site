const express = require('express');
const router = express.Router();
const path = require("path");
const conn = require("../config/database");


router.get('/', (req, res) => {
    console.log('Main Router');
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'build', 'index.html'))
});


// 회원 가입 라우터 (Join.jsx 에서 가져온 데이터)
router.post("/getJoinData", (req, res) => {
    console.log("getJoinData :", req.body);
    let { id, pw, userName } = req.body;

    // KIMS_MEMBER 테이블에 저장
    const sql = "INSERT INTO KIMS_MEMBER (ID, PW, USER_NAME) VALUES (?, ?, ?)"
    conn.query(sql, [id, pw, userName], (err, rows) => {
        if (err) {
            console.log("회원 가입 실패");
            res.json({ result: "failed" });
        } else {
            console.log("회원 가입 성공", rows);
            res.json({ result: "success" });
        }
    });
});


// 로그인 라우터 (Login.jsx 에서 가져온 data)
router.post("/getLoginData", (req, res) => {
    console.log("getLoginData router :", req.body);
    let { id, pw } = req.body;

    let sql = "SELECT ID, PW FROM KIMS_MEMBER WHERE ID = ? AND PW = ?";
    conn.query(sql, [id, pw], (err, rows) => {
        if (rows.length > 0) {
            req.session.userId = id;

            console.log("로그인 성공", rows);
            res.json({ result: "success", id: id });
        }
    });
});


router.get("/getSession", (req, res) => {
    console.log("getSession router", req.session.userId);
    res.json({ id: req.session.userId });
});


module.exports = router;