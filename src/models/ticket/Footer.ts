import { Header } from "./Header";

export class Footer {
  constructor(private readonly header: Header) { }
  render(): string {
    return this.header.render();
  }
}
