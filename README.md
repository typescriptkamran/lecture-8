# Lecture 8

## Intersection Types in TypeScript

This code snippet demonstrates the use of intersection types in TypeScript. Intersection types allow you to combine multiple types into a single type.

### Interfaces

Two interfaces are defined:

1. `Student`: This interface represents the properties of a student, including `studentId` (a number) and `name` (a string).

2. `Teacher`: This interface represents the properties of a teacher, including `teacherId` (a number) and `teacherName` (a string).

### Intersection Type

An intersection type `int` is created by combining the `Student` and `Teacher` interfaces using the `&` operator. This means that a variable of type `int` will have properties from both `Student` and `Teacher`.

### Variable Initialization

A variable `obj1` of type `int` is declared and initialized with an object that includes properties from both `Student` and `Teacher`. This object represents a person who is both a student and a teacher.

```typescript
let obj1: int = {
    studentId: 344232,
    name: "Ali Phull",
    teacherId: 786,
    teacherName: "Jahanzaib Tayeb",
};
```

### Logging Information

The code then logs information about `obj1` to the console. It prints a message that includes the person's name, student ID, and the name of the teacher they are associated with.

```typescript
console.log(`${obj1.name}, role number: ${obj1.studentId}, is a student in the class of Sir ${obj1.teacherName}`);
```

When executed, this code will output a message like:

```
Ali Phull, role number: 344232, is a student in the class of Sir Jahanzaib Tayeb
```

This demonstrates how intersection types can be used to combine properties from multiple interfaces into a single type.
```



I hope this explanation helps you understand the code! If you have any more questions or need further clarification, feel free to ask.# lecture-8
