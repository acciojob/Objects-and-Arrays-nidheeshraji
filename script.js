const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
// Create reference to players array
const team = players;

// Create copy of players array
const team1 = [...players];

// Create copy of person object
const cap1 = { ...person };

// Print the variables
console.log('Team:', team);
console.log('Team1:', team1);
console.log('Cap1:', cap1);


window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
