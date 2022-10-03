// var name = "Paul"

let loc = "Lathom"

const dob = "11 April"

console.log(loc)

loc = "UK"

let num1=25, num2=15

let sum = num1 + num2
console.log(sum)

let sub = num1 - num2
console.log(sub)

let product = num1 * num2
console.log(product)

let division = num1 / num2
console.log(division)

let num3=30, num4=40

if(num4 > num3) {
console.log("Number 4 is Greater than Number 3") 
}
else {
console.log("Number 3 is not Greater than Number 4")
}

// let greaterThanOrEqualto = num4 >= num3

// === checks data type

let num5=45, num6=45
if (num5 === num6) {
    console.log("The value and data type are the same")
}
else {
console.log("The vaue and data type are different")
}

// !== checks value & data type

if (num5 >= 40 && num3 <=65){
console.log("Number 3 is in the range of 40-65")
}
else{
    console.log("Out of Range")
}

let name ="Paul", surname="Benson"

let fullname = name + surname
fullNameNew = `${name} ${surname}`

console.log(fullname)
console.log(fullNameNew)

//function calculates (num1, num2) {
 //let sum = num1 + num2
 //return sum 

// console.log(calculates(150, 200))

let names = ["Paul", "Leanne", "Lily", "Sebastian"]


console.log(names[1])

let user = {name: "Paul", age:31}
console.log(user.name)

let users = [{name: "Paul", age:31}, {name: "Jimmy Grant", age:37}]

for(let i=2; i<= i.length; i++)
{
   // console.log(names[i])
}

for(let k in user)
{
    console.log(k)
}

for(let v of names)
{
    console.log(v)
}

/* let index = 0

while (index < 3)
{
    console.log(ages[index])
    index = index + 2
} */
let ages = [31, 39, 2, 7]
let newAgeset = ages.filter((item, index)=>{
    return item < 40
})
console.log(newAgeset)

let newDoubleSet = ages.map((item, index)=>{
    return item * 3
})
console.log(newDoubleSet)

let ageSum = ages.reduce((prevValue, currentValue)=>{
return prevValue + currentValue
}, 0)
console.log(ageSum)