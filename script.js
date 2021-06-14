
// завдання1


let propsCount = (CurrentObject) => {
    return Object.keys(CurrentObject).length
}
console.log(propsCount(CurrentObject = {
    
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 


}))


// завдання 2
let object = {
   name:"Nazar",
   surname:"Khmil",
   age:17,
   direction:"student",
   group:"Js"

}
function showProps(obj){
    let keys = [];
    let props = [];
    for (i in obj) {
        keys.push(i);
        props.push(obj[i]);
    };
    console.log('Keys in object: ');
    console.log(keys);
    console.log('Props in object: ')
    console.log(props);

}

showProps(object);





// завдання 3

дуеworker = new Worker('Назар', 'Хміль', 10, 31);

console.log(worker.getRate()); 
console.log(worker.getDays()); 
console.log(worker.getSalary()); 


worker.setRate(20); 
worker.setDays(10);
console.log(worker.getSalary()); 




// завдання4
function Person(first, last, age, gender, interests) {
    this.name = {
      first : first,
      last: last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
      alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
      alert('Hi! I\'m ' + this.name.first + '.');
    };
  };

















