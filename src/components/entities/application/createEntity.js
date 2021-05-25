
/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoEntitiesRepository')} obj.EntitiesRepository
 */
 export default ({ EntitiesRepository }) => {
    return async ({name,type, accounts}) => {
        const newEntity = {
            name: name,
            type: type,
            accounts: accounts,
        };
        return EntitiesRepository.add(newEntity)
    }
  }
  