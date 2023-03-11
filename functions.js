// function sumRange(start, end){
//     let sum = 0
//     for (let i = start; i < end; i++){
//         sum += i
//     }
//     console.log(`ผลรวมของ ${start} - ${end} = ${sum}`)
// }

// sumRange(6,10)

// function sayHello (){
//     for(var i=0; i<5;i++){
//         console.log('hello')
//     }
    
// }
// function textPrint(){
//     for(var i=1; i<5; i++){
//         console.log('print File no : ' + i)
//     }
// }

// function checkNumber(){
//     let prompt = require('prompt-sync')()
//     let x = parseInt(prompt('please enter a number>> '))
//     if(x < 50){
//         console.log('คุณกรอกข้อมูลน้อยเกินไป')
//         return
//     }
//     let result = (x % 2==0) ? `${x} เป็นเลขคู่` :`${x} เป็นเลขคี่`
//     return result
// }
// console.log(checkNumber())
// function age(x){
//     console.log('คุณมีอายุเท่ากับ ',x)
// }

// default Parameters
// function total(){
//     let vat = 7
//     let prompt = require('prompt-sync')()
//     let q = parseInt(prompt('ระบุจำนวนปริมาณ >> '))
//     let p = parseInt(prompt('ระบุราคา >>'))
//     result = (q*p*(1+vat/100)).toFixed(2)
//     console.log('ราคาที่คุณจำเป็นจะต้องจ่ายเท่ากับ '+result) 
// }
// total()
// let a = [2,4,6]

// function summary (...nums){
//     let sum = 0
//     for (i=0; i<nums.length; i++){
//         sum += nums[i]
//     }
//     return sum
// }

// console.log(summary(...a))

//call back function
// function msg (){
//     console.log('test time')
// }
// setTimeout(()=>{
//     console.log('test time')
// },3000)


// var add = function(x,y){
//     return x + y
// }
// var calcu = function calculate(a,b,func){
//     return func(a,b)
// }

// console.log(calcu(10,20,add))

// var sayHello = (YouName)=>{
//     console.log('hello '+ YouName)
// }
// let prompt = require('prompt-sync')()
// sayHello(prompt('Please enter your name >> '))

// var square = (x)=>{
//     if(isFinite(x)){
//         console.log(x**2) 
//     }
// }
// square(prompt('Please enter width >> '))


