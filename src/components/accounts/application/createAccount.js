
/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoAccountsRepository')} obj.AccountsRepository
 */
 let now = new Date();
 export default ({ AccountsRepository }) => {
    return async ({owner_id,credit}) => {
        const newAccount = {
            owner_id:owner_id,
            credit:credit,
            creation_date:now
        };
        return AccountsRepository.add(newAccount)
    }
  }