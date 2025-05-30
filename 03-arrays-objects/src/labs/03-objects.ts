/**
 * [문제] 책(Book) 객체 타입을 선언하고, 책 목록을 다루는 코드를 작성하세요.
 * 1. Book 타입은 title, author, publishedYear(출간년도), isAvailable(대출가능여부) 필수
 * 2. books 배열을 만들고 2권 이상 입력
 * 3. 현재 대출 가능한 책만 availableBooks에 추출
 */

// TODO: Book 타입, books 배열, availableBooks 필터링

type Book = {
    title: string,
    author: string,
    publishedYear: string,
    isVailable: boolean
}

let books: Book[] = [];

books.push({
    title: "해리포터",
    author: "롤링",
    publishedYear: "1991",
    isVailable: false
}, {
    title: "해리포터2",
    author: "롤링",
    publishedYear: "1991",
    isVailable: false
});