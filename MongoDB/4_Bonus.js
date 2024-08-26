//4. Bonus: MongoDB Shell Tips
//Count documents:
db.collection.countDocuments({ age: { $gt: 20 } });
//Check collection statistics:
db.collection.stats();
