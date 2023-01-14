const getNowDate = () => {
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();

    return `${yyyy}-${mm}-${dd}`;
};

export function checkValidationEmail(email) {
    if (email === undefined || !email.includes("@")) {
        console.log("Error : 이메일 형식을 확인해주세요.");
        return false;
    } else return true;
}

export function getWelcomeTemplate({ name, age, school }) {
    return `
    <html>
        <body>
            <h1>${name}님 가입을 환영합니다.</h1>
            <hr />
            <div>이름 : ${name}</div>
            <div>나이 : ${age}</div>
            <div>학교 : ${school}</div>
            <div>가입일 : ${getNowDate()}</div>
        </body>
    </html>
    `;
}

export function sendWelcomeTemplateToEmail(email, mytemplate) {
    console.log(`${email} 이메일로 ${mytemplate}를 전송합니다.`);
}
