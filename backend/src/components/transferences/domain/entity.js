import Joi from 'joi'

const getDelEntitySchema = Joi.object({
  apiKeyToken: Joi.string().regex(/^[0-9a-fA-F]+$/).empty()
})

const createEntitySchema = Joi.object({
  name: Joi.string().required(),
  type: Joi.alternatives().try(
    Joi.string().valid('persona'),
    Joi.string().valid('empresa')
  ).required()
})

const updateEntitySchema = Joi.object({
  name: Joi.string(),
  type: Joi.alternatives().try(
    Joi.string().valid('persona'),
    Joi.string().valid('empresa')
  )
})

export {
  getDelEntitySchema,
  createEntitySchema,
  updateEntitySchema,
}
