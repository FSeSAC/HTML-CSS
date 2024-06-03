let mathScore = prompt('수학점수 입력');
let engScore = prompt('과학 점수 입력')

let avgScore = ((Number(mathScore) + Number(engScore)) / 2);

console.log(`평균 점수는 ${avgScore}입니다.`)