import type { VercelRequest, VercelResponse } from '@vercel/node';

import app from '../src/app.js';

const vercelEntryPointHandler = (req: VercelRequest, res: VercelResponse) => {
  return app(req, res);
};

export default vercelEntryPointHandler;