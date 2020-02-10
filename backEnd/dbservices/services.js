const util = require('util');
const mongoClient = require('mongodb').MongoClient;

class MongodbService{
    constructor(url, dbname){
        this.url = url;
        this.dbname = dbname;
    }
    


    async connect() {
        const connect = util.promisify(mongoClient.connect);

        this.client = await connect(this.url);
        this.database = this.client.db(this.dbname);
    }

    disconnect() {
        this.client.close();
    }

    find(collection, parameters = {}) {
        return new Promise((resolve, reject) => {
            this.database.collection(collection).find(parameters).toArray(function (error, data) {
                if (error) reject();

                resolve(data);
            });
        });
    }


    findOne(collection, parameters) {
        return new Promise((resolve, reject) => {
            this.database.collection(collection).findOne(parameters, function (error, data) {
                if (error) reject();

                resolve(data);
            });
        });
    }

    insert(collection, parameters) {
        return new Promise((resolve, reject) => {
            this.database.collection(collection).insertOne(parameters, function (error) {
                if (error) reject();

                resolve();
            });
        });
    }

    update(collection, findParameters, setParameters) {
        return new Promise((resolve, reject) => {
            this.database.collection(collection).updateOne(findParameters, {$set : setParameters} ,function (error) {
                if (error) reject();

                resolve();
            });
        });
    }

    find(collection, parameters) {
        return new Promise((resolve, reject) => {
            this.database.collection(collection).deleteOne(parameters, function (error) {
                if (error) reject();

                resolve();
            });
        });
    }
}

module.exports = MongodbService;