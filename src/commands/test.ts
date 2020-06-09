import { IContext } from '../types';
const logger = require('logger');

export const exec = (ctx: IContext):Promise<IContext> => {
  return new Promise((resolve, reject) => {
    logger.debug('inside test command');
    resolve(ctx);
  });
};

export const help = () => {
  logger.debug('getting help docs...');
};
