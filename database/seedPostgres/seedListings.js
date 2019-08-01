const fs = require('fs');

const writer = fs.createWriteStream('../csvPostgres/listing.csv');

const generateListing = () => {
  return `${Math.floor(Math.random() * 10000000) + 1}\n`;
}

const seedListing = (callback) => {
  let i = 10000000;
  writer.write(`hostId\n`);
  const write = () => {
    let ok = true;
    do {
      let data = generateListing();
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

seedListing(() => {
  console.log('CSV successfully created');
});