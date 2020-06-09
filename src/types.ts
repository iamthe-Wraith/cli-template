interface IColorsOptional {
  TITLE?:string;
  GEN?:string;
  SUCCESS?:string;
  WARN?:string;
  ERROR?:string;
  DEBUG?:string;
  COMPLETE?:string;
}

export interface IColors {
  TITLE:string;
  GEN:string;
  SUCCESS:string;
  WARN:string;
  ERROR:string;
  DEBUG:string;
  COMPLETE:string;
}

export interface IConfig {
  temp: string;
}

export interface IContext {
  command: string;
  namespace: string;
  args: string[];
  config: IConfig;
  [prop: string]: any;
}
