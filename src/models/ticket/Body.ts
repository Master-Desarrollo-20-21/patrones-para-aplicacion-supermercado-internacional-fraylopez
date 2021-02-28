import assert from "assert";
import { ILine } from "./ILine";


export class Body {
  private readonly lines: ILine[];

  constructor() {
    this.lines = [];
  }

  addItem(line: ILine) {
    this.lines.push(line);
  }

  repeatLast() {
    assert(this.lines.length > 0);
    this.lines.push(this.lines[this.lines.length - 1]);
  }

  cancelLast() {
    assert(this.lines.length > 0);
    // TODO:
  }


  render(): string {
    return this.lines
      .map(l => l.getText())
      .join("\n");
  }
}
