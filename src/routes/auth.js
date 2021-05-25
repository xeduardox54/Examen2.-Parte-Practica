import express from 'express';
import {
    getOneEntity,
    getEntities,
    newEntity,
    updEntity,
    delEntity
} from '../components/entities/controller';
import validationHandler from '../utils/middlewares/validationHandler';
import {getDelEntitySchema,createEntitySchema,updateEntitySchema} from '../components/entities/domain/entity';

const router = express.Router();

router.get('/api/entidades/:id',validationHandler(getDelEntitySchema),getOneEntity);
router.get('/api/entidades',validationHandler(getDelEntitySchema),getEntities);
router.post('/api/entidades',validationHandler(createEntitySchema),newEntity);
router.put('/api/entidades/:id',validationHandler(updateEntitySchema),updEntity);
router.delete('/api/entidades/:id',validationHandler(getDelEntitySchema),delEntity);

export default router;