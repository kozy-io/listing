# Listing
> Display relevant information for a listing. Create new listings, and update or delete existing one.

## API Server Routes

| HTTP Method   | Endpoint                           | Description                                              |
|:--------------|:-----------------------------------|:---------------------------------------------------------|
| GET           | /listing/desc/:listingID           | Return detail description of the listing                 |
| GET           | /listing/amenity/:listingID        | Return amenity information of the listing                |
| POST          | /listing/:listingID                | Add description and amenity information for a listing    |
| PUT           | /listing/desc/:listingID           | Update description of an existing listing                |
| PUT           | /listing/amentiy/:listingID        | Update amenity information of an existing listing        |
| DELETE        | /listing/:listingID                | delete description and amenity information for a listing |

#### `GET /listing/desc/:listingID`
**Parameters**: Listing ID

Given a specific listing ID, this request will send back detail description about listing (e.g title, location).

#### `GET /listing/amenity/:listingID`
**Parameters**: Listing ID

Given a specific listing ID, the response will send back amenity information about listing (e.g wifi, washer).

#### `POST /listing/:listingID`
**Parameters**: Listing ID

Creates listing information(general description and amenity) at the given listing ID.

#### `PUT /listing/desc/:listingID?[field]`
**Parameters**: Listing ID

**Query String**:
- Please see ___ for all available field options

Given the listing ID, update the specified description field.

#### `PUT /listing/amenity/:listingID?[field]`
**Parameters**: Listing ID

**Query String**:
- Please see ___ for all available field options

Given the listing ID, update the specified amenity information field.

#### `DELETE /booking/:reservationID`
**Parameters**: Listing ID

Given the reservation ID, cancels the reservation and removes it from the reserved time.

