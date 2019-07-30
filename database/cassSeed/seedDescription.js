const faker = require('faker');
const fs = require('fs');
const helper = require('./seedHelper.js');

const writer = fs.createWriteStream('../cassCSV/description.csv');

const randomBoolean = (percentTrue) => {
  return Math.floor(Math.random() * 100) + 1 <= percentTrue;
}

const generateDescription = (listingId) => {
  const descriptionItem = ['Title', 'Location', 'Bedroom Number', 'Bathroom Number', 'Bed Types', 'Bed Number', 'Guest Number', 'Room Type', 'Room Highlight', 'Location Highlight', 'Owner Highlight', 'Clean Highlight', 'License Or Registartion Number', 'General', 'Guest Access', 'Interation With Guests', 'The Space', 'Other Things To Note'];

  const userName = faker.name.firstName();
  const userPic = faker.image.avatar();

  const title = faker.lorem.sentence();
  const location = faker.address.city();
  const roomType = faker.random.arrayElement(['Entire place','Private room','Hotel room','Shared room']);
  const { bedroomNum, bathroomNum, bedTypes, bedNum, guestmaxNum } = helper.getRandomRoomInfo(roomType);
  const roomHL = helper.getRoomHighlight(roomType, bedroomNum, bathroomNum, bedNum, guestmaxNum);
  const locationHL = `90% of recent guests gave the location a 5-star rating`;
  const ownerHL = `"Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests."`;
  const cleanHL = `${Math.floor(Math.random() * 5) + 11} recent guests said this place was sparkling clean.`;
  
  let result = ''
  for (let i = 0; i < descriptionItem.length; i++) {
    if (i  ===  0) { // title
      result += `${listingId},${userName},${userPic},${descriptionItem[i]},${title}\n`
    } else if (i === 1) {
      result += `${listingId},${userName},${userPic},${descriptionItem[i]},${location}\n`
    } else if (i === 2) {
      result += `${listingId},${userName},${userPic},${descriptionItem[i]},${bedroomNum}\n`
    } else if (i === 3) {
      result += `${listingId},${userName},${userPic},${descriptionItem[i]},${bathroomNum}\n`
    } else if (i === 4) {
      result += `${listingId},${userName},${userPic},${descriptionItem[i]},${bedTypes}\n`
    } else if (i === 5) {
      result += `${listingId},${userName},${userPic},${descriptionItem[i]},${bedNum}\n`
    } else if (i === 6) {
      result += `${listingId},${userName},${userPic},${descriptionItem[i]},${guestmaxNum}\n`
    } else if (i === 7) {
      result += `${listingId},${userName},${userPic},${descriptionItem[i]},${roomType}\n`
    } else if (i === 8) {
      if (randomBoolean(100)) {
        result += `${listingId},${userName},${userPic},${descriptionItem[i]},${roomHL}\n`
      }
    } else if (i === 9) {
      if (randomBoolean(70)) {
        result += `${listingId},${userName},${userPic},${descriptionItem[i]},${locationHL}\n`
      }
    } else if (i === 10) {
      if (randomBoolean(70)) {
        result += `${listingId},${userName},${userPic},${descriptionItem[i]},${ownerHL}\n`
      }
    } else if (i === 11) {
      if (randomBoolean(70)) {
        result += `${listingId},${userName},${userPic},${descriptionItem[i]},${cleanHL}\n`
      }
    } else if (i === 12) {
      result += `${listingId},${userName},${userPic},${descriptionItem[i]},${helper.generateLicenseOrRegistartionNumber()}\n`
    } else if (i >= 13 && i <= 17) {
      if (randomBoolean(50)) {
        result += `${listingId},${userName},${userPic},${descriptionItem[i]},${faker.lorem.paragraph(5)}\n`
      }
    }
  }

  return result;
}

const seedDescription = (callback) => {
  let i = 10000000;
  writer.write(`listingId,userName,userPic,descItem,descItemInfo\n`);
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