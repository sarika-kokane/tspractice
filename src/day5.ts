class person1 {
    firstName1: string
    age: number
    constructor(fn: string, ag: number) {
        this.firstName1 = fn
        this.age = ag
    }
}
let subhash = new person1("subha", 24)
console.log(subhash)



class kailas {
    fName: string
    rollNo: number
    constructor(fn: string, rn: number) {
        this.fName = fn
        this.rollNo = rn
    }
    display() {
        return this.fName
        console.log(this.fName)
    }

}

let abc = new kailas("kailas", 33)
console.log(abc)
console.log(abc.display())


///========================================================
/// private 

class aprurva {
    private firsttName: string
    public constructor(fn: string) {
        this.firsttName = fn
    }
    getName(): string {
        return this.firsttName
    }
}
let apurva = new aprurva("apurva")
console.log(apurva)
console.log(apurva.getName())






class roshann {
    private fstname: string
    public rno: number
    constructor(fn: string, rn: number) {
        this.fstname = fn
        this.rno = rn
    }
    public getName() {
        return this.fstname
        console.log(this.fstname)
    }
    
}

let rosha = new roshann("roshann", 73)
console.log(rosha)
console.log(rosha.getName())

























