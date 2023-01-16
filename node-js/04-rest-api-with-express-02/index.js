import express from "express";
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone.js";

const app = express();
const port = 3000;

// req.body 읽기 위해 선언
app.use(express.json());

app.get("/boards", (req, res) => {
    // 1. 데이터를 조회
    const result = [
        {
            number: 1,
            writer: "철수",
            title: "제목입니다.",
            contents: "철수 내용",
        },
        {
            number: 2,
            writer: "영희",
            title: "제목입니다.",
            contents: "영희 내용",
        },
        {
            number: 3,
            writer: "훈이",
            title: "제목입니다.",
            contents: "훈이 내용",
        },
    ];
    // 2. 결과 응답
    res.send(result);
});

app.post("/boards", (req, res) => {
    console.log(req.body);
    // 1. 데이터를 등록
    // 2. 저장 결과 응답
    res.send("게시물 등록에 성공하였습니다.");
});

app.post("/tokens/phone", (req, res) => {
    function createTokenOfPhone(myphone, count) {
        // 1. 휴대폰번호 자릿수 맞는지 확인하기
        const isValid = checkValidationPhone(myphone);

        if (isValid === true) {
            // 2. 핸드폰 토큰 6자리 만들기
            const token = getToken(count);

            // 3. 핸드폰번호에 토큰 전송하기
            const result = sendTokenToSMS(myphone, token);
            console.log(result);
            res.send(result);
        }
    }
    createTokenOfPhone(req.body.phone, 6);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
