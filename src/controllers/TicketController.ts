import { Ticket } from "../models/ticket/Ticket";
import { CloseTicketController } from "./CloseTicketController";
import { EditTicketController } from "./IEditTicketController";
import { OpenTicketController } from "./OpenTicketController";
import { PrintTicketController } from "./PrintTicketController";

export abstract class TicketController<T extends Ticket = Ticket> {
  protected readonly openTicketController: OpenTicketController;
  protected readonly printTicketController: PrintTicketController;
  protected readonly closeTicketController: CloseTicketController;
  protected readonly editTicketController: EditTicketController;

  constructor(protected readonly ticket: T) {
    this.openTicketController = new OpenTicketController(ticket);
    this.printTicketController = new PrintTicketController(ticket);
    this.closeTicketController = new CloseTicketController(ticket);
    this.editTicketController = this.getEditController(ticket);
  }

  isClosable(): boolean {
    return this.closeTicketController.isClosable();
  }

  close() {
    this.closeTicketController.close();
  }

  isPrintable(): boolean {
    return this.printTicketController.isPrintable();
  }

  print(): string {
    return this.printTicketController.print();
  }

  canBeOpened(): boolean {
    return this.openTicketController.canBeOpened();
  }

  open() {
    return this.openTicketController.open();
  }

  isOpen(): boolean {
    return this.ticket.isOpen();
  }

  isEditable(): boolean {
    return this.editTicketController.isEditable();
  }

  addLine(inputData: string) {
    this.editTicketController.addLine(inputData);
  }

  repeatLast() {
    this.editTicketController.repeatLast();
  }

  protected abstract getEditController(ticket: Ticket): EditTicketController;
}
