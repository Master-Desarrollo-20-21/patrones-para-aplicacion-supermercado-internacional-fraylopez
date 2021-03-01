import { Ticket } from "../models/ticket/Ticket";

export class OpenTicketController {

  constructor(private readonly ticket: Ticket) { }

  open() {
    this.ticket.open();
  }

  canBeOpened(): boolean {
    return this.ticket.canBeOpen();
  }
}
