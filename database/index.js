const cassandra = require('cassandra-driver');

const client = new cassandra.Client({contactPoints: ['localhost'], localDataCenter: 'datacenter1', keyspace: 'kozy'});

const getDescription = (id, callback) => {
  client.execute(`SELECT * FROM description WHERE listingid=${id}`, (err, result) => {
    if (err){
      callback(err)
    } else {
      callback(null, result.rows);
    }
    // Run next function in series
  });
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