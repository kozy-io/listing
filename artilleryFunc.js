'use strict';

const generateGetRequestData = (userContext, events, done) => {
  const listingId = Math.floor(Math.random() * 100) + 1;
  userContext.vars.listingId = listingId;
  return done();
}

module.exports = {
 generateGetRequestData,
};