import MongoTransferencesRepository from './infraestructure/MongoTransferencesRepository'
import getAllTransferences from './application/getAllEntities'
const TransferencesRepository = new MongoTransferencesRepository()

/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */

const getTransferences  = async (_, res, next) => {
  try {
    const query = getAllTransferences ({ TransferencesRepository: TransferencesRepository })
    const transference = await query()
    res.status(200).json({
      data: transference,
      message: 'Transferencias listadas',
    })
  } catch (e) {
    next(e)
  }
}

export default getTransferences