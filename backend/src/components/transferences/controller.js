import MongoTransferencesRepository from './infraestructure/MongoTransferencesRepository'
import getAllTransferences from './application/getAllTransferences'
const TransferencesRepository = new MongoTransferencesRepository()

/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */

const getTransferences  = async (req, res, next) => {
  try {
    const query = getAllTransferences ({ TransferencesRepository: TransferencesRepository })
    const transferences = await query()
    const datos = transferences.filter((transference)=>{ if(transference.entity_id==req.params.id) return transference})
    res.status(200).json({
      data: datos,
      message: 'Transferencias listadas',
    })
  } catch (e) {
    next(e)
  }
}

export default getTransferences