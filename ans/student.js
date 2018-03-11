class Student{                         // Step 2 Declare fake class Notice the capital S

constructor(name,grade){               // Step 2 Constructor

  this.name              = name;       // Step 3 declare public variables(attributes) of the object
  this.grade             = grade;
  this.teacher           = undefined;
  this.email             = undefined;

}                                      // End of constructor

                                       // Step 4 Declare methods of the class
setTeacher(name){
  this.teacher           = name;
}

setEmail(email){
  this.email             = email;
}

static generateEmail(){       // Declare a Static method

}



}                                      // end of class Student


let ryan = new Student("Ryan","8");    // Step 5 Instantiate object with new keyword
console.log (ryan.name);               // Prints "Ryan"
console.log (ryan.grade);              // Prints 8
ryan.setTeacher("Mrs Simpson");
console.log (ryan.teacher)             // Prints Mrs Simpson

ryan.teacher = "Mrs Griffin";          // All variables of the fake class  are public can be accessed with . notation
console.log (ryan.teacher)             // Prints Mrs Griffin
