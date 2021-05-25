import MongoLib from '../../../lib/mongo';

class MongoEntitiesRepository { // implement an interface
  constructor () {
    // super()
    this.collection = 'entities'
    this.mongoDB = new MongoLib()
  }

  async get (id) {
    return this.mongoDB.get(this.collection,id)
  }

  async getAll () {
    return this.mongoDB.getAll(this.collection)
  }

  async add (entity) {
    await this.mongoDB.create(this.collection, entity)
    return entity
  }

  async update (id,entity) {
    await this.mongoDB.update(this.collection, id, entity)
    return entity
  }

  async delete (id) {
    await this.mongoDB.delete(this.collection, id)
    return id
  }
}

export default MongoEntitiesRepository