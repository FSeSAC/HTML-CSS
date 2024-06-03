/** JS 표준 객체
 * - 기본적으로 미리 정의된 객체
 * - 모든 JS환경에서 사용할 수 있는 내장 객체
 * - 자주 사용되는 기능을 미리 구현
 * */ 

// #1. Date 객체: 시간, 날짜

// 날짜 생성, 저장
let now = new Date();
console.log(now);

/**  tiemstamp?
 * - 1970년 1월 1일 기준으로 흘러간 m/s단위를 나타내는 정수
 * - `에포크`이후의 시간 -> 특정 시간의 기준점
 * - 에포크 이후?
 *      - 역사적 이유: 유닉스 OS에서 타임스탬프를 측정하는데 사용된 날짜 초기 컴퓨터
 *      - 기술적 편의성: 시간을 숫자로 표현, 수학적으로 편리한 계산 가
*/

// new Date(timestamp)
let jan_01_1970 = new Date(0);
console.log(jan_01_1970); // Thu Jan 01 1970 09:00:00 GMT+0900 

let jan_02_1970 = new Date(24 * 3600 * 1000);
console.log(jan_02_1970); // 24시간

// new Date(date_string)
let date = new Date('2024-06-03');
console.log('date ->', date);

let date2 = new Date('2024', '06', '03'); // MM(0(1월) ~ 11(12월))
console.log('date2 ->', date);


/**
 * 관련 메서드
 * 객체 점 접근법
 * getDate(): 월의 몇 번째 날인지 반환
 * getDay(): 주의 몇 번째 날인지 반환 / 0부터 시작
 * getMonth(): 몇 번째 달인지 반환 / 0부터 시작
 * getHours(): 시간을 반환 / 0~23
 * getMinutes(): 분을 반환 / 0~59
 * getSeconds(): 초을 반환 / 0~59
 * getMillisecons(): 밀리초을 반환 / 0~999
 * getTime(): 1970년 1월 1일부터 현재까지의 밀리초 단위를 시간으로 반환
 */

console.log(now.getFullYear()); // 2024
console.log(now.getMonth() + 1); // 기본출력 0~11을 주의
console.log(now.getDate()); // 3
console.log(now.getHours()); // 13
console.log(now.getMinutes()); // 38
console.log(now.getSeconds()); // 56
console.log(now.getMilliseconds()); // 434
console.log(now.getDay()); // 0/일 ~ 6/토

console.log('--------------------');

/**
 * Math 객체
 * 수학적인 상수와 함수
 */

// 속성
console.log(Math.E); // 자연로그
console.log(Math.PI); // 원주율
console.log(Math.SQRT2); // 2의 제곱근

// 메서드
console.log(Math.min(100, -2, 0, 5)); // -2
console.log(Math.max(100, -2, 0, 5)); // 100
console.log(Math.round(5.3124)); // 5 -> 반올림
console.log(Math.ceil(5.3124)); // 6 -> 올림
console.log(Math.floor(5.3124)); // 5 -> 내림
console.log(Math.random()); //  `0 <= x < 1` 범위의 난수

// Math.random() 응용 예시
// 0 ~ 9
console.log(Math.floor(Math.random() * 10)); // 0 <= x < 10

// 0 ~ 10
console.log(Math.floor(Math.random() * 11)); // 0 <= x < 11

// 실습
// Q1) 1 ~ 100
console.log(Math.floor(Math.random() * 100)+ 1);
// Q2) 20 ~ 22
console.log(Math.floor(Math.random() * 3)+ 20);
