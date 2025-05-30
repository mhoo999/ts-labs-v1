// 타입스크립트 기본 타입

// (1) number
// : number -> 타입 어노테이션
let num: number = 123; // 123은 숫자형 리터럴 -> 타입스크립트는 숫자라고 판단 : 타입 추론

function echoMsg(msg: string): string {
    return msg;
}

function anyFunction(): void {
    console.log("hello");
}

anyFunction();

let neverVal: never;

function throwError(msg: string): never {
    throw new Error();
}

function infiniteLoop(): never {
    while (true) {
        console.log("...");
    }
}



