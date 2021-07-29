// Import the fs module as an fs constant
const fs = require('fs');
// console.log(fs);

// Prepare the array
const genders = ['male', 'female'];
const maleNames = ['Jake', 'Jack', 'Harry', 'Jacob', 'George', 'James', 'William', 'Connor'];
const femaleNames = ['Aurora', 'Alice', 'Brooke', 'Charlotte', 'Elizabeth', 'Gabriella', 'Hannah', 'Jasmine'];
const lastNames = ['Smith', 'Jones', 'Taylor', 'Davies', 'Brown', 'Evans', 'Miller', 'Moore', 'Gagnon', 'Lee', 'Anderson', 'Young'];

// Create a function randChoice that takes one argument (arr) and returns a random element in the array arr
const randChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Create an empty array people 
const people = [];

// Prepare a loop that will work 20 times
for (let i = 0; i <= 20; i++) {
  const randomGender = randChoice(genders);
  const randomName = randomGender === 'female' ? randChoice(maleNames) : randChoice(femaleNames);
  const randomLastName = randChoice(lastNames);
  const randomAge = Math.floor(Math.random() * (78 - 18 + 1)) + 18;
  const randomPhone = `${Math.floor(Math.random() * (999999999 - 500000000 + 1))}`;
  const randomEmail = `${randomName}.${randomLastName}@gmail.com`;

  randomPerson = {
    gender: randomGender,
    firstName: randomName,
    lastName: randomLastName,
    age: randomAge,
    phone: randomPhone,
    email: randomEmail,
  }

  people.push(randomPerson);
};

// Convert the array to JSON format
const jsonPeople = JSON.stringify(people);
console.log('people:', people);

// Save the data in the people.json file
fs.writeFile('people.json', jsonPeople, (err) => {
  if (err) throw err && console.log('The file has been saved!');
  console.log('File has been successfully generated! Check people.json');
});