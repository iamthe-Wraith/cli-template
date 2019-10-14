import { getConfig } from 'utils/config';
import commands from 'commands';
const Parser = require('parser');
const logger = require('logger');

let ctx = { ...Parser.init(...process.argv) };
ctx.config = getConfig();

if (ctx.command === null) {
  logger.error(`\n[-] no command entered\n`);
  process.exit(1);
} else if (!commands.has(ctx.command)) {
  logger.error(`\n[-] invalid command\n`);
  process.exit(1);
}

require(`commands/${ctx.command}`).exec(ctx)
  .then((ctx:any):void => {
    /* perform any universal completion processing here */
  })
  .catch((err:Error):void => logger.error(`\n${err.message}\n`));
