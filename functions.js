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
function total(){
    let vat = 7
    let prompt = require('prompt-sync')()
    let q = parseInt(prompt('ระบุจำนวนปริมาณ >> '))
    let p = parseInt(prompt('ระบุราคา >>'))
    result = (q*p*(1+vat/100)).toFixed(2)
    console.log('ราคาที่คุณจำเป็นจะต้องจ่ายเท่ากับ '+result) 
}
total()



