export class Instruction {
  id: number;
  name: string;
  f: string;
  cssClass: string;

  constructor(opts) {
    this.id = opts.id;
    this.name = opts.name;
    this.f = opts.f;
    this.cssClass = opts.cssClass;
  }
}
