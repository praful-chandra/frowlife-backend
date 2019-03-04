var faker = require('faker');
faker.locale = 'en_IND';
var randomName = faker.name.findName();
console.log(randomName);