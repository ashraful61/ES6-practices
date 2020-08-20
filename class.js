
class Student{
    constructor(sId, sName){
        this.id = sId
        this.name = sName
        this.school = "Chakrajapur High School"
    }
}

const student1 = new Student(2,'ashraf')
const student2 = new Student(7, 'Islam')
console.log(student1, student2)//Student { id: 2, name: 'ashraf', school: 'Chakrajapur High School' } Student { id: 7, name: 'Islam', school: 'Chakrajapur High School' }
console.log(student1.name, student2.name)//ashraf Islam

class Parent {
    constructor(){
        this.fatherName = "Ashraful Islam"
    }
}

class Child extends Parent {
    constructor(name){
        super()
        this.name = name
    }
    getFullName(){
        return this.name +" bin "+ this.fatherName
    }
    
}

const baby = new Child("Muhammad Ibrahim")
const baby2 = new Child("Hamim")
console.log(baby)
console.log(baby2)
console.log(baby.getFullName())