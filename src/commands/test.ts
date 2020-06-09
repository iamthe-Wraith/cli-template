import { IContext } from '../types';
import Logger from 'logger';

export const exec = (ctx: IContext):Promise<IContext> => {
  return new Promise((resolve, reject) => {
    Logger.debug('inside test command');
    resolve(ctx);
  });
};

export const help = () => {
  Logger.debug('getting help docs...');
};
