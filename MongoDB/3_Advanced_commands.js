//3.1. Aggregation Pipeline

//Match, group, and sort in one pipeline:
db.collection.aggregate([
  { $match: { age: { $gt: 20 } } },
  { $group: { _id: "$city", averageAge: { $avg: "$age" } } },
  { $sort: { averageAge: -1 } }
]);


//3.2. Text Search

//Create a text index and perform a text search:
db.collection.createIndex({ name: "text", city: "text" });
db.collection.find({ $text: { $search: "Alice" } });

//3.3. Geospatial Queries

//Insert documents with location data:
db.collection.insertMany([
  { name: "Place1", location: { type: "Point", coordinates: [ -73.97, 40.77 ] } },
  { name: "Place2", location: { type: "Point", coordinates: [ -73.88, 40.78 ] } }
]);


//Find places near a specific point:

db.collection.find({
  location: {
    $near: {
      $geometry: { type: "Point", coordinates: [ -73.92, 40.75 ] },
      $maxDistance: 1000
    }
  }
});

//3.4. Transactions

//Start a session and a transaction:

const session = db.getMongo().startSession();
session.startTransaction();

try {
  db.collection1.insertOne({ name: "John" }, { session });
  db.collection2.updateOne({ name: "Alice" }, { $set: { city: "San Francisco" } }, { session });
  session.commitTransaction();
} catch (error) {
  session.abortTransaction();
} finally {
  session.endSession();
}


//3.5. Map-Reduce

//Use map-reduce to perform data analysis:

db.collection.mapReduce(
  function() { emit(this.city, 1); },
  function(key, values) { return Array.sum(values); },
  { out: "city_totals" }
);
//