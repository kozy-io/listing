const cassandra = require('cassandra-driver');
const distance = cassandra.types.distance;

const client = new cassandra.Client({
  contactPoints: ['3.16.149.53'],
  localDataCenter: 'datacenter1',
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
  let query = `SELECT * FROM basisAmenity WHERE listingid=${id}`;
  client.execute(query, (err, result) => {
    if (err) {
      callback(err)
    } else {
      callback(null, result.rows);
    }
  });
}

const getSpecialAmenity = (id, callback) => {
  let query = `SELECT * FROM description WHERE listingid=${id}`;
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
