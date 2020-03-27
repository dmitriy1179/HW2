//1
console.log(1 == 2)
console.log(1 != 2)
console.log(1 == 1)
console.log(1 != 1)
console.log("text" == 5)
console.log("text" != 5)
console.log("text" == "Text")
console.log("text" == "text")
console.log(true == "true")
console.log(true == false)
console.log(false == 0)
console.log(false === 0)
console.log("" == false)
console.log("" !== false)
console.log(undefined === null)
console.log(undefined == null)
console.log(17 === true)
console.log("17" === true)
console.log({} === {})

//2
var sign = prompt("Введите чётное или нечётное число")
sign %=2
console.log(Boolean(!sign))

//3
sign = prompt ("Введите нечётное или чётное число")
sign %=2
console.log(Boolean(sign))

//4
var numVar = Number(numVar)
console.log(typeof numVar)
numVar = prompt("Введите переменную")
numVar *=10;
numVar **=2;
numVar +=100;
console.log(numVar)

//5
let a = "100"
console.log(typeof a)
a = +a
console.log(typeof a)

a = String(a)
console.log(typeof a)
a = Number(a)
console.log(typeof a)

a = "100"
console.log(typeof a)
a = parseInt(a)
console.log(typeof a)

//6
var d = prompt("Введите переменную d")
var b = prompt("Введите переменную b")
var c = Number(c)
var c1 = Number(c1)
d = Number(d)
b = Number(b)
c = (d + b)*(d - b)
c1 = d**2 - b**2
console.log(`разность квадратов: ${c===c1}`)


//*1
var number1 = prompt("Введите первое число")
number1 = Number(number1)
number1 +=10
var number2 = prompt("Введите второе число")
number2 = Number(number2)
number2 +=10
var number3 = prompt("Введите третье число")
number3 = Number(number3)
number3 +=10
var number4 = Number(number4)
number4 = number1 + number2 + number3
window.alert(`Сумма чисел: ${number4}`)

//*2
var side1 = prompt("Введите сторону треугольника A")
var side2 = prompt("Введите сторону треугольника B")
var side3 = prompt("Введите сторону треугольника C")
side1 = Number(side1)
side2 = Number(side2)
side3 = Number(side3)
console.log(`треугольник существует: ${(side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2)}`)

//*3
var f = prompt("Введите переменную f")
var e = prompt("Введите переменную e")
var s = Number(s)
var s1 = Number(s1)
f = Number(f)
e = Number(e)
s = (f + e)**3
s1 = f**3 + 3*f**2*e + 3*f*e**2 + e**3
console.log(`разность кубов: ${s===s1}`)