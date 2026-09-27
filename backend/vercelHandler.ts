import { connectDB } from './config/db';

let databaseConnection: Promise<void> | undefined;
let appPromise: Promise<import('express').Express> | undefined;

export function createVercelHandler(routePath: string, requiresDatabase = false) {
  return async function handler(request: any, response: any) {
    process.env.VERCEL = '1';
    try {
      appPromise ??= import('./server').then(({ app }) => app);
      const app = await appPromise;

      if (requiresDatabase) {
        databaseConnection ??= connectDB();
        await databaseConnection;
      }

      const query = request.url?.includes('?') ? request.url.slice(request.url.indexOf('?')) : '';
      request.url = `${routePath}${query}`;
      return app(request, response);
    } catch (error) {
      databaseConnection = undefined;
      const message = error instanceof Error ? error.message : 'Serverless API initialization failed';
      console.error(`[Vercel API] ${message}`);
      response.status(503).json({ message });
    }
  };
}