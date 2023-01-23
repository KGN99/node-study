// email.js

import nodemailer from "nodemailer";

const getNowDate = () => {
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();

    return `${yyyy}-${mm}-${dd}`;
};

export function checkValidationEmail(email) {
    if (email === undefined || !email.includes("@")) {
        console.log("정확한 이메일 주소를 입력해주세요.");
        return false;
    } else {
        return true;
    }
}

export function getWelcomeTemplate({ name, age, school }) {
    return `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다.</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}살</div>
                <div>학교: ${school}</div>
                <div>가입일: 2022-3-22</div>
            </body>
        </html>
    `;
}

export function sendWelcomeTemplateToEmail(email, template) {
    // 템플릿을 이메일에 전송
    console.log(`${email}로 템플릿 ${template}를 전송합니다.`);
}

export async function sendTemplateToEmail(myemail, mytemplate) {
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const EMAIL_SENDER = process.env.EMAIL_SENDER;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
        },
    });

    const result = await transporter.sendMail({
        from: EMAIL_SENDER,
        to: myemail,
        subject: "[코드캠프] 가입을 축하합니다!!!",
        html: mytemplate,
    });
    console.log(result);
}
