// src/models/user.ts

export interface User {
    id: number;
    username: string;
    password: string; // In a real app, you should store hashed passwords
  }
  
  export const users: User[] = [];
  