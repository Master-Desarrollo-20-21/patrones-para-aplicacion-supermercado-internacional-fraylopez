import { Ticket } from "../models/ticket/Ticket";

export class OpenTicketController {

  constructor(private readonly ticket: Ticket) { }

  open() {
    throw new Error("Method not implemented.");
  }

  canBeOpened(): boolean {
    return this.ticket.canBeOpen();
  }
}
