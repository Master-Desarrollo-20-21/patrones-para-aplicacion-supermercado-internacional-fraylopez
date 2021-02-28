import { Footer } from "./Footer";
import { Header } from "./Header";
import { Body } from "./Body";

export class Ticket {

  private isOpen: boolean;

  constructor(
    private readonly header: Header,
    private readonly body: Body,
    private readonly footer: Footer
  ) {
    this.isOpen = false;
  }

  render(): string {
    return this.header.render() + "\n" +
      this.body.render() + "\n" +
      this.footer.render();
  }

  canBeOpen(): boolean {
    return !this.isOpen;
  }

  open(): void {
    this.isOpen = true;
  }

  isClosable(): boolean {
    return this.isOpen;
  }

  close(): void {
    this.isOpen = false;
  }

  isPrintable() {
    return true;
  }
}
