function getWelcomeTemplate({ name, age, school, createdAt }) {
    const result = `
    <html>
        <body>
            <h1>철수님 가입을 환영합니다.</h1>
            <hr />
            <div>이름: ${name}</div>
            <div>나이: ${age}살</div>
            <div>학교: ${school}</div>
            <div>가입일: ${createdAt}</div>
        </body>
    </html>
    `;
    return result;
}

const myUser = {
    name: "철수",
    age: 17,
    school: "다랍쥐초등학교",
    createdAt: "2010-09-07",
};

const result = getWelcomeTemplate(myUser);
console.log(result);
