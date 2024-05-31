
// 실습
//  학점계산기 / 0~100 / number, parsInt()
let score = Number(prompt('숫자입력'))

switch (true) {
    case score >= 90:
        console.log('A등급');
        alert('A등급');
        break;
    case score >= 80:
        console.log('B등급');
        alert('B등급');
        break;
    case score >= 70:
        console.log('C등급');
        alert('C등급');
        break;
    case score >= 60:
        console.log('D등급');
        alert('D등급');
        break;
    default:
        console.log("F등급");
        alert('F등급');
        break;
}