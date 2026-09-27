import { connectDB } from './config/db';
import { app } from './server';

let databaseConnection: Promise<void> | undefined;

export function createVercelHandler(routePath: string) {
  return async function handler(request: any, response: any) {
    databaseConnection ??= connectDB();
    await databaseConnection;

    const query = request.url?.includes('?') ? request.url.slice(request.url.indexOf('?')) : '';
    request.url = `${routePath}${query}`;
    return app(request, response);
  };
}