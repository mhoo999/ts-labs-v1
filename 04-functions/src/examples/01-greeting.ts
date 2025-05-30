function greetUser(
  name: string,
  greeting: string = "안녕하세요",
  age?: number
): string {
  if (age !== undefined) {
    return `${greeting}, ${name}님! (${age}세)`;
  }
  return `${greeting}, ${name}님!`;
}

console.log(greetUser("윤유저")); // 기본 인사 + 나이 없음
console.log(greetUser("서유저", "반갑습니다")); // 커스텀 인사
console.log(greetUser("정유저", "안녕", 28)); // 나이 포함

const add = (a:number, b:number): number => a + b;
console.log(add(1, 2));
