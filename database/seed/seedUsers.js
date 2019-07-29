const faker = require('faker');
const fs = require('fs');

const writer = fs.createWriteStream('../csv/user.csv');

const generateUserInfo = () => {
  userName = faker.name.firstName();
  userPic = faker.image.avatar();
  return `${userName},${userPic},${true}\n`
}

const seedUser = (callback) => {
  let i = 10000000;
  writer.write(`userName,userPic,isHost\n`);
  const write = () => {
    let ok = true;
    do {
      let data = generateUserInfo();
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

seedUser(() => {
  console.log('CSV successfully created');
});