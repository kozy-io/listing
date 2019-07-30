const faker = require('faker');
const fs = require('fs');

const writer = fs.createWriteStream('../cassCsv/specialAmenity.csv');

const randomBoolean = (percentTrue) => {
  return Math.floor(Math.random() * 100) + 1 <= percentTrue;
}

const generateSpecialAmenity = (listingId) => {
  const specialAmenityItem = ['Breakfast', 'Coffee Maker', 'Refrigerator', 'Dishwasher', 'Oven', 'Private entrance', 'Private livingroom', 'Bed linens', 'Extra pillows and blankets', 'Hair dryer', 'Hangers', 'Lock on bedroom door', 'Shampoo', 'BBQ grill', 'Patio or balcony', 'Garden or backyard', 'First aid kit', 'Fire extinguisher', 'Carbon monoxide detector', 'Smoke detector', 'Elevator', 'Free Parking On Premises', 'Gym', 'Hot Tub', 'Pool', 'Bathtub', 'Babysitter Recommendations', 'Crib'];

  let result = ''
  for (let i = 1; i < specialAmenityItem.length; i++) {
    if (randomBoolean(40)) {
      if (i >= 0 && i <= 4) {
        result += `${listingId},Dining,${specialAmenityItem[i]},${faker.lorem.sentence()}\n`
      } else if (i >= 5 && i <= 6) {
        result += `${listingId},Guest Access,${specialAmenityItem[i]},${faker.lorem.sentence()}\n`
      } else if (i >= 7 && i <= 12) {
        result += `${listingId},Bed And Bath,${specialAmenityItem[i]},${faker.lorem.sentence()}\n`
      } else if (i >= 13 && i <= 15) {
        result += `${listingId},Outdoor,${specialAmenityItem[i]},${faker.lorem.sentence()}\n`
      } else if (i >= 16 && i <= 19) {
        result += `${listingId},Safety Features,${specialAmenityItem[i]},${faker.lorem.sentence()}\n`
      } else if (i >= 20 && i <= 24) {
        result += `${listingId},Facilities,${specialAmenityItem[i]},${faker.lorem.sentence()}\n`
      } else if (i >= 25 && i <= 27) {
        result += `${listingId},Family Features,${specialAmenityItem[i]},${faker.lorem.sentence()}\n`
      }
    }
  }
  return result;
}

const seedSpecialAmenity = (callback) => {
  let i = 100;
  writer.write(`listingId,category,itemId,itemInfo\n`);
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