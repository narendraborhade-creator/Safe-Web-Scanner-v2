import { connectDB } from './config/db';

let databaseConnection: Promise<void> | undefined;
let appPromise: Promise<import('express').Express> | undefined;

export function createVercelHandler(routePath: string, requiresDatabase = false) {
  return async function handler(request: any, response: any) {
    process.env.VERCEL = '1';
    appPromise ??= import('./server').then(({ app }) => app);

    if (requiresDatabase) {
      databaseConnection ??= connectDB();
      await databaseConnection;
    }

    const query = request.url?.includes('?') ? request.url.slice(request.url.indexOf('?')) : '';
    request.url = `${routePath}${query}`;
    const app = await appPromise;
    return app(request, response);
  };
}