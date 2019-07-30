const faker = require('faker');

const generateLicenseOrRegistartionNumber = () => {
  let result = 'STR-'
  for (let i = 0; i < 7; i++) {
    result += faker.random.number({min:0, max:9});
  }
  return result;
}

const getRandomRoomInfo = (roomType) => { // given room type, increment room numbers
  const bedOptions = ['1 queen bed','1 single bed','1 king bed','2 single beds'];

  const roomInfo = {};

  if (roomType === 'Entire place') {
    roomInfo.bedroomNum = faker.random.number({min:3, max:6});
    roomInfo.bathroomNum = faker.random.number({min:1, max:roomInfo.bedroomNum});
    roomInfo.guestmaxNum = faker.random.number({min:roomInfo.bedroomNum, max:roomInfo.bedroomNum * 2 + 2});
    roomInfo.bedNum = 0;
    const beds = [];
    for (let i = 0; i < roomInfo.bedroomNum; i++) {
      const curBedOption = bedOptions[Math.floor(Math.random() * bedOptions.length)];
      roomInfo.bedNum += parseInt(curBedOption.slice(0,1));
      beds.push(curBedOption);
    };
    roomInfo.bedTypes = `"{${beds.join(',')}}"`;
  } else if (roomType === 'Private room') {
    roomInfo.bedroomNum = 1;
    roomInfo.bathroomNum = 1;
    roomInfo.guestmaxNum = faker.random.number({min:1, max:3});
    roomInfo.bedNum = 0;
    const beds = [bedOptions[Math.floor(Math.random() * bedOptions.length)]];
    roomInfo.bedTypes = `"{${beds.join(',')}}"`;
    roomInfo.bedNum += parseInt(beds[0].slice(0,1));
  } else if (roomType === 'Hotel room') {
    roomInfo.bedroomNum = faker.random.number({min:1, max:3});
    roomInfo.bathroomNum = 1;
    roomInfo.guestmaxNum = faker.random.number({min:roomInfo.bedroomNum, max:roomInfo.bedroomNum * 3});
    roomInfo.bedNum = 0;
    const beds = [];
    for (let i = 0; i < roomInfo.bedroomNum; i++) {
      const curBedOption = bedOptions[Math.floor(Math.random() * bedOptions.length)];
      roomInfo.bedNum += parseInt(curBedOption.slice(0,1));
      beds.push(curBedOption);
    };
    roomInfo.bedTypes = `"{${beds.join(',')}}"`;
  } else if (roomType === 'Shared room') {
    roomInfo.bedroomNum = 1;
    roomInfo.bathroomNum = 1;
    roomInfo.guestmaxNum = faker.random.number({min:1, max:4});
    roomInfo.bedNum = 0;
    const beds = [bedOptions[Math.floor(Math.random() * bedOptions.length)]];
    roomInfo.bedTypes = `"{${beds.join(',')}}"`;
    roomInfo.bedNum += parseInt(beds[0].slice(0,1));
  }

  return roomInfo;
}

const getRoomHighlight = (roomType, bedroomNum, bathroomNum, bedNum, guestmaxNum) => {

  let result = '';

  if (roomType === 'Entire place') {
    result += `Entire apartmen|${guestmaxNum}guest\t${bedroomNum}bedroom\t${bedNum}bed\t${bathroomNum}bath`;
  } else if (roomType === 'Private room') {
    result += `Private room in house|${guestmaxNum}guest\t${bedroomNum}bedroom\t${bedNum}bed\t${bathroomNum}bath`;
  } else if (roomType === 'Hotel room') {
    result += `Entire hotel|${guestmaxNum}guest\t${bedroomNum}bedroom\t${bedNum}bed\t${bathroomNum}bath`;
  } else if (roomType === 'Shared room') {
    result += `Shared room in house|${guestmaxNum}guest\t${bedroomNum}bedroom\t${bedNum}bed\t${bathroomNum}bath`;
  }

  return result
}






module.exports = {generateLicenseOrRegistartionNumber, getRandomRoomInfo, getRoomHighlight};