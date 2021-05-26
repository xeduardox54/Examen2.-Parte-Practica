
/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoTransferencesRepository')} obj.TransferencesRepository
 */
 export default ({ TransferencesRepository }) => {
    return async () => {
      return TransferencesRepository.getAll()
    }
  }  