/*
 * to run all tests in this section  use 
 *  npm test myclass
 *
 * @todo create a mdoule call MyClass in file ./lib/myclass.js 
 * The module MyClass  declares and returns a  fake ES6 class that models a class of students 
 *
 * MyClass has a constrcutor that takes three parameters 
 * 1. grade - this the the grade e.g '6' 
 * 2. room - this is the name of the class room e.g. 'grade8 class room'
 * 3. teacher - this the name of the teacher of the class e.g. 'Mrs Doubtfire'
 *
 * MyClass  has following Static methods 
 * 1. findRoom(grade)
 * 2. findTeacher(grade) 
 *
 * MyClass  has following Public  methods 
 * 3. getTeacher() - returns the name of the teacher of this object
 * 4. setTeacher(teacher) - sets the name of the teacher of this  object
 *
 * findRoom(grade)
 * findRoom('6') returns 'Toronto'
 * findRoom('7') returns 'Tokyo'
 * findRoom('8') returns 'Milton'
 *
 * findTeacher(grade)
 * findTeacher('6') returns 'Mrs Smith'
 * findTeacher('7') returns 'Mrs Jones'
 * findTeacher('8') returns 'Mrs Brown'
 *
 *
 *
*/


// ******** Don't edit above this line *********************** 



class MyClass{


constructor(grade, room, teacher){
  this.grade   = grade;
  this.room    = room;
  this.teacher = teacher;
}


static findRoom(grade){            // Declare a static method
  let rooms = {
    '6': 'Toronto',
    '7' : 'Tokyo' ,
    '8' : 'Milton'
  };

  return rooms[grade];

}                                  // end of findroom

static findTeacher(grade){         // Declare another static method
  let teachers = {
    '6' : 'Mrs Smith' ,
    '7' : 'Mrs Jones' ,
    '8' : 'Mrs Brown'
  };
  return teachers[grade];

}                                  // end of findTeacher

getTeacher(){
  return this.teacher;

}                                  // end of getTeacher

setTeacher(teacher){
  this.teacher = teacher
}                                  // end of setTeacher


toString(){                        // Declare a regular method
  return ` Class -
    Grade   = ${this.grade}
    Room    = ${this.room}
    Teacher = ${this.teacher}
  `;
}                                  // end of toString method

}                                  // end of class Class MyClass

module.exports = MyClass

// ******** Don't edit below this line *********************** 



