const faker = require('faker');
const randomNumber = Math.floor(Math.random() * 999);
const randomName = faker.name.findName();


export const createUsers = {
    email:`testemail-${randomNumber}@yahoo.com`,
    name:randomName,
    gender:"male",
    status:"active",  
};

export const updateUsers = {
    email:`testemail-${randomNumber}@yahoo.com`,
    gender:"female",
    
};

export const patchUsers = {
    name:randomName,
    status:"inactive",
    
};

export const invalidUserInputData =  {

data: {
    email: `testemail-${randomNumber}@yahoo.com`,
    name: randomName,
    gender: 'male',
    status: 'active'
  }
    

};