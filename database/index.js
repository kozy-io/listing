const cassandra = require('cassandra-driver');
const redis = require('./redisConnection');
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
  let query = `SELECT * FROM description WHERE listingid=${id}`;

  redis.get(query, (err, result) => {
    if (result) {
      callback(null, result);
    } else {
      client.execute(query, (err, result) => {
        if (err) {
          callback(err);
        } else {
          redis.setex(query, 1600, JSON.stringify(result.rows));
          callback(null, result.rows);
        }
      });
    }
  });

  // client.execute(query, (err, result) => {
  //   if (err) {
  //     callback(err);
  //   } else {
  //     callback(null, result.rows);
  //   }
  // });
}

const getBasicAmenity = (id, callback) => {
  client.execute(`SELECT * FROM basisAmenity WHERE listingid=${id}`, (err, result) => {
    if (err){
      callback(err)
    } else {
      callback(null, result.rows);
    }
    // Run next function in series
  });
}

const getSpecialAmenity = (id, callback) => {
  client.execute(`SELECT * FROM description WHERE listingid=${id}`, (err, result) => {
    if (err){
      callback(err)
    } else {
      callback(null, result.rows);
    }
    // Run next function in series
  });
}

const updateDescription = () => {
  
}

const updateBasicAmenity = () => {
  
}


module.exports.getDescription = getDescription;
module.exports.getBasicAmenity = getBasicAmenity;
module.exports.getSpecialAmenity = getSpecialAmenity;
