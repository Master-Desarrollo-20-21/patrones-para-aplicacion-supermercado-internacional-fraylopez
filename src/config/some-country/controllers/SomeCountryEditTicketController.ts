import { EditTicketController } from "../../../controllers/IEditTicketController";
import { SomeCountryTicket } from "../models/SomeCountryTicket";

export class SomeCountryEditTicketController extends EditTicketController<SomeCountryTicket> {
  someCountryLineOperation(): void {
    this.ticket.someCountryLineOperation();
  }
}
