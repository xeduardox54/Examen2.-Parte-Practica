
/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoAccountsRepository')} obj.AccountsRepository
 */
 export default ({ AccountsRepository }) => {
    return async ({id},{cantidad},{owner_id,credit,creation_date}) => {
        const Account = {
            owner_id:owner_id,
            credit:parseInt(credit)+parseInt(cantidad),
            creation_date:creation_date
        };
        return AccountsRepository.update(id,Account)
    }
}
  