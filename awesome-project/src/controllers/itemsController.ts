import { Request, Response } from 'express';
import {Item, items} from '../models/items';

// Get all items
export const getItems = (req: Request, res: Response): void => {
  res.json(items);
};
// Get a single item
export const getItem = (req: Request, res: Response): void => {
  const item: Item | undefined = items.find(i => i.id === parseInt(req.params.id));
  if (!item) {
    res.status(404).send('Item not found');
    return;
  }
  res.json(item);
};

// Create a new item
export const createItem = (req: Request, res: Response): void => {
  const newItem: Item = {
    id: items.length + 1,
    name: req.body.name,
  };
  items.push(newItem);
  res.status(201).json(newItem);
};

// Update an item
export const updateItem = (req: Request, res: Response): void => {
  const item: Item | undefined = items.find(i => i.id === parseInt(req.params.id));
  if (!item) {
    res.status(404).send('Item not found');
    return;
  }

  item.name = req.body.name || item.name;
  res.json(item);
};

// Delete an item
export const deleteItem = (req: Request, res: Response): void => {
  const index: number = items.findIndex(i => i.id === parseInt(req.params.id));
  if (index === -1) {
    res.status(404).send('Item not found');
    return;
  }

  items.splice(index, 1);
  res.status(204).send();
};
