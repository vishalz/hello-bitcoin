const MyClass = require('../lib/myclass.js');

describe('Testing MyClass Static Methods' , ()=>{

  it('findRoom should return correct room',() => {
    expect(MyClass.findRoom('6')).toBe('Toronto');
    expect(MyClass.findRoom('7')).toBe('Tokyo');
    expect(MyClass.findRoom('8')).toBe('Milton');
  });

  it('findTeacher should return correct room',() => {
    expect(MyClass.findTeacher('6')).toBe('Mrs Smith');
    expect(MyClass.findTeacher('7')).toBe('Mrs Jones');
    expect(MyClass.findTeacher('8')).toBe('Mrs Brown');
  });

});

describe('Testing MyClass', ()=>{
  let grade6;
  let grade,room,teacher;

  beforeEach(()=>{
	  grade = '6';
	  room = MyClass.findRoom(grade);
	  teacher = MyClass.findTeacher(grade);
	  grade6  = new MyClass(grade,room,teacher);
	  
  });

	it('grade should be set to input value',()=>{
	  expect(grade6.grade).toBe(grade);
	});

	it('room should be set to input value',()=>{
	  expect(grade6.room).toBe(room);
	});

	it('teacher should be set to input value',()=>{
	  expect(grade6.teacher).toBe(teacher);
	});

});
