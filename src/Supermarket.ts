import { CountryFactory } from "./CountryFactory";
import { Ticket } from "./models/ticket/Ticket";
import { Menu } from "./utils/Menu";

export class Supermarket {

  private isOpen!: boolean;
  private ticket: Ticket;
  private menu: Menu;
  constructor(countryFactory: CountryFactory) {
    this.open();
    this.ticket = countryFactory.getTicket();
    this.menu = countryFactory.getMenu(this.ticket);
  }

  open() {
    this.isOpen = true;
  }

  async operate() {
    do {
      await this.menu.execute();
    } while (this.isOpen);
  }

  close() {
    this.isOpen = false;
  }
}