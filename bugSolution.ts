function greeter(person: string) {
  return "Hello, " + person;
}

function greeterArray(persons: string[]) {
  return persons.map(person => greeter(person));
}

let user = ["Jane Doe", "John Smith"];

console.log(greeterArray(user)); // Correct: Returns an array of greetings

//Alternative solution
for (const userElement of user) {
    console.log(greeter(userElement));
}