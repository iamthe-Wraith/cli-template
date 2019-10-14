const logger = require('logger');

export const exec = (ctx:any):Promise<any> => {
  return new Promise((resolve, reject) => {
    logger.debug('inside test command');
    resolve(ctx);
  });
};

export const help = () => {
  logger.debug('getting help docs...');
};
