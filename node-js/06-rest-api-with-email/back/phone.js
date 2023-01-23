import coolsms from "coolsms-node-sdk";

export function checkValidationPhone(myphone) {
    // 휴대폰 번호 자릿수 맞는지 확인
    if (myphone.length !== 10 && myphone.length !== 11) {
        // 에러 메시지 콘솔에 출력
        console.log("Error : 핸드폰 번호를 확인해주세요.");
        return false;
    }
    return true;
}

export function getToken(count) {
    // 핸드폰 토큰 6자리 만들기
    if (count === undefined) {
        console.log("에러 발생!!! 갯수를 제대로 입력해 주세요!!!");
        return;
    } else if (count <= 0) {
        console.log("에러 발생!!! 갯수가 너무 적습니다!!!");
        return;
    } else if (count > 10) {
        console.log("에러 발생!!! 갯수가 너무 많습니다!!!");
        return;
    }
    const result = String(Math.floor(Math.random() * 10 ** count)).padStart(
        count,
        "0"
    );
    return result;
}

export async function sendTokenToSMS(myphone, token) {
    // 핸드폰 번호에 토큰 전송하기
    // return myphone + " 번호로 인증번호 " + token + " 를 전송합니다.";
    const mysms = coolsms.default;

    // apiKey, apiSecret 설정
    const messageService = new mysms(
        process.env.API_KEY,
        process.env.SECERET_KEY
    );
    const result = await messageService.sendOne({
        to: "01012345678",
        from: myphone,
        text: `${token}인증번호 테스트`,
    });
    console.log(result);
}
