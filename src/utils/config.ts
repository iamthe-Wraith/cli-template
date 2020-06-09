import os from 'os';
import fs from 'fs';
import path from 'path';
import { IConfig } from '../types';

const configUrl: string = path.join(os.homedir(), '.{{projectName}}rc');

/***
 * retrieves the user's .{{projectName}}rc file's contents,
 * parses it into JSON format, and then returns it.
 *
 * @return {IConfig} - the entire config object
 ***/
export const getConfig = (): IConfig => {
  try {
    const config = <IConfig>JSON.parse(fs.readFileSync(configUrl, 'utf8'));

    return config;
  } catch (err) {
    throw new Error(`utils/config:getConfig error\n\n${err.message}`);
  }
};
