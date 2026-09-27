import { connectDB } from './config/db';
import { app } from './server';

let databaseConnection: Promise<void> | undefined;

export function createVercelHandler(routePath: string, requiresDatabase = false) {
  return async function handler(request: any, response: any) {
    if (requiresDatabase) {
      databaseConnection ??= connectDB();
      await databaseConnection;
    }

    const query = request.url?.includes('?') ? request.url.slice(request.url.indexOf('?')) : '';
    request.url = `${routePath}${query}`;
    return app(request, response);
  };
}