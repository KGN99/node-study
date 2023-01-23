import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import {
    checkValidationEmail,
    getWelcomeTemplate,
    sendTemplateToEmail,
    sendWelcomeTemplateToEmail,
} from "./email.js";
import cors from "cors";

const app = express();
const port = 8000;
// 모든 사이트 접근 허용
app.use(cors());

const swaggerSpec = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// req.body 읽기 위해 선언
app.use(express.json());

app.post("/boards", (req, res) => {
    console.log(req.body);
    // 1. 데이터를 등록
    // 2. 저장 결과 응답
    res.send("게시물 등록에 성공하였습니다.");
});

app.post("/users", (req, res) => {
    const user = req.body.myuser;

    // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
    const isValid = checkValidationEmail(user.email);
    if (isValid) {
        // 2. 가입환영 템플릿 만들기
        const mytemplate = getWelcomeTemplate(user);

        // 3. 이메일에 가입환영 템플릿 전송하기
        sendTemplateToEmail(user.email, mytemplate);
        res.send("가입완료!!!");
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
