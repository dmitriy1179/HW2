//1
console.log("My first debug")

//2
let ageOfPet = 9
const nameOfPet = "Dog"
console.log(`${ageOfPet} ${nameOfPet}`)

//3
ageOfPet = 11
console.log(`${ageOfPet} ${nameOfPet}`)

//4
var age = 11.5
let countOfLivedInUkraine = 9
const name = "Ivanov"
console.log(typeof age)
console.log(typeof countOfLivedInUkraine)
console.log(typeof name)

//5
const student = {name: "Dmitiry",
                surname: "Cherednichenko",
                isActive: true}
console.log(typeof student.isActive)

//6
const fruits = ["apple", "orange", "plum", "berry", "mandarin"]
const number = [1, 2, 3, 4, 5]
const students = [
    {name: "Ivanov",
    age: 25,
    faculty: "PMM"},
    {name: "Petrov",
    age:23,
    faculty: "EA"},
    {name: "Sydorov",
    age:22,
    faculty: "KN"},
    {name: "Andreev",
    age: 24,
    faculty: "KISS"},
    {name: "Nykolaev",
    age: 19,
    faculty: "ET"}
]

//*1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(`${numbers[0]} ${numbers[9]}`)

//*2
console.log(`студент: ${student.name} ${student.surname}, сейчас активен: ${student.isActive}`)
