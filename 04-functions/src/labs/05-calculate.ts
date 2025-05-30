// [문제] 다양한 연산을 적용하는 고차 함수
// 숫자 a, b와 연산 함수(operation: (a: number, b: number) => number)를 받아
// 결과를 반환하는 calculate 함수를 작성하세요.
// operation 타입은 타입 별칭으로 선언하세요.

/*
예시)
const add = (a: number, b: number) => a + b;
calculate(10, 20, add) // 30
*/

type Calculator = (a:number, b:number) => number;

const add: Calculator = (a:number, b:number) => a + b;
const sub: Calculator = (a:number, b:number) => a - b;
const mul: Calculator = (a:number, b:number) => a * b;
const div: Calculator = (a:number, b:number) => a / b;

function calculate(a:number, b:number, operation:Calculator): number {
    return operation(a, b);
}

console.log(calculate(10, 20, add));
console.log(calculate(10, 20, sub));
console.log(calculate(10, 20, mul));
console.log(calculate(10, 20, div));