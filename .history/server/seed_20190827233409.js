const fs = require('fs');
const path = require('path');
const faker = require('faker');
const md5 = require('md5');

function createBadges(limit = 5) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const Name = faker.name.Name();
    const Departamento = faker.name.Departamento();
    const Email = faker.internet.email();

    result.push({
      id: faker.random.uuid(),
      Name,
      lastName,
      email,
      jobTitle: faker.name.jobTitle(),
      twitter: `${firstName}${lastName}${faker.address.zipCode()}`,
      avatarUrl: `https://www.gravatar.com/avatar/${md5(email)}?d=identicon`,
    });
  }

  return result;
}

function main() {
  const data = {
    badges: createBadges(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, 'db.json'),
    JSON.stringify(data, null, 4)
  );
}

main();
