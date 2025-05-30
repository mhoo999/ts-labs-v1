console.log("hello world");

let a: number = 10;
let str: string = "hello";

function printLength(str: string) {
    console.log(str.length);
}

printLength("hello");
// printLength(undefined); // strict 옵션이 true이면 에러 처리