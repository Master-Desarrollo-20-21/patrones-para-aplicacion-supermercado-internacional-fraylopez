import { Ticket } from "../models/ticket/Ticket"

export class EditTicketController<T extends Ticket = Ticket> {

  constructor(protected readonly ticket: T) { }

  addLine(inputData: string) {
    this.ticket.addLine(inputData);
  }

  repeatLast() {
    this.ticket.repeatLast();
  }

  isEditable(): boolean {
    return this.ticket.isOpen();
  }
}
