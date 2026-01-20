const employee1 = {
  name: "John",
  age: 20,
};

const result1 = employee1.scores?.english;
console.log(result1)
const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
  },
};''

const result2 = employee2.scores.english??`English score is not defined`;
console.log(result2)

// เมื่อทำการ console.log() ตัว result1 จะได้ผลลัพธ์แสดงทางหน้าจอเป็น undefined

// เมื่อทำการ console.log() ตัว result2 จะได้ผลลัพธ์แสดงทางหน้าจอเป็น English score is not defined
