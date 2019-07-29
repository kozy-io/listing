DROP TABLE listings;
DROP TABLE users;
DROP TABLE description;
DROP TABLE descriptionItem;
DROP TABLE basicAmenity;
DROP TABLE basicAmenityItem;
DROP TABLE specialAmenity;
DROP TABLE specialAmenityItem;

CREATE TABLE IF NOT EXISTS listings (
  listingId BIGSERIAL,
  hostId INT NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
  userId BIGSERIAL NOT NULL,
  userName VARCHAR(50) NOT NULL,
  userPic VARCHAR(100),
  isHost BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS description (
  descriptionId  BIGSERIAL NOT NULL,
  listingId BIGINT NOT NULL,
  itemId INT NOT NULL,
  itemInfo VARCHAR(150)
);

CREATE TABLE IF NOT EXISTS descriptionItem (
  itemId SMALLSERIAL NOT NULL,
  itemName VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS basicAmenity (
  id BIGSERIAL NOT NULL,
  listingId BIGINT NOT NULL,
  itemId SMALLINT NOT NULL,
  itemInfo VARCHAR(150)
);

CREATE TABLE IF NOT EXISTS basicAmenityItem (
  itemId SMALLSERIAL NOT NULL,
  itemName VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS specialAmenity (
  id BIGSERIAL NOT NULL,
  listingId BIGINT NOT NULL,
  itemId SMALLINT NOT NULL,
  itemInfo VARCHAR(150)
);

CREATE TABLE IF NOT EXISTS specialAmenityItem (
  itemId SMALLSERIAL NOT NULL,
  itemName VARCHAR(50) NOT NULL,
  category VARCHAR(50) NOT NULL
);

COPY listings (hostId) from '/Users/jonathan/hrsf/kozy.io/listing/database/csv/listings.csv' DELIMITER ',' CSV HEADER;
COPY users (userName, userPic, isHost) from '/Users/jonathan/hrsf/kozy.io/listing/database/csv/users.csv' DELIMITER ',' CSV HEADER;
COPY description (listingId, itemId, itemInfo) from '/Users/jonathan/hrsf/kozy.io/listing/database/csv/description.csv' DELIMITER ',' CSV HEADER;
COPY descriptionItem (itemName) from '/Users/jonathan/hrsf/kozy.io/listing/database/csv/descriptionItem.csv' DELIMITER ',' CSV HEADER;
COPY basicAmenity (listingId, itemId, itemInfo) from '/Users/jonathan/hrsf/kozy.io/listing/database/csv/basicAmenity.csv' DELIMITER ',' CSV HEADER;
COPY basicAmenityItem (itemName) from '/Users/jonathan/hrsf/kozy.io/listing/database/csv/basicAmenityItem.csv' DELIMITER ',' CSV HEADER;
COPY specialAmenity (listingId, itemId, itemInfo) from '/Users/jonathan/hrsf/kozy.io/listing/database/csv/specialAmenity.csv' DELIMITER ',' CSV HEADER;
COPY specialAmenityItem (itemName, category) from '/Users/jonathan/hrsf/kozy.io/listing/database/csv/specialAmenityItem.csv' DELIMITER ',' CSV HEADER;