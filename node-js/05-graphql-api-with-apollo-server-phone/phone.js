export function checkValidationPhone(myphone) {
    // 휴대폰 번호 자릿수 맞는지 확인
    if (myphone.length !== 10 && myphone.length !== 11) {
        // 에러 메시지 콘솔에 출력
        console.log("Error : 핸드폰 번호를 확인해주세요.");
        return false;
    }
    return true;
}

export function getToken() {
    // 핸드폰 토큰 6자리 만들기
    const result = String(Math.floor(Math.random() * 10 ** 6)).padStart(6, "0");
    return result;
}

export function sendTokenToSMS(myphone, token) {
    // 핸드폰 번호에 토큰 전송하기
    console.log(myphone + " 번호로 인증번호 " + token + " 를 전송합니다.");
}
