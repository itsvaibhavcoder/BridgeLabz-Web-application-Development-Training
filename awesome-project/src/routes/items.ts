// src/routes/items.ts
import { Router } from 'express';
import {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} from '../controllers/itemsController';

const router: Router = Router();

// CRUD routes
router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', createItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;
