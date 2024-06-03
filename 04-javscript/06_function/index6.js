// 함수: 특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합

// 용어 정리
//  - 함수 선언: 함수를 `생성`
//  - 함수 호출: 함수를 `사용`

//  함수 선언 방식
//  #1. 명시적 함수 선언 / 함수 선언문
//  - 함수 이름과 매개변수 명시


function helloWorld() {
    console.log("Hello World");
}

helloWorld();

function helloWorld2()  {
    return 'hello world2'
}

// <return> / 반환값
// - 함수 내부 코드의 최종 결과가 값
// - 최종 결과 값 저장하고 보관하기 위한 키워드
// - return 키워드를 만나면 함수 실행 중단

console.log(helloWorld2());

// #2. 함수 표현식
// - 변수에 익명 함수를 할당
// - 변수가 선언된 후에만 호출 가능

// <익명함수>
// - 이름이 없는 함수
// 이름 지정시 => 함수 내부에서만 사용 가능
// const exhello = function hello () {
//     console.log("hello world 3");
// }

// exhello();

const helloWorld3 = function() {
    console.log("hello world!3");
}

const helloWorld4 = function() {
    return "hello world! 4";
}

helloWorld3();
console.log(helloWorld4())
helloWorld3();
console.log(helloWorld4())
helloWorld3();
console.log(helloWorld4())
// => 함수는 여러번 호출 가능

// ----------------------------------------------

// 매개변수가 있는 함수
function food(text){
    return text;
}
console.log(food("제육"));

function music2(name, title) {
    console.l
}
