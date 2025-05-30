// [문제] 문자열 변환 파이프라인 함수
// 문자열 배열과 변환 함수(transform: string => string)를 받아
// 각 요소를 변환 함수로 처리해 새 배열로 반환하는 processStrings 함수를 작성하세요.
// transform 함수 타입은 type alias로 선언하세요.

/*
예시)
const shout = (str: string) => str + '!';
processStrings(['hi', 'bye'], shout) // ['hi!', 'bye!']
*/

type Transform = (str: string) => string;
const shout: Transform = (str: string) => str + '!';

function processStrings(strings:string[], operation: Transform): string[] {
    let updateStrings: string[] = [];
    for (let i = 0; i < strings.length; ++i) {
        updateStrings.push(operation(strings[i]));
    }
    return updateStrings;
}

console.log(processStrings(['hi', 'bye'], shout));