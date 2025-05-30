// [문제] 조건에 따라 필터링하는 함수
// 숫자 배열과 조건 함수(predicate: number => boolean)를 받아
// 조건을 만족하는 값들만 새 배열로 반환하는 filterNumbers 함수를 작성하세요.
// predicate 함수 타입은 타입 별칭으로 선언하세요.

/*
예시)
const isEven = (n: number) => n % 2 === 0;
filterNumbers([1, 2, 3, 4], isEven) // [2, 4]
*/

type Even = (n: number) => boolean;
const isEven: Even = (n: number) => n % 2 === 0;
const isOde: Even = (n: number) => n % 2 === 1;

function filterNumbers(nums:number[], operation:Even): number[] {
    return nums.filter(operation);
}

console.log(filterNumbers([1, 2, 3, 4, 5], isEven));
console.log(filterNumbers([1, 2, 3, 4, 5], isOde));
