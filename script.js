/* Function constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
}

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = 
function(){
    console.log(2019 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
mark.calculateAge();
jane.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

// Additional Objects

var Breath = function(name, element, forms){
    this.name = name;
    this.element = element;
    this.forms = forms;
}

Breath.prototype.user = 'Tanjiro';

var water = new Breath('Breath of Water', 'Water', 11);
var sun = new Breath('Breath of Sun', 'Sun', 13);

console.log(water.user);
console.log(sun.user);
 */

// Object.create
var personProto = {
    calculateAge: function() {
        console.log(2019 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
})