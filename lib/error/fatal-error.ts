export default class FatalError extends Error {
  public isFatal:boolean;

  constructor (msg:string) {
    super(msg);
    this.isFatal = true;
  }
}
