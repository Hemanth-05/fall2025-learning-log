// const nums = [10, 20, 37, 12, 202];

// for(let i of nums){
//     console.log(i);
//     i++;
//     console.log(`After increment: ${i}`);
// }

let people = [{name: "A", age: 23}, {name: "B", age: 43}];

for (let person of people) {
  person.name = "Bond"; // modifies the object itself
}

console.log(people);
// [ { name: "Changed" }, { name: "Changed" } ]
