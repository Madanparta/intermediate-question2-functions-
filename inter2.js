// 1.

// function hypotenuseOfRight (para, base){
//     let hypo = Math.pow(para,2)+ Math.pow(base,2)
//     let hypotenuse = Math.sqrt(hypo)
//     return hypotenuse
// }
// console.log(hypotenuseOfRight(3,4))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 2.

// function areaOfCircle (radius){
//     // let radius = radius*2
//     let areaOfCircle = 2*(Math.PI*(radius*2))
//     return areaOfCircle
// }
// console.log(areaOfCircle(4))


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 3.

// function areaOfTriangle (side1,side2,side3){
//     let sum = (side1+side2+side3)/2
//     let square = Math.sqrt(sum*(sum-side1)*(sum-side2)*(sum-side3))
//     return square
// }
// console.log(areaOfTriangle(3,4,5))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 4.

// function difference (num){
//     let diff = num-13
//     return diff
// }
// console.log(difference(12))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 5.

// function percentages (num, perc){
//     let numper = (num*perc/100)
//     return numper
// }
// console.log(percentages(20,5))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 6

// function areaAndPerim (radius){
//     let area = Math.PI*(radius*radius)
//     let pera = 2*radius*Math.PI
//     let sum = pera +area
//     return sum
// }
// console.log(areaAndPerim(25))


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 7.

// function timeConver (secounds){
//     let hr = Math.floor(secounds/3600)
//     let min = Math.floor((secounds - (hr*3600))/60)
//     let sec = (secounds-((hr*3600)+(min*60)))
//     return ("0"+hr+":"+min+":"+sec)
// }
// console.log(timeConver(2000))

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 8.

// function sumOfYearMonthDay (days){
//     let year = Math.floor(days/365)
//     let month = Math.floor((days-(year*365))/30)
//     let day = (days - ((year*365)+(month*30)))
//     let sum = year+month+day
//     return sum
// }
// console.log(sumOfYearMonthDay(2000))