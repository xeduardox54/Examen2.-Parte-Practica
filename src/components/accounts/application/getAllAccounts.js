
/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoAccountsRepository')} obj.AccountsRepository
 */
 export default ({ AccountsRepository }) => {
    return async () => {
      return AccountsRepository.getAll()
    }
  }  