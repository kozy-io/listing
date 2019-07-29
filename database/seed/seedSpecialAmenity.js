const faker = require('faker');
const fs = require('fs');

const writer = fs.createWriteStream('../csv/specialAmenity.csv');

const randomBoolean = (percentTrue) => {
  return Math.floor(Math.random() * 100) + 1 <= percentTrue;
}

const generateSpecialAmenity = (listingId) => {

  let result = ''
  for (let j = 1; j < 18; j++) {
    if (randomBoolean(40)) {
      result += `${listingId},${j},${faker.lorem.sentence()}\n`
    }
  }

  return result;
}

const seedSpecialAmenity = (callback) => {
  let i = 10000000;
  writer.write(`listingId,itemId,itemInfo\n`);
  const write = () => {
    let ok = true;
    do {
      let data = generateSpecialAmenity(i);
      if (i % 100000 === 0) {
        console.log(i);
      }
      i--;
      if (i === 0) {
        writer.write(data, callback);
      } else {
        ok = writer.write(data);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

seedSpecialAmenity(() => {
  console.log('CSV successfully created');
  writer.end();
});