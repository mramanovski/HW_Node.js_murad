/* 
const dataInfo = function(person){

    var dataArray = [person.name, person.surname, person.birthYear, person.gender, person.driversLicence];
    
    return dataArray
} */

const dataInfo = function(personJSON){
    var person = JSON.parse(personJSON);
    var dataArray = [Object.keys(person), Object.values(person)];
    return dataArray
}

module.exports = {dataInfo}