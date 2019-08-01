const fs = require('fs');

const writer = fs.createWriteStream('../csvPostgres/basicAmenityItem.csv');

const generateBasicAmenityItem = () => {
  const amenityItem = ['Wifi', 'TV', 'Cable TV', 'Kitchen', 'Iron', 'Dryer', 'Washer', 'Hangers', 'Essentials', 'Laptop Friendly Workspace', 'Hot Water', 'Air Conditioning'];
  let result = '';
  for (let i = 0; i < amenityItem.length; i++) {
    result += `${amenityItem[i]}\n`
  }
  return result;
}

writer.write(`itemName\n`)
writer.write(generateBasicAmenityItem());
writer.end();
console.log('CSV successfully created');