import MongoLib from '../../../lib/mongo';

class MongoAccountsRepository { // implement an interface
  constructor () {
    // super()
    this.collection = 'accounts'
    this.mongoDB = new MongoLib()
  }

  async get (id) {
    return this.mongoDB.get(this.collection,id)
  }

  async getAll () {
    return this.mongoDB.getAll(this.collection)
  }

  async add (account) {
    await this.mongoDB.create(this.collection, account)
    return account
  }

  async update (id,account) {
    await this.mongoDB.update(this.collection, id, account)
    return account
  }

  async delete (id) {
    await this.mongoDB.delete(this.collection, id)
    return id
  }
}

export default MongoAccountsRepository