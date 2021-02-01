class Student{
    constructor(isID,isName,isSchool){
        this.id=isID;
        this.name=isName;
        this.school=isSchool;
        this.gradePoint="A+"
    }
}

const student=new Student(10,'k9yes','NRS');
const student1=new Student(15,"s4lim",'DSU');
const student2=new Student(30,"j0ny","RB");
console.log(student,student1,student2);