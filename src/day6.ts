
//program 1
interface worldBank {
    loan(): number
    save(): number
}



class SBIBank implements worldBank {
    loan(): number {
        return 20
    }
    save(): number {
        return 10
    }

    branchNAme(): string {
        return "kharadi"
    }
}
let kharadi = new SBIBank
kharadi.branchNAme()
kharadi.loan()
kharadi.save()



//program 2 two interface with 2 class some one using both interface and some one use only one

interface student{
    subject():string
}


interface teacher{
    salary():number
}


class sushant implements student{
    subject():string{
        return "Math"
    }

    stdName():string{
        return "sushant"
    }
}


class mayateacher implements teacher,student{
    salary(): number {
        return 30
    }

    subject(): string {
        return "English"
    }

    teacherName():string{
        return "maya"
    }
}

let maya=new mayateacher()
maya.salary()
maya.subject()
maya.teacherName()

let sushant1=new sushant()
sushant1.stdName()
sushant1.subject()





//program 3

interface teacherr {
    result(): number
}


class studentt implements teacherr {
    result(): number {
        return 50
    }
    stddName(): string {
        return "Mihir"
    }
}

class mother extends studentt {
    mthrName(): string {
        return "Urmi"
    }

    fathrName():string{
        return "Ninad"
    }
}

let vijaya= new mother()
vijaya.fathrName()
vijaya.mthrName()
vijaya.result()
vijaya.stddName()




//program 4

interface worldBanka{
    getCode():number
}

class PNB implements worldBanka{
    getCode(): number {
        return 1000
    }
}

class RBL extends PNB{
    loan():number{
        return 30
    }
    save():number{
        return 40
    }
    getCode(): number {
        super.getCode()
        return 30000
    }
}

let rbl=new RBL()
console.log(rbl.getCode)
rbl.getCode()
rbl.loan()
rbl.save()
