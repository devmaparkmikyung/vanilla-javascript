//var, let, const
let score=0;
score=score+1;
console.log(score)

const name = "scalper";
const age="30";
const isMale = true;
const isFemale = false;
let money = null;
let girlFriend = undefined;
console.log(typeof name)
console.log(typeof money)
console.log(typeof girlFriend)

console.log(name, age, isMale, money)

//문장으로 넣고 싶을때-옛날방식
console.log("my name is " + name +  " and i am " + age)
//문장으로 넣고 싶을때-ES6 템플릿
console.log(`내 이름은 ${name} 이고 나이는 ${age}입니다.`)

//문자열을 중간에 자르는거(문자역의 인뎃트는 0부터 시작)
const animal="tiger"

console.log(animal.substring(0,2))
console.log(animal.substring(2,5))  //두번째 인덱스부터 5번 앞 인덱스까지 출력해라는 뜻
//문자열을 쪼개는거(split이라는 메서드사용)
let fruits="사과 , 딸기, 포도, 참외";
fruits = fruits.split(", ");
console.log(fruits);//1~4까지 쪼개서 출력
console.log(fruits[3]);//세번 과일만 출력