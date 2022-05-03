import { Router } from 'express';
import petController from '../controllers/PetController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', petController.index);
router.get('/:id', petController.show);
router.get('/user/:id', loginRequired, petController.showUserPets);
router.post('/', loginRequired, petController.create);
router.put('/:id', loginRequired, petController.update);
router.delete('/:id', loginRequired, petController.delete);

export default router;
