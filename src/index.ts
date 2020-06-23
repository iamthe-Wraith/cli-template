import { getConfig } from './utils/config';
import commands from '@iamthe-wraith/commands';
import { IContext } from './types';
import Parser from '@iamthe-wraith/cmd-line-parser';
import { Logger } from '@iamthe-wraith/logger';

Logger.init({});
const [node, ns, command, ...args] = process.argv;
const ctx = <IContext>{
  ...Parser.init(node, ns, command, args),
  config: getConfig()
};

if (ctx.command === null) {
  Logger.error(`\n[-] no command entered\n`);
  process.exit(1);
} else if (!commands.has(ctx.command)) {
  Logger.error(`\n[-] invalid command\n`);
  process.exit(1);
}

require(`./commands/${ctx.command}`).exec(ctx)
  .then((ctx: IContext):void => {
    /* perform any universal completion processing here */
  })
  .catch((err:Error):void => Logger.error(`\n${err.message}\n`));
