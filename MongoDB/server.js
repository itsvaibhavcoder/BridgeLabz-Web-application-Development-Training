const {MongoClient} = require('mongodb');

async function main(){
    const uri = "your_mogodb_connection_string";
    const client = new MongoClient(uri);
    try{
        await client.connect();
        const database = client.db('sample_db');
        const collection = database.collection('sample_collection');


        //Insert a Document
        await collection.insertOne({name: "vaibhav", age: 25});

        //Query Documents
        const result = await collection.find({age: {$gt: 20}}).toArray();
        console.log(result);

       //Update a document
       await collection.updateOne({name: "vaibhav"}, {$set: {age: 26}});

       //Delete a document
       await collection.deleteOne({name: "vaibhav"});
    }

    finally{
        await client.close();
    }
}

main().catch(console.error);
