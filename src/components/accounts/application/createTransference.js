
/**
 * @param {Object} obj
 * @param {import('../../transferences/application/infraestructure/MongoTransferencesRepository')} obj.TransferencesRepository
 */
 let now = new Date();
 export default ({ TransferencesRepository }) => {
    return async (entity_id,cuenta1_id,cuenta2_id,credit) => {
        const newTransference = {
            entity_id: entity_id,
            from_account: cuenta1_id,
            to_account: cuenta2_id,
            transfered: credit,
            date:now
        };
        return TransferencesRepository.add(newTransference)
    }
  }