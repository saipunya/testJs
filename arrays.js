let oddNumbers = [1,2,4,6,8,12,24]
// for (i=0; i<oddNumbers.length; i++) {
//     console.log(oddNumbers[i])
// }

// for in บอกตำแหน่งของ array
// for (x in oddNumbers){
//     console.log(x)
// }

let a = 15 in oddNumbers
console.log(a)

// for of บอกค่าของ array
for (k of oddNumbers){
    console.log(k)
}