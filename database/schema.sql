DROP TABLE description;
DROP TABLE basicAmenity;
DROP TABLE specialAmenity;
DROP TABLE listings;
DROP TABLE descriptionItem;
DROP TABLE basicAmenityItem;
DROP TABLE specialAmenityItem;
DROP TABLE users;



CREATE TABLE IF NOT EXISTS users (
  userId BIGSERIAL NOT NULL PRIMARY KEY,
  userName VARCHAR(50) NOT NULL,
  userPic VARCHAR(100),
  isHost BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS descriptionItem (
  itemId SMALLSERIAL NOT NULL PRIMARY KEY,
  itemName VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS basicAmenityItem (
  itemId SMALLSERIAL NOT NULL PRIMARY KEY,
  itemName VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS specialAmenityItem (
  itemId SMALLSERIAL NOT NULL PRIMARY KEY,
  itemName VARCHAR(50) NOT NULL,
  category VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS listings (
  listingId BIGSERIAL PRIMARY KEY,
  userId INT NOT NULL REFERENCES users(userId)
);

CREATE TABLE IF NOT EXISTS description (
  descriptionId  BIGSERIAL NOT NULL PRIMARY KEY,
  listingId BIGINT NOT NULL REFERENCES listings(listingId),
  itemId INT NOT NULL REFERENCES descriptionItem(itemId),
  itemInfo VARCHAR(150)
);

CREATE TABLE IF NOT EXISTS basicAmenity (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  listingId BIGINT NOT NULL REFERENCES listings(listingId),
  itemId SMALLINT NOT NULL REFERENCES basicAmenityItem(itemId),
  itemInfo VARCHAR(150)
);

CREATE TABLE IF NOT EXISTS specialAmenity (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  listingId BIGINT NOT NULL REFERENCES listings(listingId),
  itemId SMALLINT NOT NULL REFERENCES specialAmenityItem(itemId),
  itemInfo VARCHAR(150)
);

COPY users (userName, userPic, isHost) from '/Users/jonathan/hrsf/kozy.io/listing/database/csvPostgres/users.csv' DELIMITER ',' CSV HEADER;
COPY descriptionItem (itemName) from '/Users/jonathan/hrsf/kozy.io/listing/database/csvPostgres/descriptionItem.csv' DELIMITER ',' CSV HEADER;
COPY basicAmenityItem (itemName) from '/Users/jonathan/hrsf/kozy.io/listing/database/csvPostgres/basicAmenityItem.csv' DELIMITER ',' CSV HEADER;
COPY specialAmenityItem (itemName, category) from '/Users/jonathan/hrsf/kozy.io/listing/database/csvPostgres/specialAmenityItem.csv' DELIMITER ',' CSV HEADER;
COPY listings (userId) from '/Users/jonathan/hrsf/kozy.io/listing/database/csvPostgres/listings.csv' DELIMITER ',' CSV HEADER;
COPY description (listingId, itemId, itemInfo) from '/Users/jonathan/hrsf/kozy.io/listing/database/csvPostgres/description.csv' DELIMITER ',' CSV HEADER;
COPY basicAmenity (listingId, itemId, itemInfo) from '/Users/jonathan/hrsf/kozy.io/listing/database/csvPostgres/basicAmenity.csv' DELIMITER ',' CSV HEADER;
COPY specialAmenity (listingId, itemId, itemInfo) from '/Users/jonathan/hrsf/kozy.io/listing/database/csvPostgres/specialAmenity.csv' DELIMITER ',' CSV HEADER;

CREATE index idx_userId ON listings(userId);
CREATE index idx_desc_listingId ON description(listingId);
CREATE index idx_b_amen_listingId ON basicAmenity(listingId);
CREATE index idx_s_amen_listingId ON specialAmenity(listingId);
