import { connectDB } from '../backend/config/db';
import { app } from '../backend/server';

let databaseConnection: Promise<void> | undefined;

export default async function handler(request: any, response: any) {
  databaseConnection ??= connectDB();
  await databaseConnection;
  return app(request, response);
}