import { z } from 'zod';

export const signUpSchema = z
  .object({
    name: z.string().min(1, 'Name is required').max(20, 'Name must be 20 characters or less'),
    fullName: z.string().min(1, 'Full name is required').max(20, 'Full name must be 20 characters or less'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z.string().min(6, 'Password confirmation is required'),
    gender: z.string()
  })

  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords must match'
  })
  .refine(data => data.gender === 'Male' || data.gender === 'Female' || data.gender === 'Non-binary', {
    path: ['gender'],
    message: 'Gender is required'
  });
