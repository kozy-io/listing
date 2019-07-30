const fs = require('fs');

const writer = fs.createWriteStream('../cassCsv/basicAmenity.csv');

const randomBoolean = (percentTrue) => {
  return Math.floor(Math.random() * 100) + 1 <= percentTrue;
}

const generateBasicAmenity = (listingId) => {

  const amenityItem = ['Wifi', 'TV', 'Cable TV', 'Kitchen', 'Iron', 'Dryer', 'Washer', 'Hangers', 'Essentials', 'Laptop Friendly Workspace', 'Hot Water', 'Air Conditioning'];

  const wifi = 'Continuous access in the listing';
  const tv = 'Has TV';
  const cableTV = 'Has Cable TV';
  const kitchen = 'Space where guests can cook their own meals';
  const iron = 'Has Iron';
  const dryer = 'In the building - free or for a fee';
  const washer =  'In the building - free or for a fee';
  const hangers = 'Has Hangers';
  const essentials =  'Towels - bed sheets - soap - and toilet paper';
  const laptopFriendlyWorkspace =  'A table or desk with space for a laptop and a chair that’s comfortable to work in';
  const hotWater = 'Has Hot Water';
  const airConditioning =  'Air Conditioning';
  
  let result = ''
  for (let j = 0; j < amenityItem.length; j++) {
    if (j  ===  0) {
      if (randomBoolean(90)) {
        result += `${listingId},${amenityItem[j]},${wifi}\n`
      }
    } else if (j === 1) {
      if (randomBoolean(80)) {
        result += `${listingId},${amenityItem[j]},${tv}\n`
      }
    } else if (j === 2) {
      if (randomBoolean(80)) {
        result += `${listingId},${amenityItem[j]},${cableTV}\n`
      }
    } else if (j === 3) {
      if (randomBoolean(80)) {
        result += `${listingId},${amenityItem[j]},${kitchen}\n`
      }
    } else if (j === 4) {
      if (randomBoolean(80)) {
        result += `${listingId},${amenityItem[j]},${iron}\n`
      }
    } else if (j === 5) {
      if (randomBoolean(80)) {
        result += `${listingId},${amenityItem[j]},${dryer}\n`
      }
    } else if (j === 6) {
      if (randomBoolean(80)) {
        result += `${listingId},${amenityItem[j]},${washer}\n`
      }
    } else if (j === 7) {
      if (randomBoolean(80)) {
        result += `${listingId},${amenityItem[j]},${hangers}\n`
      }
    } else if (j === 8) {
      if (randomBoolean(80)) {
        result += `${listingId},${amenityItem[j]},${essentials}\n`
      }
    } else if (j === 9) {
      if (randomBoolean(80)) {
        result += `${listingId},${amenityItem[j]},${laptopFriendlyWorkspace}\n`
      }
    } else if (j === 10) {
      if (randomBoolean(80)) {
        result += `${listingId},${amenityItem[j]},${hotWater}\n`
      }
    } else if (j === 11) {
      if (randomBoolean(80)) {
        result += `${listingId},${amenityItem[j]},${airConditioning}\n`
      }
    }
  }

  return result;
}

const seedBasicAmenity = (callback) => {
  let i = 100;
  writer.write(`listingId,itemId,itemInfo\n`);
  const write = () => {
    let ok = true;
    do {
      let data = generateBasicAmenity(i);
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

seedBasicAmenity(() => {
  console.log('CSV successfully created');
  writer.end();
});