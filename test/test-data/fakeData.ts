import { faker } from '@faker-js/faker';

export const fakeData = {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    creditCardNumber: faker.finance.creditCardNumber(),
    adress: faker.address.street(),
    city: faker.address.cityName(),
    state: faker.address.state(),
    zip: faker.random.numeric(5),
    country: faker.address.country()
}
