// enum
/*
enum post{

    programmer,
    sr_programmer,
    tester,
    sr_tester
}
if(post.programmer){
    console.log("start programming")
}

//tuppl = array of fixed legnth

let ab:[number,number,number,number]
ab=[10,20,30,40]
ab.push(50)
console.log(ab)

*/







//==============================================================================================

// interface -- completion abtraction 

interface worlBank1{
    save():number
    loan():number
}

class maharshtrBank implements worlBank1{
    save(): number {
        return 20
    }
    loan(): number {
        return 30
    }
    displayBranchName():string{
        return "Hadpsar"
    }
}

let vaishu = new maharshtrBank()
vaishu.displayBranchName()
vaishu.loan()
vaishu.save()


interface Principle{
    noofTeacher():number
    studentsNo():number
    noSubjects():number
}

interface Teacher{
    subject():string
   
}

interface student1{
    subject():string
    standard():number
}

class abhiii implements Principle,Teacher,student1{

    noofTeacher(): number {
        return 7
    }
    studentsNo(): number {
        return 9
    }
    noSubjects(): number {
        return 10
    }
    subject(): string {
        return "Html"
    }
    standard(): number {
        return 12
    }
 displayName():string{
    return "Piyush"
 }
}

let piyush= new abhiii()
piyush.noSubjects()
piyush.noofTeacher()
piyush.standard()
piyush.studentsNo()
piyush.subject()
piyush.displayName()
console.log(piyush)

class abhira implements Principle,Teacher{
    noofTeacher(): number {
        return 5
    }
    noSubjects(): number {
        return 7
    }
    studentsNo(): number {
        return 15
    }
    subject(): string {
        return "Sankrit"
    }
    displayName():string{
        return "Pravesh"
    }
}

let pravesh=new abhira()
pravesh.noSubjects()
pravesh.noofTeacher()
pravesh.studentsNo()
pravesh.subject()
pravesh.displayName()
console.log(pravesh)