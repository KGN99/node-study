console.log("안녕하세요!");

function getToken(count) {
  // 예외처리
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
  // 랜덤 함수를 이용하여 6자리 숫자 생성
  const result = String(Math.floor(Math.random() * 10 ** count)).padStart(
    count,
    "0"
  );
  console.log(result);
}

getToken(4);
getToken(6);
getToken(8);
