import express from 'express';
import {
    getOneEntity,
    getEntities,
    newEntity,
    updEntity,
    delEntity
} from '../components/entities/controller';
import {
    getOneAccount,
    getAccounts,
    newAccount,
    updAccount,
    delAccount,
    payAccount,
    disburseAccount,
    transferAccount
} from '../components/accounts/controller';
import validationHandler from '../utils/middlewares/validationHandler';
import {getDelEntitySchema,createEntitySchema,updateEntitySchema} from '../components/entities/domain/entity';
import {getDelAccountSchema,createAccountSchema,updateAccountSchema} from '../components/accounts/domain/account';

const router = express.Router();
//CRUD para registrar entidades
router.get('/api/entidades/:id',validationHandler(getDelEntitySchema),getOneEntity);
router.get('/api/entidades',validationHandler(getDelEntitySchema),getEntities);
router.post('/api/entidades',validationHandler(createEntitySchema),newEntity);
router.put('/api/entidades/:id',validationHandler(updateEntitySchema),updEntity);
router.delete('/api/entidades/:id',validationHandler(getDelEntitySchema),delEntity);
//CRUD para cuentas cupo
router.get('/api/cuentas/:id',validationHandler(getDelAccountSchema),getOneAccount);
router.get('/api/cuentas',validationHandler(getDelAccountSchema),getAccounts);
router.post('/api/cuentas',validationHandler(createAccountSchema),newAccount);
router.put('/api/cuentas/:id',validationHandler(updateAccountSchema),updAccount);
router.delete('/api/cuentas/:id',validationHandler(getDelAccountSchema),delAccount);
//API para abonar y desembolsar cuenta
router.put('/api/abonar/:id',payAccount);
router.put('/api/desembolsar/:id',disburseAccount);
//API para transferir dinero
router.put('/api/transferir/:id',transferAccount);
export default router;