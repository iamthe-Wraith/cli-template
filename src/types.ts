export interface ColorsInterface {
  TITLE:string;
  GEN:string;
  SUCCESS:string;
  WARN:string;
  ERROR:string;
  DEBUG:string;
  COMPLETE:string;
}

interface ColorsOptionalInterface {
  TITLE?:string;
  GEN?:string;
  SUCCESS?:string;
  WARN?:string;
  ERROR?:string;
  DEBUG?:string;
  COMPLETE?:string;
}

export interface ConfigInterface {
  colors:ColorsInterface;
};
