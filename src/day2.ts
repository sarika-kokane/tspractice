
// string

// let aa:string="Sarika"
// console.log(aa)

// aa=400 //not accepted number value because its string


//  let bb:number
// bb=200
// console.log(bb)

// bb=false//Type 'boolean' is not assignable to type 'number'

// let ruhi:boolean=true
// console.log(ruhi)

// rhu="we"///Type 'string' is not assignable to type 'boolean'

// let isDoingJob: boolean = false



//==========================

///======function

// function add(aaa: number, bbb: number): number {
//     return aaa + bbb
// }

// let xx=add(40,50)
// console.log(xx)


// function add(aaaa:number,bbbb:number):void{
//     console.log(aaaa+bbbb)
// }

// add(25,89)



// let student=["sarika","seema","rutuja","arti"]
// let student:string[]

// let student:string[]=["sarika","seema","rutuja","arti"]
// student.push("lalita")
// student.push(100)//Argument of type 'number' is not assignable to parameter of type 'string'
// console.log(student)


//let student:Array<string>=['roshan','vishal','pravin','tushar']
// student.forEach((el:string)=>{
//     console.log(el.length)
// })




let names:string[]=[]
names=["sarika","ghule","kokane"]
names.forEach(function(el){
    console.log(el.toUpperCase())
   
})





///touple=>  array of fixed length

// let xy:[number,number,number]
// xy=[23,56,89,]
// xy.push(90)
// console.log(xy)


// oraganization

// tester,
// sr_tester,
// programmer,
// sr_programmer,
// projectmanager

// if(sr_tester){
//     console.log('start testing')
// }



// enum role{
//     tester,
//     sr_tester,
//     programmer,
//     sr_programmer,
//     projectmanager
// }
// if(role.sr_programmer){
//     console.log('start programming')
// }


