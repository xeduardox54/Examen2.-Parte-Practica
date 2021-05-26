
/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoEntitiesRepository')} obj.EntitiesRepository
 */
 export default ({ EntitiesRepository }) => {
    return async () => {
      return EntitiesRepository.getAll()
    }
  }  