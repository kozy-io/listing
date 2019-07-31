const fs = require('fs');

const writer = fs.createWriteStream('../csvPostgres/basicAmenity.csv');

const randomBoolean = (percentTrue) => {
  return Math.floor(Math.random() * 100) + 1 <= percentTrue;
}

const generateBasicAmenity = (listingId) => {

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
  for (let j = 1; j < 11; j++) {
    if (j  ===  1) {
      if (randomBoolean(90)) {
        result += `${listingId},${j},${wifi}\n`
      }
    } else if (j === 2) {
      if (randomBoolean(80)) {
        result += `${listingId},${j},${tv}\n`
      }
    } else if (j === 3) {
      if (randomBoolean(80)) {
        result += `${listingId},${j},${cableTV}\n`
      }
    } else if (j === 4) {
      if (randomBoolean(80)) {
        result += `${listingId},${j},${kitchen}\n`
      }
    } else if (j === 5) {
      if (randomBoolean(80)) {
        result += `${listingId},${j},${iron}\n`
      }
    } else if (j === 6) {
      if (randomBoolean(80)) {
        result += `${listingId},${j},${dryer}\n`
      }
    } else if (j === 7) {
      if (randomBoolean(80)) {
        result += `${listingId},${j},${washer}\n`
      }
    } else if (j === 8) {
      if (randomBoolean(80)) {
        result += `${listingId},${j},${hangers}\n`
      }
    } else if (j === 9) {
      if (randomBoolean(80)) {
        result += `${listingId},${j},${essentials}\n`
      }
    } else if (j === 10) {
      if (randomBoolean(80)) {
        result += `${listingId},${j},${laptopFriendlyWorkspace}\n`
      }
    } else if (j === 11) {
      if (randomBoolean(80)) {
        result += `${listingId},${j},${hotWater}\n`
      }
    } else if (j === 12) {
      if (randomBoolean(80)) {
        result += `${listingId},${j},${airConditioning}\n`
      }
    }
  }

  return result;
}

const seedBasicAmenity = (callback) => {
  let i = 10000000;
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