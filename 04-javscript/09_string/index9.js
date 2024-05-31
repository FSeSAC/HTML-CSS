/**
 * 내장 메서드
 * - 프로그래밍 언어나 프레임워크에서 기본적으로 제공하는 메서드
 * - 따로 설치, 추가 설정 x
 */


// 문자열 관련 내장 메서드
// - 문자열을 다루는데 유용한 기능 제공

let str = 'Happy Rani';
let str2 = '    Happy Rani  ';

// 문자열 인덱싱
console.log(str[0]); // H
console.log(str[0] + str[6]); //HR

// HaRa
console.log(str[0] + str[1] + str[6] + str[7]);

// 문자열의 길이 (length는 메서드x 속성o)
console.log(str.length)
console.log(str2.length)

// 대소문자 변환
console.log(str.toUpperCase()); // HAPPY RANI
console.log(str.toLowerCase()); // happy ranis

// 양끝 공백 제거
console.log(str2);
console.log(str2.length);
console.log(str2.trim());
console.log(str2.trim().length);
console.log('---------------------------');

// indexOf() 글자 위치 찾기
// 위치/index: 0부터 시작
// 같은 문자열이 있으면 처음에 나오는 위치
console.log(str.indexOf('y')) // 4
console.log(str.indexOf('i')) // 9
console.log(str.indexOf('v')) // 존재하지 않는 문자 검색시,  -1 반환
console.log(str.indexOf('')) // 매개변수에 값 x, 0 반환
console.log('---------------------------');

// slice() 문자열 자르기
// 음수값 들어가면 뒤부터 순서 샘
console.log(str.slice(2)); // 앞에서 2번째부터 반환
console.log(str.slice(1,3)); // 첫번째부터 3번째까지 반환
console.log(str.slice(-8)); // 뒤에서 8번째부터 반환
console.log('---------------------------');

// replace() 문자열 대체
console.log(str.replace('p', 'x')); // 처음나온 p만 x로 대체
console.log(str.replace('P', 'x')); // 소문자, 대문자 인식
console.log(str.replaceAll('p', 'x')); // 모든 p를 x로 대체
console.log('---------------------------');

// split() 문자열 쪼개기 / 배열로 변환
let str3 = 'dinner';
console.log(str3)
console.log(str3.split('e')); // ['dinn', 'r']
console.log(str3.split('n')); // ['di', '', 'er']

// repeat() 문자열 반복
console.log(str3.repeat(4)); // 4번 반복 / dinnerdinnerdinnerdinner


////////////////////////////////////////////////////
// 배열 내장 메서드
let arr = [1, 2, 3, 4, 5];
let arr2 = ['quokka', 'dog', 'koala', 'panda'];

// console.log(arr);
// // 배열에 값 추가하기
// arr[5] = 6; // 5번 인덱스에 6이라는 값 추가
// console.log(arr);

// arr[8] = 100; // 인덱스 건너뛰면 `empty` 값 생김
// console.log(arr);

// push(): 맨 끝에 요소 추가
arr.push(6);
arr.push(10);
console.log(arr);

// pop(): 맨끝에 요소 제거
arr.pop();
console.log(arr);

// unshift(): 맨 앞에 요소 추가
arr2.unshift('cat');
console.log(arr2);

// shift(): 맨 앞에 요소 제거
arr2.shift();
console.log(arr2)

// length: 배열의 길이 변환
console.log(arr.length);    // 6

// includes/요소 : 요소의 유무를 검사
console.log(arr2.includes('quokka')); // true, 존재o
console.log(arr2.includes('apple')); // false, 존재x

// reverse()
// console.log(arr.reverse()); // 원본 배열이 순차 반대로
console.log(arr);


// join(): join 안의 문자열 기준으로 병합
console.log(arr.join(' '));
console.log(arr.join('-'));
console.log('---------------------------');

// 메서드 체이닝: 여러 메서드 연결해 사용 가능
console.log('hello'.split('')); // ['h', 'e', 'l', 'l', 'o']
console.log('hello'.split('').reverse()); //  ['o', 'l', 'l', 'e', 'h']
console.log('hello'.split('').reverse().join('')); // olleh