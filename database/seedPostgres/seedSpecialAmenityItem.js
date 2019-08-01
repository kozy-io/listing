const fs = require('fs');

const writer = fs.createWriteStream('../csvPostgres/specialAmenityItem.csv');

const generateSpecialAmenityItem = () => {
  const specialAmenityItem = ['Breakfast', 'Coffee Maker', 'Refrigerator', 'Dishwasher', 'Oven', 'Private entrance', 'Private livingroom', 'Bed linens', 'Extra pillows and blankets', 'Hair dryer', 'Hangers', 'Lock on bedroom door', 'Shampoo', 'BBQ grill', 'Patio or balcony', 'Garden or backyard', 'First aid kit', 'Fire extinguisher', 'Carbon monoxide detector', 'Smoke detector', 'Elevator', 'Free Parking On Premises', 'Gym', 'Hot Tub', 'Pool', 'Bathtub', 'Babysitter Recommendations', 'Crib'];
  let result = '';
  for (let i = 0; i < specialAmenityItem.length; i++) {
    if (i >= 0 && i <= 4) {
      result += `${specialAmenityItem[i]},Dining\n`
    } else if (i >= 5 && i <= 6) {
      result += `${specialAmenityItem[i]},Guest Access\n`
    } else if (i >= 7 && i <= 12) {
      result += `${specialAmenityItem[i]},Bed And Bath\n`
    } else if (i >= 13 && i <= 15) {
      result += `${specialAmenityItem[i]},Outdoor\n`
    } else if (i >= 16 && i <= 19) {
      result += `${specialAmenityItem[i]},Safety Features\n`
    } else if (i >= 20 && i <= 24) {
      result += `${specialAmenityItem[i]},Facilities\n`
    } else if (i >= 25 && i <= 27) {
      result += `${specialAmenityItem[i]},Family Features\n`
    }
    
  }
  return result;
}

writer.write(`itemName,category\n`)
writer.write(generateSpecialAmenityItem());
writer.end();
console.log('CSV successfully created');