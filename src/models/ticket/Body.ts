import assert from "assert";

export class Body {
  private readonly lines: string[];

  constructor() {
    this.lines = [];
  }

  addLine(line: string) {
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
    return this.lines.join("\n");
  }
}
