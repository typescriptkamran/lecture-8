type Author = {
    firstName: string;
    lastName: string;
};

type Book = {
    author: Author;
    name: string;
};

const myBook : Book = {
    author: {
        firstName: "Zia",
        lastName: "Khan"
    },
    name: "TypeScript Insights",
}

console.log(`I just read a book ${myBook.name}, which is written by Sir ${myBook.author.firstName} ${myBook.author.lastName}.`); 

// Example 2

interface Person {
    name: string;
    address: {
      country: string;
      city: string;
    };
  }
  
  const person: Person = {
    name: 'Muhammad Kamran',
    address: {
      country: 'Pakistan',
      city: 'Lahore',
    },
  };
  
console.log(`My name is ${person.name}, I live in ${person.address.city}, ${person.address.country}.`); 