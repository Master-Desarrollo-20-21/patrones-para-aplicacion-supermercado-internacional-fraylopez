import { Ticket } from "../models/ticket/Ticket";

export class PrintTicketController {
  print(): string {
    return this.ticket.render();
  }
  isPrintable() {
    return this.ticket.isPrintable();
  }

  constructor(private readonly ticket: Ticket) { }

  isClosable(): boolean {
    return this.ticket.isClosable();
  }
  close() {
    throw new Error("Method not implemented.");
  }
}
