const fs = require('fs');

const writer = fs.createWriteStream('../csv/descriptionItem.csv');

const generateDescriptionItem = () => {
  const descriptionItem = ['Title', 'Location', 'BedroomNum', 'BathroomNum', 'Bed Types', 'Bed Number', 'Guest Number', 'Room Type', 'Room Highlight', 'Location Highlight', 'Owner Highlight', 'Clean Highlight', 'License Or Registartion Number', 'General', 'Guest Access', 'Interation With Guests', 'The Space', 'Other Things To Note'];
  let result = '';
  for (let i = 0; i < descriptionItem.length; i++) {
    result += `${descriptionItem[i]}\n`
  }
  return result;
}

writer.write(`itemName\n`, () => {
  console.log('Header created');
});
writer.write(generateDescriptionItem(), () => {
  console.log('CSV successfully created')
});
writer.end();