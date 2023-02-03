import KoaRouter from '@koa/router';
import { Context } from 'koa';

import { logger } from '@middlewares/index';

const router = new KoaRouter();

router.get('/', logger, (ctx: Context): void => {
  ctx.body = { message: 'Hello Henry' };
});

export default router;
