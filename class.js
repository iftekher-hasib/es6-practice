class student{
    constructor(sId, sName){
        this.id = sId;
        this.name= sName;
        this.school= "Kalim un Nessa"
    }

}

const student1 = new student (12, "shuvo");
const student2 = new student (33, "karim");
const student3 = new student (25, "bappi");

console.log(student1.id, student2.name, student3);