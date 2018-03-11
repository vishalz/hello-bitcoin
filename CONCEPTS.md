##  JavaScript Fake Class 
1. A class in a Object Oriented Language (such as Java) is a template used to create Objects
1. Objects in Java can not be created without declaring a class 
1. This is because Java is a strongly typed language and all variables (including objects) have to have a type 
1. JavaScript is not a strongly typed langauge so objects can be declared and a created w/o a class. 
1. JavaScript does not need or have any way to create a Class
1. ECMA is a organization that develops JavaScript spec. Their goal is to make every developer in the world use JavaScript to write code.
1. ECMA very desparately wanted to get Java developers to use JavaScript
1. ECMA was convinced that Java developers are lazy and will not spend the time to learn functional programming concepts.
1. They hatched an evil scheme and introduced a keyword "class" in ES6 to lure Java developers.  
1. ES6 class keyword is syntatic sugar that fakes a Java developer into thinking that he is creating objects using Java type class and thus prevents 
1. You can create a JavaScript object using a fake class  in JavaScript 
    1. Step 1 Declare the class using class keyword. Make sure that first letter of the class is CAPITALIZED
    1. Step 2 Add a constructor method to the class
    1. Step 3 Declare and initialize properties of the object in the constructor using "this" keyword
    1. Step 4 Add other methods  the class
    1. Step 5 Instantiate (fancy word for Create) an Object from the class using "new" keyword
```
class Student{                         // Step 2 Declare fake class Notice the capital S in Student

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


}                                      // end of class Student


let ryan = new Student("Ryan","8");    // Step 5 Instantiate object with new keyword
console.log (ryan.name);               // Prints "Ryan"
console.log (ryan.grade);              // Prints 8
ryan.setTeacher("Mrs Simpson");
console.log (ryan.teacher)             // Prints Mrs Simpson

ryan.teacher = "Mrs Griffin";          // All variables of the fake class  are public can be accessed with . notation
console.log (ryan.teacher)             // Prints Mrs Griffin

```

## Static Methods 

1. The static keyword defines a static method for a class. 
1. Static methods are called without instantiating their class and cannot be called through a class instance. 
1. Static methods are often used to create utility functions for an application

```
class MyClass{

constructor(grade, room, teacher){
this.grade   = grade;
this.room    = room;
this.teacher = teacher;
}


static findRoom(grade){                   // Declare a static method
  let rooms = {
    '6': 'Toronto',
    '7' : 'Tokyo' ,
    '8' : 'Milton'
  };

  return rooms[grade];

}                                         // end of findroom

static findTeacher(grade){                // Declare another static method
  let teachers = {
    '6' : 'Mrs Smith' ,
    '7' : 'Mrs Jones' ,
    '8' : 'Mrs Brown'
  };
  return teachers[grade];

}                                         // end of findTeacher

toString(){                               // Declare a regular method
  return ` Class -
    Grade   = ${this.grade}
    Room    = ${this.room}
    Teacher = ${this.teacher}
  `;
}                                         // end of toString method

}                                         // end of class Class MyClass

let room = MyClass.findRoom('6');         // Call a static method of class MyClass.
console.log (room)                        // Prints Toronto

let teacher = MyClass.findTeacher('6');   // Call a static method of class MyClass
console.log (teacher);                    // Prints Mrs Smith

let grade6 = new MyClass(8,room,teacher); //Instantiate a object of type MyClass
console.log (grade6.room);                //Prints Toronto
console.log (grade6.toString());

console.log (grade6.findTeacher('6'));    //Static methods can't be called on objects returns TypeError


```



