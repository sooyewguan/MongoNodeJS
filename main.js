const { MongoClient, ObjectId } = require('mongodb');

async function main() {
	/**
	 * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
	 * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
	 */
	const uri = "mongodb+srv://m001-student:p4ssw0rd@sandbox.epk5x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
	const client = new MongoClient(uri);

	try {
		// Connect to the MongoDB cluster
		await client.connect(); 	// asynchronous process

		const database = client.db("chapter4");
		const collection = database.collection("sample");

		const res = await collection.deleteOne(
			{
				_id: ""
			}
		);

		console.log(res)

	} catch (e) {		// exception
		console.error(e);
	} finally {
		await client.close();
	}
}

async function listDatabases(client) {
	databasesList = await client.db().admin().listDatabases();

	console.log("Databases:");
	databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);