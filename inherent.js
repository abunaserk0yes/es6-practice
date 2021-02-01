class Parent{
    constructor(){
        this.fathersName="williamson";
    }
}

class Child extends Parent{
    constructor(isName){
        super();
        this.name=isName;
    }
    addingName(){
        return this.fathersName+" "+this.name;
    }
}

const firstName=new Child("peterson");
const secondName=new Child("mark");
console.log(firstName.addingName());
console.log(secondName.addingName());