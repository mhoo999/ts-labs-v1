function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(10, 20)); // 숫자 덧셈
console.log(combine("안녕", "하세요")); // 문자열 연결

// function compute(a:number, b:number, op:(a:number, b:number) => number): number {
//   return op(a, b);
// }

type Op = (a:number, b:number) => number;

function compute(a:number, b:number, op:Op) {
  return op(a, b);
}

console.log(compute(3, 4, (a:number, b:number) => a + b));

function func2(a:number, b:number): number;
function func2(a:string, b:string): string;
function func2(a:string, b:number): string;

function func2(a: any, b:any): any {
  return a + b;
}

console.log(func2(1, 2));
console.log(func2("가", "나"));
console.log(func2("가", 3));
