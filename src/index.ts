import { getConfig } from './utils/config';
import commands from './commands';
import { IContext } from './types';
import Parser from 'parser';
const logger = require('logger');

const [node, ns, command, ...args] = process.argv;
const ctx = <IContext>{
  ...Parser.init(node, ns, command, args),
  config: getConfig()
};

if (ctx.command === null) {
  logger.error(`\n[-] no command entered\n`);
  process.exit(1);
} else if (!commands.has(ctx.command)) {
  logger.error(`\n[-] invalid command\n`);
  process.exit(1);
}

require(`./commands/${ctx.command}`).exec(ctx)
  .then((ctx: IContext):void => {
    /* perform any universal completion processing here */
  })
  .catch((err:Error):void => logger.error(`\n${err.message}\n`));
