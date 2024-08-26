//1. Basic MongoDB Queries
//1.1. Inserting Documents

//Insert a single document: 
db.collection.insertOne({ name: "John", age: 25, city: "New York" });

//Insert multiple documents:
db.collection.insertMany([
  { name: "Alice", age: 28, city: "Los Angeles" },
  { name: "Bob", age: 23, city: "Chicago" }
]);

//1.2. Querying Documents

//Find all documents: db.collection.find();

//Find specific documents with a condition:
db.collection.find({ age: 25 });

//Find one document:
db.collection.findOne({ name: "John" });

//1.3. Updating Documents

//Update a single document:
db.collection.updateOne({ name: "John" }, { $set: { age: 26 } });

//Update multiple documents:
db.collection.updateMany({ city: "New York" }, { $set: { city: "Boston" } });

//1.4. Deleting Documents

//Delete a single document:
db.collection.deleteOne({ name: "John" });

//Delete multiple documents:
db.collection.deleteMany({ city: "Boston" });
