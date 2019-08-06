CREATE KEYSPACE kozy IF NOT EXISTS
  WITH REPLICATION = {
    'class' : 'SimpleStrategy',
    'replication_factor' : 1
    }

DROP TABLE IF EXISTS kozy.description;
DROP TABLE IF EXISTS kozy.basicAmenity;
DROP TABLE IF EXISTS kozy.specialAmenity;

CREATE TABLE IF NOT EXISTS kozy.description (
  listingId int,
  hostName varchar,
  hostPic varchar,
  descriptionItem varchar,
  descriptionInfo varchar,
  PRIMARY KEY (listingId, descriptionItem)
);

CREATE TABLE IF NOT EXISTS kozy.basicAmenity (
  listingId int,
  amenityItem varchar,
  amenityInfo varchar,
  PRIMARY KEY (listingId, amenityItem) 
);

CREATE TABLE IF NOT EXISTS kozy.specialAmenity (
  listingId int,
  category varchar,
  amenityItem varchar,
  amenityInfo varchar,
  PRIMARY KEY (listingId, amenityItem) 
);

COPY kozy.description (listingId, hostName, hostPic, descriptionItem, descriptionInfo) from '/Users/jonathan/hrsf/kozy.io/listing/database/cassCSV/description.csv' WITH DELIMITER=',' AND HEADER=TRUE;
COPY kozy.basicAmenity (listingId, amenityItem, amenityInfo) from '/Users/jonathan/hrsf/kozy.io/listing/database/cassCSV/basicAmenity.csv' WITH DELIMITER=',' AND HEADER=TRUE;
COPY kozy.specialAmenity (listingId, category, amenityItem, amenityInfo) from '/Users/jonathan/hrsf/kozy.io/listing/database/cassCSV/specialAmenity.csv' WITH DELIMITER=',' AND HEADER=TRUE;
