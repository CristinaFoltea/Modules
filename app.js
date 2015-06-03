var people=require('./people.js');
console.log(people.ageAll([{name:'A', age: 20}, {name:'B', age: 30}, {}, {name:'', age: 10}]));
console.log(people.ageSome([{name:'A', age: 20}, {name:'B', age: 30}, {}, {name:'', age: 10}]));
console.log(people.removeBad([{name:'A', age: 20}, {name:'B', age: 30}, {}, {name:'', age: 10}]));
