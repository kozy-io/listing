const cassandra = require('cassandra-driver');
const distance = cassandra.types.distance;

const client = new cassandra.Client({
  contactPoints: ['localhost'],
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
  client.execute(`SELECT * FROM description WHERE listingid=${id}`, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result.rows);
    }
  });
}

const getBasicAmenity = (id, callback) => {
  client.execute(`SELECT * FROM basisAmenity WHERE listingid=${id}`, (err, result) => {
    if (err){
      callback(err)
    } else {
      callback(null, result.rows);
    }
  });
}

const getSpecialAmenity = (id, callback) => {
  client.execute(`SELECT * FROM description WHERE listingid=${id}`, (err, result) => {
    if (err){
      callback(err)
    } else {
      callback(null, result.rows);
    }
  });
}

const updateDescription = () => {
  
}

const updateBasicAmenity = () => {
  
}


module.exports.getDescription = getDescription;
module.exports.getBasicAmenity = getBasicAmenity;
module.exports.getSpecialAmenity = getSpecialAmenity;
