import MongoLib from '../../../lib/mongo';

class MongoTransferencesRepository { // implement an interface
  constructor () {
    // super()
    this.collection = 'transferences'
    this.mongoDB = new MongoLib()
  }

  async getAll () {
    return this.mongoDB.getAll(this.collection)
  }

  async add (transference) {
    await this.mongoDB.create(this.collection, transference)
    return transference
  }
}

export default MongoTransferencesRepository