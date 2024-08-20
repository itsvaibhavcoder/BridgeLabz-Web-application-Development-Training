# MongoDB Queries from Basic to Advanced

## Getting Started with MongoDB

To begin working with MongoDB, follow these steps:

1. **Start MongoDB server** from the command line: 
   ```bash
   mongod
   ```
   This command starts the MongoDB server, which listens for connections from MongoDB clients.

2. **Open MongoDB shell** to write queries:
   ```bash
   mongosh
   ```
   This command opens the MongoDB shell where you can execute MongoDB commands.

### Basic MongoDB Commands

1. **Show all databases**:
   ```javascript
   show dbs
   ```
   This command lists all the databases available on your MongoDB server.

2. **Create or switch to a database**:
   ```javascript
   use database_name
   ```
   This command switches to the specified database. If the database does not exist, MongoDB will create it.

3. **Create a new collection** in the database:
   ```javascript
   db.createCollection('collection_name')
   ```
   This command creates a new collection in the current database.

## 1. Basic MongoDB Queries

### 1.1. Inserting Documents

- **Insert a single document**: 
  ```javascript
  db.collection.insertOne({ name: "John", age: 25, city: "New York" });
  ```
  This command inserts one document into the specified collection.

- **Insert multiple documents**:
  ```javascript
  db.collection.insertMany([
    { name: "Alice", age: 28, city: "Los Angeles" },
    { name: "Bob", age: 23, city: "Chicago" }
  ]);
  ```
  This command inserts multiple documents into the specified collection.

### 1.2. Querying Documents

- **Find all documents**: 
  ```javascript
  db.collection.find();
  ```
  This command retrieves all documents from the specified collection.

- **Find specific documents with a condition**:
  ```javascript
  db.collection.find({ age: 25 });
  ```
  This command retrieves documents that match the specified condition.

- **Find one document**:
  ```javascript
  db.collection.findOne({ name: "John" });
  ```
  This command retrieves the first document that matches the specified condition.

### 1.3. Updating Documents

- **Update a single document**:
  ```javascript
  db.collection.updateOne({ name: "John" }, { $set: { age: 26 } });
  ```
  This command updates the first document that matches the specified condition.

- **Update multiple documents**:
  ```javascript
  db.collection.updateMany({ city: "New York" }, { $set: { city: "Boston" } });
  ```
  This command updates all documents that match the specified condition.

### 1.4. Deleting Documents

- **Delete a single document**:
  ```javascript
  db.collection.deleteOne({ name: "John" });
  ```
  This command deletes the first document that matches the specified condition.

- **Delete multiple documents**:
  ```javascript
  db.collection.deleteMany({ city: "Boston" });
  ```
  This command deletes all documents that match the specified condition.

## 2. Intermediate MongoDB Queries

### 2.1. Projection

- **Return specific fields**:
  ```javascript
  db.collection.find({ age: { $gt: 20 } }, { name: 1, city: 1, _id: 0 });
  ```
  This command retrieves documents that match the condition and returns only the specified fields.

### 2.2. Sorting

- **Sort documents by age in ascending order**:
  ```javascript
  db.collection.find().sort({ age: 1 });
  ```
  This command retrieves all documents sorted by age in ascending order.

- **Sort by multiple fields**:
  ```javascript
  db.collection.find().sort({ city: 1, age: -1 });
  ```
  This command retrieves all documents sorted by city in ascending order and age in descending order.

### 2.3. Limiting and Skipping

- **Limit the number of documents returned**:
  ```javascript
  db.collection.find().limit(5);
  ```
  This command limits the number of documents returned to 5.

- **Skip a number of documents**:
  ```javascript
  db.collection.find().skip(10);
  ```
  This command skips the first 10 documents and retrieves the rest.

### 2.4. Aggregation

- **Basic aggregation to group by a field**:
  ```javascript
  db.collection.aggregate([
    { $group: { _id: "$city", total: { $sum: 1 } } }
  ]);
  ```
  This command groups documents by city and counts the number of documents in each group.

### 2.5. Indexing

- **Create an index on a field**:
  ```javascript
  db.collection.createIndex({ name: 1 });
  ```
  This command creates an ascending index on the name field.

- **Create a compound index**:
  ```javascript
  db.collection.createIndex({ name: 1, age: -1 });
  ```
  This command creates a compound index on the name and age fields.

## 3. Advanced MongoDB Queries

### 3.1. Aggregation Pipeline

- **Match, group, and sort in one pipeline**:
  ```javascript
  db.collection.aggregate([
    { $match: { age: { $gt: 20 } } },
    { $group: { _id: "$city", averageAge: { $avg: "$age" } } },
    { $sort: { averageAge: -1 } }
  ]);
  ```
  This command filters documents by age, groups them by city, calculates the average age for each group, and sorts the results by average age in descending order.

### 3.2. Text Search

- **Create a text index and perform a text search**:
  ```javascript
  db.collection.createIndex({ name: "text", city: "text" });
  db.collection.find({ $text: { $search: "Alice" } });
  ```
  This command creates a text index on the name and city fields and performs a text search for the word "Alice".

### 3.3. Geospatial Queries

- **Insert documents with location data**:
  ```javascript
  db.collection.insertMany([
    { name: "Place1", location: { type: "Point", coordinates: [ -73.97, 40.77 ] } },
    { name: "Place2", location: { type: "Point", coordinates: [ -73.88, 40.78 ] } }
  ]);
  ```
  This command inserts documents with geospatial data.

- **Find places near a specific point**:
  ```javascript
  db.collection.find({
    location: {
      $near: {
        $geometry: { type: "Point", coordinates: [ -73.92, 40.75 ] },
        $maxDistance: 1000
      }
    }
  });
  ```
  This command finds documents that are within a specified distance from a given point.

### 3.4. Transactions

- **Start a session and a transaction**:
  ```javascript
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
  ```
  This command demonstrates how to perform multiple operations within a transaction.

### 3.5. Map-Reduce

- **Use map-reduce to perform data analysis**:
  ```javascript
  db.collection.mapReduce(
    function() { emit(this.city, 1); },
    function(key, values) { return Array.sum(values); },
    { out: "city_totals" }
  );
  ```
  This command counts the number of documents for each city using map-reduce.

## 4. Bonus: MongoDB Shell Tips

- **Count documents**:
  ```javascript
  db.collection.countDocuments({ age: { $gt: 20 } });
  ```
  This command counts the number of documents that match the specified condition.

- **Check collection statistics**:
  ```javascript
  db.collection.stats();
  ```
  This command returns statistics about the specified collection.

