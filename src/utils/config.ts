import os from 'os';
import fs from 'fs';
import path from 'path';
import { ConfigInterface } from '../types';

const configUrl:string = path.join(os.homedir(), '.{{projectName}}rc');

/***
 * retrieves the user's .{{projectName}}rc file's contents,
 * parses it into JSON format, and then returns it.
 *
 * @return {ConfigInterface} - the entire config object
 ***/
export const getConfig = ():ConfigInterface => {
  try {
    const config:ConfigInterface = JSON.parse(fs.readFileSync(configUrl, 'utf8'));

    return config;
  } catch (err) {
    throw new Error(`utils/config:getConfig error\n\n${err.message}`);
  }
};
