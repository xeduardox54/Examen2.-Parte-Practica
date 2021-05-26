import Joi from 'joi'

const getDelAccountSchema = Joi.object({
  apiKeyToken: Joi.string().regex(/^[0-9a-fA-F]+$/).empty()
})

const createAccountSchema = Joi.object({  
  owner_id: Joi.string().required(),
  credit: Joi.number().precision(2).required()
})

const updateAccountSchema = Joi.object({
  owner_id: Joi.string(),
  credit: Joi.number().precision(2),
  creation_date: Joi.date()
})

export {
  getDelAccountSchema,
  createAccountSchema,
  updateAccountSchema,
}
