"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myBook = {
    author: {
        firstName: "Zia",
        lastName: "Khan"
    },
    name: "TypeScript Insights",
};
console.log(`I just read a book ${myBook.name}, which is written by Sir ${myBook.author.firstName} ${myBook.author.lastName}.`);
const person = {
    name: 'Muhammad Kamran',
    address: {
        country: 'Pakistan',
        city: 'Lahore',
    },
};
console.log(`My name is ${person.name}, I live in ${person.address.city}, ${person.address.country}.`);
