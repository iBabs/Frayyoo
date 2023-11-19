// var name = 'Tunji'

// console.log(name)

// let ppl = "People"
// console.log(ppl)
// const person = "Humans"

// ppl = 'animals'



// let school = prompt("Enter school name:")
// console.log('Your school name is '+ school)

// let marry = confirm('Are you sure you want to marry her?')

// function greet(user){
//     console.log('welcome '+ user)
// }

// greet('Dike')
// greet('Israel')
// greet('Tyson')

// const message = name =>console.log(`You matter, ${name}`)

// message('Jannet')
// message('Hadizah')
// message('Temitayo')

// function fullName(fname, lname){
//     console.log(`Your full name is ${fname} ${lname}`)
// }

// fullName('Aliko', 'Dantata')

// function addNum(num1, num2){
//     console.log(num1+num2)
// }

// addNum(23, 23)

function checkGrade() {
    const age = parseInt(prompt('Please Enter Your age'))

    if (age >= 12 && age <= 15) {
        alert('You are in Grade 1')
    } else if (age >= 9 && age <= 11) {
        alert('You are in Grade 2')
    } else if (age >= 6 && age <= 10) {
        alert('You are in Grade 3')
    } else if (age >= 9 && age <= 11) {
        alert('You are in Grade 4')
    } else if (age >= 6 && age <= 8) {
        alert('You are in Grade 5')
    } else if (age >= 3 && age <= 5) {
        alert('You are in Grade 6')
    } else if (age > 0 && age < 3) {
        alert('You are in Grade ')
    } else {
        alert('You are not eligible for this program')
    }
}

// const trans = parseInt(prompt('1. Enquiry \n2. withdrawal \n3. Transfer'))

// switch (trans) {
//     case 1:
//         checkGrade()
//         break
//     case 2:
//         alert('you selected 2')
//         break
//     case 3:
//         alert('you selected 3')
//         break
//     default:
//         alert('invalid input')
// }

const arr = [23, 56, 12, 32,45, 34]

console.log(arr[3])

const obj = {
    name: 'Isaac John',
    capacity: 1_000_000
}
console.log(obj.capacity)