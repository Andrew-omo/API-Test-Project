const faker = require('faker');


export const createUsers = {
    email:`testemail-${Math.floor(Math.random() * 999)}@yahoo.com`,
    name:faker.name.findName(),
    gender:"male",
    status:"active",  
};

export const updateUsers = {
    email:`testemail-${Math.floor(Math.random() * 999)}@yahoo.com`,
    gender:"female",
    
};

export const patchUsers = {
    name:faker.name.findName(),
    status:"inactive",
    
};

export const invalidUserInputData =  {

data: {
    name: 'Inez Larkin I',
    email: 'testemail-647@yahoo.com',
    gender: 'male',
    status: 'active'
  }
    

};