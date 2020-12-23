const {dataInfo} = require('./person');

const Person = function(name,surname,birthYear,height, driversLicence){
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.height = height;
    this.driversLicence = driversLicence;
    }

const student = new Person('Martin', 'Kovacevic', 1990, 180, false);
console.log(student);
let studentJSON = JSON.stringify(student);

//console.log(studentJSON);
//let student1 = JSON.parse(studentJSON);
//console.log(student1);

const informations = dataInfo(studentJSON);
console.log(informations);
for (i=0;i<informations[0].length;i++){
    console.log(`Students' ${informations[0][i]} is ${informations[1][i]}`);
}
