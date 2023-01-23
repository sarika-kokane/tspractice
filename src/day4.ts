
///class =>acces modifier
// class student{
//     fullName:string
//     rollNo:number
//     constructor(fn:string,rn:number){
//         this.fullName=fn
//         this.rollNo=rn
//     }
//     display(): string {
//         return this.fullName
//     }
// }

// let saru:student=new student("sarika",788)
// console.log(saru)




////=========================================================================================


// class students{
//     private fullName:string
//     public rollNumber:number
//     public constructor(fn:string,rn:number){
//         this.fullName=fn
//         this.rollNumber=rn
//     }
//     getNAme():string{
//         console.log(this.fullName)
//         return this.fullName
//     }
// }

// let ravi:students=new students("ravikant",97876)
// console.log(ravi.rollNumber)
// console.log(ravi.getNAme())



//=====================================================================================


// class studentss{
//     private fullName:string
//     public rollno:number
//     public constructor(fn:string,rn:number){
//         this.fullName=fn
//         this.rollno=rn

//     }
//     public getName():string{
//         this.info()
//         console.log(this.fullName)
//         return this.fullName

//     }
//     private info():void{
//         console.log(`My name is ${this.fullName} & my roll number is ${this.rollno}`)
//     }

//     }

//     let ashis=new studentss("Ashis ",90)
//     let a23=ashis.getName()
//     console.log(a23)









// class studentss {
//     private fullName: string
//     public rollNo: number
//     public constructor(fn: string, rn: number) {
//         this.fullName = fn
//         this.rollNo = rn
//     }
//     public getName(): string {
//         this.info()
//         console.log(this.fullName)
//         return this.fullName
//     }
//     private info(): void {
//         console.log(`My name is ${this.fullName} my roll number is ${this.rollNo}`)
//     }
// }

// let ashu = new studentss("ashis", 900)
// let a234 = ashu.getName()
// console.log(a234)





//=========================================================




// class greet{
//     private name:string
//     public constructor(fn:string){
//         this.name=fn
//     }
// }

// let greeting =new greet("maya")


//OR    

// class greet{
//     public constructor(private fn:string){}
// }
// let greeting=new greet("usha")



////=============================================================

//  updated values program

// class student{
//     private fullName:string
//     public constructor(fn:string){
//         this.fullName=fn
//     }
//     public setName(name:string){
//         console.log(this.fullName)
//         return this.fullName=name
//     }
// }
// let vinu=new student("vinayak")
// let newName=vinu.setName("Ruhi")
// console.log(newName)


///==============================================================

//Rad only not updated

// class student{
//     private readonly fullName:string
//     public constructor(fn:string){
//         this.fullName=fn
//     }
//     getName():string{
//         return this.fullName
//     }
// }

// let abc=new student("Abhigya")
// console.log(abc)




