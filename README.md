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

## TypeScript Code Explanation

This code snippet showcases TypeScript code that demonstrates the usage of classes and inheritance.

### Class Definitions

Two classes are defined in the code:

1. `Person` class:
   - This is the base class that represents a generic person.
   - It has two properties: `name` (a string) and `age` (a number).
   - The constructor initializes these properties when a new `Person` object is created.

2. `Student` class:
   - This is a derived class that inherits from the `Person` class using the `extends` keyword.
   - It adds an additional property `studentId` (a string) to represent a student's identification number.
   - The constructor takes parameters for `name`, `age`, and `studentId`, and it calls the base class constructor using `super()` to initialize the inherited properties.
   - It also has a method `study()` that simulates a student studying.

### Object Creation

Two objects are created from these classes:

1. `person1`:
   - An instance of the `Person` class is created with the name "John" and age 30.

2. `student1`:
   - An instance of the `Student` class is created with the name "Alice," age 20, and a student ID of "S12345."

### Method Calls

The code demonstrates method calls on these objects:

1. `person1.introduce()`:
   - Calls the `introduce()` method on the `person1` object, which logs an introduction message.

2. `student1.introduce()`:
   - Calls the `introduce()` method on the `student1` object, which logs an introduction message.
   
3. `student1.study()`:
   - Calls the `study()` method on the `student1` object, which logs a message simulating the student studying.

### Output

When executed, this code will produce the following output:

```
Hello, I'm John and I am 30 years old.
Hello, I'm Alice, I am 20 years old, and my student ID is S12345.
Alice is studying.
```

This demonstrates the use of classes and inheritance in TypeScript, where the `Student` class inherits properties and methods from the `Person` class and adds its own unique properties and methods.


I hope this explanation helps you understand the code! If you have any more questions or need further clarification, feel free to ask.






