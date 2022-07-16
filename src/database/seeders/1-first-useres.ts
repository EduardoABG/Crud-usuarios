import { QueryInterface } from "sequelize";
import { faker } from "@faker-js/faker";
export default {
  up: (queryInterface: QueryInterface) => {
    let user = [
      ...Array(1000).map((i) => ({
        nome: faker.name.firstName(),
        email: faker.internet.email(
          faker.name.firstName(),
          faker.name.lastName()
        ),
        senha: faker.internet.password(),
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    ];

    return queryInterface.bulkInsert("users", user);
  },
  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete("users", {});
  },
};
