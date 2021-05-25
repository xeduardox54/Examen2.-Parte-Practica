import MongoAccountsRepository from './infraestructure/MongoAccountsRepository'
import getAccount from './application/getAccount'
import getAllAccounts from './application/getAllAccounts'
import createAccount from './application/createAccount'
import updateAccount from './application/updateAccount'
import deleteAccount from './application/deleteAccount'
const AccountsRepository = new MongoAccountsRepository()

/**
 * @param {import('express').Request} _
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */

export const getOneAccount = async (req, res, next) => {
  try {
    const query = getAccount({ AccountsRepository: AccountsRepository })
    const account = await query(req.params)
    if (account == null) res.status(200).json({message: 'Cuenta no encontrada'})
    res.status(200).json({
      data: account,
      message: 'Cuenta listada',
    })
  } catch (e) {
    next(e)
  }
}

export const getAccounts  = async (_, res, next) => {
  try {
    const query = getAllAccounts ({ AccountsRepository: AccountsRepository })
    const accounts = await query()
    res.status(200).json({
      data: accounts,
      message: 'Cuentas listadas',
    })
  } catch (e) {
    next(e)
  }
}

export const newAccount = async (req, res, next) => {
  try {
    const query = createAccount({ AccountsRepository: AccountsRepository })
    const account = await query(req.body)
    res.status(201).json({
      data: account,
      message: 'Cuenta creada',
    })
  } catch (e) {
    next(e)
  }
}
export const updAccount = async (req, res, next) => {
  try {
    const query = updateAccount({ AccountsRepository: AccountsRepository })
    const account = await query(req.params,req.body)
    res.status(201).json({
      data: account,
      message: 'Cuenta actualizada',
    })
  } catch (e) {
    next(e)
  }
}

export const delAccount = async (req, res, next) => {
  try {
    const query = deleteAccount({ AccountsRepository: AccountsRepository })
    const id = await query(req.params)
    res.status(201).json({
      id: id,
      message: 'Cuenta eliminada',
    })
  } catch (e) {
    next(e)
  }
}