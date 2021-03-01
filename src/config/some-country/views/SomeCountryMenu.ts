import { SupermarketMenu } from "../../../views/SupermarketMenu";
import { SomeCountryEditMenu } from "./SomeCountryEditMenu";
import { SomeCountryTicketController } from "../controllers/SomeCountryTicketController";
import { SomeCountryTicket } from "../models/SomeCountryTicket";
import { Menu } from "../../../utils/Menu";

export class SomeCountryMenu extends SupermarketMenu<SomeCountryTicketController> {
  constructor(private readonly ticket: SomeCountryTicket) {
    super(new SomeCountryTicketController(ticket));
  }

  getEditMenu(): Menu {
    return new SomeCountryEditMenu(this.controller);
  }
}
