import z from 'zod';
export const loginSchema = z.object({
  userName: z.string().min(1, 'Name is required').max(20, 'Name must be 20 characters or less'),
  password: z.string().min(6, 'Password must be at least 6 characters long 👻')
});
