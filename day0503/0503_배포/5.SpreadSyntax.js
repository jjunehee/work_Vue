// SpreadSyntax (전개구문)
// spread operator는 반복 가능한(iterable) 객체에 적용할 수 있는 문법.
// 배열이나 문자열 등을 풀어서 요소 하나 하나로 전개시킬 수 있다.

const user1 = { id: "ssafy1" };
const user2 = { id: "ssafy2" };

const arr = [user1, user2];
console.log(arr);

const copyArr = [...arr];
console.log(copyArr);

const refArr = arr;
console.log(refArr);
console.log(copyArr === arr);
console.log(refArr === arr);
console.log(JSON.stringify(copyArr) === JSON.stringify(arr));

user1.id = "ssafy9";
console.log(user1);
console.log(copyArr);

const addArr = [...arr, { id: "ssafy9" }];
console.log(addArr);

let teams1 = ["서울", "대전"];
let teams2 = ["구미", "광주", "부울경"];
let teamOne = [...teams1, ...teams2];

console.log(teamOne);
let team3 = ["서울", ...teams2, "대전"];
console.log(team3);

const copyUser = { ...user1 };
console.log(copyUser);

const u1 = { id: "ssafy1" };
const u2 = { id: "ssafy2" };
const y = { ...u1, ...u2 };

console.log(y);

const num = [1, 3, 5, 7];
function plus(a, b, c, d) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  return a + b + c + d;
}
let result = plus(...num);
console.log(result);

// 얕은 복사
const arr3 = [1, 2, 3, 4];
const copyarr3 = arr3;
copyarr3[0] = 999;
console.log(arr3);

// 깊은 복사
const arr4 = [1, 2, 3, 4];
const copyarr4 = [...arr4];
copyarr4[0] = 999;
console.log(arr4);
console.log(copyarr4);

// 진짜 깊은 복사 방법
const arr5 = [1, 2, 3, 4];
const copyarr5 = JSON.parse(JSON.stringify(arr5));
console.log(copyarr5);
