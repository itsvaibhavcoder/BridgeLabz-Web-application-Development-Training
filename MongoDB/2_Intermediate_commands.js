//2. Intermediate MongoDB Queries

//2.1. Projection

//Return specific fields:
db.collection.find({ age: { $gt: 20 } }, { name: 1, city: 1, _id: 0 });

//2.2. Sorting

//Sort documents by age in ascending order:
db.collection.find().sort({ age: 1 });

//Sort by multiple fields:
db.collection.find().sort({ city: 1, age: -1 });

//2.3. Limiting and Skipping

//Limit the number of documents returned:
db.collection.find().limit(5);

//Skip a number of documents:
db.collection.find().skip(10);

//2.4. Aggregation

//Basic aggregation to group by a field:
db.collection.aggregate([
  { $group: { _id: "$city", total: { $sum: 1 } } }
]);

//2.5. Indexing

//Create an index on a field:
db.collection.createIndex({ name: 1 });

//Create a compound index:
db.collection.createIndex({ name: 1, age: -1 });