
/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoEntitiesRepository')} obj.EntitiesRepository
 */
 export default ({ EntitiesRepository }) => {
    return async ({id},{name,type}) => {
        const Entity = {
            name: name,
            type: type,
        };
        return EntitiesRepository.update(id,Entity)
    }
}
  