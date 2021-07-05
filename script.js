// завдання 1
const mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development"
};


const propsCount = function (obj) {
  const keys = Object.keys(obj);
  return keys.length;

};
console.log(propsCount(mentor));

//завдання 2

const user = {
  name: "John",
  age: 30,
  height: 180,
  isMaried: false,
  job: "unemployed",


};

function showProps(object) {
  const keys = [];
  const values = [];
  for (let key in object) {
    keys.push(key);
    values.push(object[key]);
  }
  return [keys, values];
}
console.log(showProps(user));


// завдання 3

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    return this.name + " " + this.surname;
  }

}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  showFullName(midleName) {
    return this.surname + " " + this.name + " " + midleName;
  }

  showCourse() {
    const date = new Date();
    const course = date.getFullYear() - this.year;
    if (course >= 1 && course <= 6) {
      return course;
    } else {
      return console.log("Not a student");
    }

  }

}


let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());


// завдання 4

class Worker {

  constructor(fullName, dayRate, workinDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workinDays = workinDays;
  } 
  #expiriance = 1.2;


  set exp(value) {
    this.#expiriance = value;
  }
  get exp() {
    return this.#expiriance;
  }
  showSalary() {
    console.log(this.fullName + " salary: " + (this.dayRate * this.workinDays));

  }
  showSalaryWithExperience() {
    return this.dayRate * this.workinDays * this.#expiriance;

  }


}

const worker1 = new Worker("James Bond", 20, 23);

const worker2 = new Worker("Lionel Messi", 19, 31);
const worker3 = new Worker("Steven Gerrard", 42, 25);
const worker4 = new Worker("Andriy Yarmolenko", 40, 25);

function sort(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr;
}

const workers = [worker1, worker2, worker3, worker4];
let sortedSalary = [];

for (let i = 0; i < workers.length; i++) {
  sortedSalary.push(workers[i].showSalaryWithExperience());
  sort(sortedSalary);
}
for (let j = 0; j < sortedSalary.length; j++) {
  console.log(workers[j].fullName + " : " + sortedSalary[j]);
}




// завдання 5

class GeometricFigure {
  constructor() {}
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}
class Triangle extends GeometricFigure {
  constructor(a, b, c) {
    super();
    this.a = a;
    this.b = b;
    this.c = c;
  }
  getArea() {
    let p = (this.a + this.b + this.c) / 2;
    let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return Math.round(s);
  }
}

class Square extends GeometricFigure {
  constructor(a) {
    super();
    this.a = a;
  }
  getArea() {
    let s = (this.a ** 2);
    return s;
  }
}

class Circle extends GeometricFigure {
  constructor(r) {
    super();
    this.r = r;
  }
  getArea() {
    let s = Math.PI * (this.r ** 2);
    return s;
  }

}


const figures = [new Triangle(4, 5, 6), new Square(5), new Circle(6)];


function handleFigures(arr) {
  let totalArea = 0;
  for (let i = 0; i < figures.length; i++) {
    if (arr[i] instanceof(GeometricFigure)) {
      console.log(`Geometrick figure: ${arr[i].toString()} - area: ${arr[i].getArea()}`);
      totalArea += arr[i].getArea();
    }
  }
  return console.log(`Total area - ${totalArea}`);
}









