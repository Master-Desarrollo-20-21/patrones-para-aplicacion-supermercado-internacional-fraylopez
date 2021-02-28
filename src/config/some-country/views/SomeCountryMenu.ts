import { TicketController } from "../../../controllers/TicketController";
import { Ticket } from "../../../models/ticket/Ticket";
import { EditTicketCommand } from "../../../views/EditTicketCommand";
import { SupermarketMenu } from "../../../views/SupermarketMenu";
import { SomeCountryEditMenu } from "./SomeCountryEditMenu";
import { SomeCountryTicketController } from "../controllers/SomeCountryTicketController";

export class SomeCountryMenu extends SupermarketMenu<SomeCountryTicketController> {
  constructor(ticket: Ticket) {
    super(new SomeCountryTicketController(ticket));
    this.addCommand(new EditTicketCommand(new SomeCountryEditMenu(ticket), this.controller));
  }
}
