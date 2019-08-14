const cassandra = require('cassandra-driver');
const distance = cassandra.types.distance;

const client = new cassandra.Client({
  contactPoints: ['18.216.72.250', '13.59.102.186', '18.221.72.88'],
  // contactPoints: ['localhost'],
  localDataCenter: 'us-east-2',
  keyspace: 'kozy',
  pooling: {
    coreConnectionsPerHost: {
      [distance.local] : 2,
      [distance.remote] : 1
    },
    maxRequestsPerConnection: 1000
  }
});

const getDescription = (id, callback) => {
  let query = `SELECT * FROM description WHERE listingid=${id}`;
  client.execute(query, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result.rows);
    }
  });
}

const getBasicAmenity = (id, callback) => {
  let query = `SELECT * FROM basicamenity WHERE listingid=${id}`;
  client.execute(query, (err, result) => {
    if (err) {
      callback(err)
    } else {
      callback(null, result.rows);
    }
  });
}

const getSpecialAmenity = (id, callback) => {
  let query = `SELECT * FROM specialamenity WHERE listingid=${id}`;
  client.execute(query, (err, result) => {
    if (err) {
      callback(err)
    } else {
      callback(null, result.rows);
    }
  });
}

const addDescription = (id, newDesc, callback) => {
  let { descItem, descItemInfo, hostname, hostpic } = newDesc;
  let query = `INSERT INTO description (listingId, hostname, hostpic, descriptionitem, descriptioninfo) VALUES (${id}, '${hostname}', '${hostpic}', '${descItem}', '${descItemInfo}')`;
  client.execute(query, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  })
  client.execute()
}

const updateBasicAmenity = () => {
  
}


module.exports.getDescription = getDescription;
module.exports.getBasicAmenity = getBasicAmenity;
module.exports.getSpecialAmenity = getSpecialAmenity;
module.exports.addDescription = addDescription;
