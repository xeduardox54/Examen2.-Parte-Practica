import MongoAccountsRepository from './infraestructure/MongoAccountsRepository'
import getAccount from './application/getAccount'
import getAllAccounts from './application/getAllAccounts'
import createAccount from './application/createAccount'
import updateAccount from './application/updateAccount'
import deleteAccount from './application/deleteAccount'
import payOneAccount from './application/payAccount'
import disburseOneAccount from './application/disburseAccount'
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

export const payAccount = async (req, res, next) => {
  try {
    var query = getAccount({ AccountsRepository: AccountsRepository })
    const oldAccount = await query(req.params)
    if (oldAccount == null) res.status(200).json({message: 'Cuenta no encontrada'})
    query = payOneAccount({ AccountsRepository: AccountsRepository })
    const account = await query(req.params,req.query,oldAccount)
    res.status(200).json({
      data: account,
      message: 'Crédito abonado',
    })
  } catch (e) {
    next(e)
  }
}

export const disburseAccount = async (req, res, next) => {
  try {
    var query = getAccount({ AccountsRepository: AccountsRepository })
    const oldAccount = await query(req.params)
    if (oldAccount == null) res.status(200).json({message: 'Cuenta no encontrada'})
    query = disburseOneAccount({ AccountsRepository: AccountsRepository })
    const account = await query(req.params,req.query,oldAccount)
    res.status(200).json({
      data: account,
      message: 'Crédito desembolsado',
    })
  } catch (e) {
    next(e)
  }
}

export const transferAccount = async (req, res, next) => {
  try {
    var query = getAccount({ AccountsRepository: AccountsRepository })
    const account1 = await query({id:req.query.cuenta1})
    const account2 = await query({id:req.query.cuenta2})
    if (account1 == null || account2 == null) {res.status(200).json({message: 'Cuenta no encontrada'}); return}
    if (account1.owner_id != account2.owner_id) {res.status(200).json({message: 'Las cuentas deben ser de la misma entidad'}); return}
    if (parseInt(account1.credit) < parseInt(req.query.cantidad)) {res.status(200).json({message: 'Saldo insuficiente'}); return}
    query = disburseOneAccount({ AccountsRepository: AccountsRepository })
    const accountDisbursed = await query({id:req.query.cuenta1},req.query,account1)
    query = payOneAccount({ AccountsRepository: AccountsRepository })
    const accountPayed = await query({id:req.query.cuenta2},req.query,account2)
    res.status(200).json({
      data: [
        accountDisbursed,
        accountPayed,
      ],
      message: 'Crédito transferido',
    })
  } catch (e) {
    next(e)
  }
}