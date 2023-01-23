// enum position{
//     tester,
//     sr_tester,
//     programmer,
//     sr_programmer,
//     projectmanager
// }

// if(position.programmer){
//     console.log("start programming")
// }


//1.enum number
//2.enum string


//1.enum number

// enum day{
//     day1,
//     day2,
//     day3,
//     day4
// }

// console.log(day.day1)
// console.log(day.day4)


//2. enum string

// enum weekday{
//     day1="sunday",
//     day2="monday",
//     day3="tuseday"
// }

// console.log(weekday.day2)
// console.log(weekday.day3)


// let info:{firstName:string,lastName:string}={
//     firstName:"sarika",
//     lastName:"ghule"
// }

// console.log(info)


// type person = {
//     firstName: string,
//     lastName: string
// }

// let sarika:person={
    
//     firstName:"sarika",
//     lastName:"kokane"
// }
// console.log(sarika)

// let seema:person={
//     firstName:"seema",
//     lastName:"kadlag"
// }
// console.log(seema)


// let rutuja:person={
//     firstName:"rutuja",
//     lastName:"kadlag"
// }
// console.log(rutuja)



// interface person{
//     firstName:string,
//     lastName:string
// }

// let roshan:person={
//     firstName:"roshan",
//     lastName:"ghule"
// }
// console.log(roshan)



//union //at a time use multile datatype | 

// let aa:string|boolean|number
// aa="sarika"
// aa=66
// aa=true
// console.log(aa)

// function add(code:string|number){
//     console.log(`My address is ${code}`)
// }

// add("Mumbai ")
// add(90)


// function sum(xxx: number | string, yyy: number | string) {
//     console.log(1+8)
// }




//function
//return type
//without type

function addition():void{
    console.log(6+9)
}
addition()



function add():string{
    return "sarika"
}
console.log(add())



function add2():boolean{
    return true
}
console.log(add2())



function add3():number{
    return 90
}
console.log(add3())


// interface person{
//     firstName:string,
//     lastNmae:string
// }
//  let bhumi:person={
//     firstName:"bhumi",
//     lastNmae:"kokane"
//  }
//  console.log(bhumi)


 type person={
    firstName:string,
    lastName:string
 }

 let bhumi : person={
    firstName:"bhumi",
    lastName:"kokane"
 }
 console.log(bhumi)

 let roshan:person={
    firstName:"roshan",
    lastName:"ghule"
 }
 console.log(roshan)