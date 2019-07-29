const faker = require('faker');
const fs = require('fs');
const helper = require('./seedHelper.js');

const writer = fs.createWriteStream('../csv/description.csv');

const randomBoolean = (percentTrue) => {
  return Math.floor(Math.random() * 100) + 1 <= percentTrue;
}

const generateDescription = (listingId) => {

  const title = faker.lorem.sentence();
  const location = faker.address.city();
  const roomType = faker.random.arrayElement(['Entire place','Private room','Hotel room','Shared room']);
  const { bedroomNum, bathroomNum, bedTypes, bedNum, guestmaxNum } = helper.getRandomRoomInfo(roomType);
  const roomHL = helper.getRoomHighlight(roomType, bedroomNum, bathroomNum, bedNum, guestmaxNum);
  const locationHL = `90% of recent guests gave the location a 5-star rating`;
  const ownerHL = `"Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests."`;
  const cleanHL = `${Math.floor(Math.random() * 5) + 11} recent guests said this place was sparkling clean.`;
  
  let result = ''
  for (let i = 1; i < 14; i++) {
    if (i  ===  1) { // title
      result += `${listingId},${i},${title}\n`
    } else if (i === 2) {
      result += `${listingId},${i},${location}\n`
    } else if (i === 3) {
      result += `${listingId},${i},${bedroomNum}\n`
    } else if (i === 4) {
      result += `${listingId},${i},${bathroomNum}\n`
    } else if (i === 5) {
      result += `${listingId},${i},${bedTypes}\n`
    } else if (i === 6) {
      result += `${listingId},${i},${bedNum}\n`
    } else if (i === 7) {
      result += `${listingId},${i},${guestmaxNum}\n`
    } else if (i === 8) {
      result += `${listingId},${i},${roomType}\n`
    } else if (i === 9) {
      if (randomBoolean(100)) {
        result += `${listingId},${i},${roomHL}\n`
      }
    } else if (i === 10) {
      if (randomBoolean(70)) {
        result += `${listingId},${i},${locationHL}\n`
      }
    } else if (i === 11) {
      if (randomBoolean(70)) {
        result += `${listingId},${i},${ownerHL}\n`
      }
    } else if (i === 12) {
      if (randomBoolean(70)) {
        result += `${listingId},${i},${cleanHL}\n`
      }
    } else if (i === 13) {
      result += `${listingId},${i},${helper.generateLicenseOrRegistartionNumber()}\n`
    } else if (i >= 14 && i <= 118) {
      if (randomBoolean(50)) {
        result += `${listingId},${i},${faker.lorem.paragraph(5)}\n`
      }
    }
  }

  return result;
}

const seedDescription = (callback) => {
  let i = 10000000;
  writer.write(`listingId,itemId,itemInfo\n`);
  const write = () => {
    let ok = true;
    do {
      let data = generateDescription(i);
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

seedDescription(() => {
  console.log('CSV successfully created');
  writer.end();
});