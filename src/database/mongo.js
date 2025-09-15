import { MongoClient, ServerApiVersion } from 'mongodb'

export const Mongo = {
   async connect({ mongoConnectionString, mongoDbName }) {
    try {
      const client = new MongoClient(mongoConnectionString)

      await client.connect()
      const db = client.db(mongoDbName)

      Mongo.client = client
      Mongo.db = db

      return { success: true, text: 'Connected to MongoDB!' }

    } catch (error) {
      return {text: `Error connecting: ${error.message}` }
    }
  }
}