console.log("안녕하세요!");

function getToken(count) {
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
