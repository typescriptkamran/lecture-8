// intersection types

interface Student {
    studentId: number;
    name: string;
  }
    
interface Teacher {
    teacherId: number;
    teacherName: string;
}
    
type int = Student & Teacher;
    
let obj1: int = {
    studentId: 344232,
    name: "Ali Phull",
    teacherId: 786,
    teacherName: "Jahanzaib Tayeb",
};

console.log(`${obj1.name}, role number: ${obj1.studentId}, is a student in class of sir ${obj1.teacherName}`);


  