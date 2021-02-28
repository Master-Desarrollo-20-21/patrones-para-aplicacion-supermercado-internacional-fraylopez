import { TicketController } from "../../../controllers/TicketController";
import { Ticket } from "../../../models/ticket/Ticket";


export class SomeCountryTicketController extends TicketController {
  constructor(ticket: Ticket) {
    super(ticket);
  }

  someCountryOnlyMethod() {
    throw new Error("Method not implemented.");
  }
}
