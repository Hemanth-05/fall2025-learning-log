const villan = {
    name: "Rindosoras",
    parents: {mother: "Martha Rind", father: "Dino Soras"},
    superPowers: ["Blows Fire", "Super Strength", "Super Speed"],
    weakness: "water",
    'born year': 5355,
    getFatherName: function(){
        return(`Father Name is ${this.parents.father}`);
    }
};


console.log(villan.getFatherName());    // using dot method to access the method inside villan object
console.log(villan["name"]);    // If we are using square brackets, then we should use quotes or double quotes around the key
console.log("name" in villan);  // To check if the key exists in the object or not
console.log("friend" in villan);    // Right now it will return false cuz there is no key named 'friend' in villan
villan.friend = "Nochuki";  // Adding the new key friend
console.log("friend" in villan);    // Now it returns true cuz friend is now a key in villan object
console.log(villan.hasOwnProperty("superPowers"));  // hasOwnProperty method works similar to 'in'. We can use either
console.log(Object.keys(villan));   // Returns all the keys in the object named villan
villan.native = "Rimbon";

function theSentence(him){
    console.log(`His name is ${him.name} and he is from ${him.native} and he has the following super powers ${him.superPowers.join(" and ")}`);
}

theSentence(villan);

villan.recentEvent = function(){
    return(`In a recent meteor, unfortunately ${this.name}'s friend ${this.friend} became a casuality. Until now ${this.name} thought his only weakness was ${this.weakness} but he now realised his friend was both his strength and weakness` );
}

console.log(villan.recentEvent());

delete villan.friend;

console.log("friend" in villan);

villan.friend = "Nochukiiii";

villan.comeback = function(){
    return (`Turns out ${this.friend} actually escaped from the meteor shower and changed his name and came back when ${this.name} needed him the most. ${this.name} got flodded with emotions as he saw his dear friend ${villan.friend} and hugged him`)
}

console.log(villan.comeback());
console.log("friend" in villan);