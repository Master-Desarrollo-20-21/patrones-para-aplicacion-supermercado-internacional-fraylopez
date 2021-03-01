import { EditTicketController } from "../../../controllers/IEditTicketController";
import { TicketController } from "../../../controllers/TicketController";
import { SomeCountryTicket } from "../models/SomeCountryTicket";
import { SomeCountryEditTicketController } from "./SomeCountryEditTicketController";


export class SomeCountryTicketController extends TicketController<SomeCountryTicket> {
  someCountryOnlyMethod() {
    this.ticket.someCountryLineOperation();
  }

  protected getEditController(ticket: SomeCountryTicket): EditTicketController {
    return new SomeCountryEditTicketController(ticket);
  }
}
