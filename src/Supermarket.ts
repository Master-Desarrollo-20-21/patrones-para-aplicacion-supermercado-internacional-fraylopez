import { CountryFactory } from "./CountryFactory";

export class Supermarket {

  private isOpen!: boolean;
  constructor(private readonly countryFactory: CountryFactory) {
    this.open();
  }

  open() {
    this.isOpen = true;
  }

  async operate() {
    do {
      const ticket = this.countryFactory.getTicket();
      const menu = this.countryFactory.getMenu(ticket);
      await menu.execute();
      ticket.close();
    } while (this.isOpen);
  }

  close() {
    this.isOpen = false;
  }
}