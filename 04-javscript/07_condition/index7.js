// 조건문

// if문
if (5 > 3) {
    console.log("집가자");
}

let num = Number(prompt('숫자 입력'));
// 1. prompt()로 사용자의 값을 입력
// 2. Number() 문자열 => 숫자형 형변환

// let num2 = prompt('숫자 입력');
// num2 = Number(num);

// if (num > 10) {
//     console.log('입력한 수는 10보다 크다');
// } else {
//     console.log('입력한 수는 10보다 작거나 같다');
// }

console.log('--------------------------------------------');

if (num > 10) {
    console.log('입력한 수는 10보다 크다');
} else if (num === 10) {
    console.log('입력한 수는 10이다!');
} 
else {
    console.log('입력한 수는 10보다 작다');
} 

if (num > 100 || num < 0) {
    console.log('입력값 오류 / 숫자의 범위는 0 ~ 100');
} else if (num >= 90) {
    console.log('A');
}  else if (num >= 80) {
    console.log('B');
} else if (num >= 70) {
    console.log('C');
} else if (num >= 60) {
    console.log('D');
} else {
    console.log('F');
} 

console.log('--------------------------------------------');

// 중첩 if문
let userId = 'user01'
let userPw = '1234'
function loginUser() {
    let inputId = prompt('아이디 입력')
    let inputPw = prompt('비밀번호 입력')

    if (userId === inputId) {
        if(userPw === inputPw) {
            return '로그인 성공'
        } else {
            return '비번 오류! 로그인 실패'
        }
    } else if (inputId === '') {
        return '아이디 입력 안함!'
    } else {
        return '아이디 틀림! 로그인 실패'
    }
}

const result = loginUser();
//  -> loginUser 함수의 반환값을 result 변수에 저장
console.log(result)

// Q) userId, inputId 동일?
//  - userPw, inputPw 비교
// Q) inputId에 빈값 입력시?
//  - '아이디 입력 안함' 문구 반환
// Q) 두 경우가 아닐시 / inputId 틀림
//  - '아이디 틀림' 문구 반환

//  ----------------------------------------------------
// Switch문
// - 하나 이상의 case 문으로 구성
// - default가 필수는 아니지만, 사용하길 권장 / if문의 else 같은 존재
//      - switch문 내의 모든 case가 매칭 되지 않을 때 실행
// - 여러개의 case문을 묶을 수도 있다
// - `break;`
//      - 조건을 빠져나갈 때 사용하는 키워드

let a = 3;
switch(a) {
    case 1:
    case 2:
    case 3:
        console.log("a가 1 ~ 3이군요!");
    case 4:
        console.log("a가 4 군요!");
    case 5:
        console.log("a가 5 군요!");
    default:
        console.log("a가 무슨 값인지 모르겠어요!");
}


// 삼항 연산자
// 조건식 ? A :B
// 조건식이 참이라면 'A' 거짓이라면 'B'
// if문을 간단히!

let num = 5;

// 일반 if 문
if (num%2 === 1) {
    console.log('홀수');
} else {
    console.log('짝수');
}

// 삼항 여난자
num % 2 === 1 ? console.log('홀수') :  console.log('짝수');

// 실습 - new date
// 내장 함수  - 현재 날짜와 시간을 나타내는 JS Date 객체 반환
// 내장함수 : - JS 엔진이 기본적으로 제공하는 함수
//          - 개발자가 별도로 정희하지 않아도 사용할 수 있는 함수
