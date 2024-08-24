// src/controllers/authController.ts
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User, users } from '../models/user';
import dotenv from 'dotenv';

dotenv.config();
// Secret key for JWT (use environment variables for production)
const JWT_SECRET = process.env.JWT_SECRET;

// Register a new user
export const register = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  // Check if the user already exists
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    res.status(400).json({ message: 'User already exists' });
    return;
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create and store the new user
  const newUser: User = {
    id: users.length + 1,
    username,
    password: hashedPassword,
  };
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully' });
};

// Login a user
export const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  // Find the user
  const user = users.find(user => user.username === username);
  if (!user) {
    res.status(400).json({ message: 'Invalid credentials' });
    return;
  }

  // Compare the password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(400).json({ message: 'Invalid credentials' });
    return;
  }

  // Generate a JWT token
  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });

  res.json({ message: 'Login successful', token });
};
