import {
    checkValidationEmail,
    getWelcomeTemplate,
    sendWelcomeTemplateToEmail,
} from "./email.js";

function createUser({ name, email, age, school }) {
    if (checkValidationEmail(email)) {
        sendWelcomeTemplateToEmail(
            email,
            getWelcomeTemplate({ name, age, school })
        );
    }
}

const myUser = {
    name: "철수",
    age: 17,
    school: "다랍쥐초등학교",
    email: "a@a.com",
};

createUser(myUser);
