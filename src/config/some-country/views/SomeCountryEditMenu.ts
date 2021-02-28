import { Ticket } from "../../../models/ticket/Ticket";
import { Menu } from "../../../utils/Menu";
import { SomeCountryTicketController } from "../controllers/SomeCountryTicketController";
import { SomeCountryOnlyCommand } from "./SomeCountryOnlyCommand";

export class SomeCountryEditMenu extends Menu {
  constructor(ticket: Ticket) {
    super();
    const controller = new SomeCountryTicketController(ticket);
    this.addCommand(new SomeCountryOnlyCommand(controller));
  }
}
