import { Footer } from "./Footer";
import { Header } from "./Header";
import { Body } from "./Body";

export class Ticket {


  protected _isOpen: boolean;

  constructor(
    private readonly header: Header,
    private readonly body: Body,
    private readonly footer: Footer
  ) {
    this._isOpen = false;
  }

  render(): string {
    return this.header.render() + "\n" +
      this.body.render() + "\n" +
      this.footer.render();
  }

  isOpen(): boolean {
    return this._isOpen;
  }

  canBeOpen(): boolean {
    return !this._isOpen;
  }

  open(): void {
    this._isOpen = true;
  }

  isClosable(): boolean {
    return this._isOpen;
  }

  close(): void {
    this._isOpen = false;
  }

  isPrintable() {
    return this._isOpen;
  }

  addLine(inputData: string) {
    this.body.addLine(inputData);
  }

  repeatLast() {
    this.body.repeatLast();
  }

}
