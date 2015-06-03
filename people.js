module.exports={
  removeBad: function(people){
    return(people.filter(function (person){
        return person.name!=="B";
    }))
  },

  ageSome: function(people){
    return(people.filter(function (person){
        return person.name!=="B";
    }).filter(function( person){return person.age}).reduce(function(init, age){
        return init+age.age;
    }, 0))
  },
  ageAll:function(people){
    return (people.filter(function(person){return person.age}).reduce(function(init, age){
        return init+age.age;
    }, 0))
  }
}


// var people = [{name:'A', age: 20}, {name:'B', age: 30}, {}, {name:'', age: 10}];
// var remove=people.filter(function (person){
//     return person.name!=="B";
// });
//
//
// var ageSome=remove.filter(function( person){return person.age}).reduce(function(init, age){
//     return init+age.age;
// }, 0)
//
// console.log(ageSome);
//
// var ageAll=people.filter(function( person){return person.age}).reduce(function(init, age){
//     return init+age.age;
// }, 0)
// console.log(ageAll);
