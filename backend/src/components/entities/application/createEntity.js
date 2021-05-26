
/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoEntitiesRepository')} obj.EntitiesRepository
 */
 export default ({ EntitiesRepository }) => {
    return async ({name,type}) => {
        const newEntity = {
            name: name,
            type: type
        };
        return EntitiesRepository.add(newEntity)
    }
  }
  