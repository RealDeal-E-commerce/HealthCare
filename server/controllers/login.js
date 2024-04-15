// authController.js
import { PrismaClient } from '@prisma/client';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {User} = require('../database-mysql/index');

const prisma = new PrismaClient();

export const register = async (req, res) => {
  try {
    const { userType, username, email, password, phoneNumber, firstName, lastName, speciality, imageUrl } = req.body;
    if (!password) {
      return res.status(400).json({ error: 'Password is required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { userType, username, email, password: hashedPassword, phoneNumber, firstName, lastName, speciality, imageUrl },
    });
    res.status(201).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Registration failed' });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    if (!password || !user.password) {
      console.log('password', password);
      return res.status(400).json({ error: 'Password is required' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });
    res.status(200).json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed' });
  }
};