import { Ticket } from "../models/ticket/Ticket";

export class CloseTicketController {

  constructor(private readonly ticket: Ticket) { }

  isClosable(): boolean {
    return this.ticket.isClosable();
  }

  close() {
    throw new Error("Method not implemented.");
  }
}
