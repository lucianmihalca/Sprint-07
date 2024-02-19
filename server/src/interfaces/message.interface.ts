import { Document } from 'mongoose';

/**
 * Interfaz IMessage para modelar mensajes.
 * Nota: Mongoose maneja automáticamente la conversión entre ObjectId y string.
 * Esto significa que aunque los campos `senderId` y `receiverId` se definen como string,
 * Mongoose los trata como ObjectId al interactuar con MongoDB, facilitando la referencia
 * a otros documentos sin complicaciones de tipo.
 */
export interface IMessage extends Document {
  _id?: string;
  senderId: string; // Referencia a User, convertida automáticamente de/para ObjectId por Mongoose
  receiverId: string; // Referencia a User, convertida automáticamente de/para ObjectId por Mongoose
  message: string;
}
