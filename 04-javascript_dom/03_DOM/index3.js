// console.log(document)
// console.log(document.childNodes[1].childNodes[0]);
// console.log(document.head);
// console.log(document.body);
// console.log(document.title);
// console.log(document.URL);
// /** console.log(document.domain);
//  * - 취소선이 그어지는 이유
//  * - 해당 속성 사용 권장 x, 더이상 지원 x
//  * - 최신 보안 정책에서는 도메인 사용한 접근 제어 방식이 보안상 취약하기에 지양
//  */

// // document 객체를 이용해 HTML '요소 선택'
// // 1. getElenmentById
// console.log(document.getElementById('green'));
// console.log(document.getElementById('red'));

// // 2. getElementsByClassName (HTMLCollection)
// console.log(document.getElementsByClassName('pink'));
// console.log(document.getElementsByClassName('pink')[1]);

// // 3. getElementsByTagName (HTMLCollection)
// console.log(document.getElementsByTagName('div'))

// // 4. getElementsByName (NodeList)
// console.log(document.getElementsByName('id'))

// // 5. querySelector (NodeList)
// // - 처음 발견한 하나만 가져옴
// console.log(document.querySelector('.pink'))
// console.log(document.querySelector('.others'))
// console.log(document.querySelector('#green'))
// console.log(document.querySelector('div'))
// console.log(document.querySelector('[name="id"]'))

// // 6. querySelectorAll (NodeList)
// console.log(document.querySelectorAll('.pink'));
// console.log(document.querySelectorAll('.others'));
// console.log(document.querySelectorAll('#green'));
// console.log(document.querySelectorAll('div'));
// console.log(document.querySelectorAll('[name="id]'));

// console.log(document.querySelectorAll('.pink')[0]);
// console.log(document.querySelectorAll('.pink')[1]);
// console.log(document.querySelectorAll('.pink')[2]);
// console.log(document.querySelectorAll('.pink')[3]);

// console.log('----------------------------')

// /**
//  * <유사 배열>
//  * [] 식으로 생긴 배열을 의미, 배열 X
//  * index, length는 가짐
//  * 배열과 달리 사용가능한 매서드  제한
//  */


// NodeList -> forEach() 반복문 사용 가능
document.querySelectorAll('.pink').forEach((elem) => console.log(elem));

// HTMLCollection  -> forEach() 메서드 사용 X
// 반복 필요? -> Array 변경 (Array.from())
Array.from(document.getElementsByClassName('pink')).forEach((elem) => 
    console.log(elem));

// for of 반복문 가능
const pinks = document.querySelectorAll('.pink');
for (let pink of pinks) {
    console.log(pink);
}
